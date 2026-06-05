import React, { useEffect, useState, useMemo } from 'react';
import { TimeEntriesService } from './services/TimeEntriesService.js';
import { display, value } from './utils/fields.js';
import './app.css';

export default function App() {
  const [timeEntries, setTimeEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(7);

  const service = useMemo(() => new TimeEntriesService(), []);

  const loadData = async (period) => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Loading data for period: ${period} days`);
      const entries = await service.getTimeEntries(period);
      console.log(`Loaded ${entries.length} time entries:`, entries);
      setTimeEntries(entries);
    } catch (err) {
      setError('Failed to load time entries: ' + err.message);
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(selectedPeriod);
  }, [selectedPeriod, service]);

  // Calculate date range for display
  const dateRange = useMemo(() => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - selectedPeriod);
    
    const options = { month: 'short', day: 'numeric' };
    return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
  }, [selectedPeriod]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const stats = {
      'Only Me': { hours: 0, color: '#E8C840' },
      'Delegate Now': { hours: 0, color: '#8B9DC0' },
      'Delegate Later': { hours: 0, color: '#9B7AC0' }
    };

    let totalHours = 0;

    timeEntries.forEach(entry => {
      try {
        const category = display(entry.category);
        const hours = parseFloat(display(entry.duration_hours) || 0);
        totalHours += hours;

        if (stats[category]) {
          stats[category].hours += hours;
        }
      } catch (e) {
        console.error('Error processing entry:', entry, e);
      }
    });

    // Calculate percentages
    Object.keys(stats).forEach(category => {
      stats[category].percentage = totalHours > 0 
        ? Math.round((stats[category].hours / totalHours) * 100) 
        : 0;
    });

    const delegateNowPercentage = totalHours > 0 
      ? Math.round((stats['Delegate Now'].hours / totalHours) * 100) 
      : 0;

    return { stats, totalHours, delegateNowPercentage };
  }, [timeEntries]);

  // Get recent entries
  const recentEntries = useMemo(() => {
    try {
      return [...timeEntries]
        .sort((a, b) => {
          const dateA = new Date(display(a.date));
          const dateB = new Date(display(b.date));
          return dateB - dateA;
        })
        .slice(0, 10);
    } catch (e) {
      console.error('Error sorting entries:', e);
      return timeEntries.slice(0, 10);
    }
  }, [timeEntries]);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="date-range">{dateRange}</div>
        
        <div className="hero-metric">
          <div className="hero-metric-label">Delegate Now</div>
          <div className="hero-metric-value">{metrics.delegateNowPercentage}%</div>
        </div>
        
        <div className="period-toggles">
          <button 
            className={`period-button ${selectedPeriod === 7 ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(7)}
          >
            7d
          </button>
          <button 
            className={`period-button ${selectedPeriod === 14 ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(14)}
          >
            14d
          </button>
          <button 
            className={`period-button ${selectedPeriod === 30 ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(30)}
          >
            30d
          </button>
        </div>
      </div>
      
      <div className="dashboard-divider" />
      
      {/* Simple Visual Metrics */}
      <div className="metrics-section">
        <h2 className="section-title">Category Breakdown</h2>
        <div className="metrics-grid">
          {Object.entries(metrics.stats).map(([category, data]) => (
            <div key={category} className="metric-card">
              <div className="metric-header" style={{ color: data.color }}>
                {category}
              </div>
              <div className="metric-percentage" style={{ color: data.color }}>
                {data.percentage}%
              </div>
              <div className="metric-hours">
                {data.hours.toFixed(1)} hours
              </div>
              <div className="metric-bar">
                <div 
                  className="metric-bar-fill" 
                  style={{ 
                    width: `${data.percentage}%`, 
                    backgroundColor: data.color 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="dashboard-divider" />
      
      {/* Recent Activities */}
      <div className="recent-activities">
        <h2 className="section-title">Recent Activities</h2>
        {error && (
          <div className="error" style={{ marginBottom: '20px' }}>
            Error: {error}
          </div>
        )}
        {recentEntries.length === 0 ? (
          <div style={{ color: '#7A8299', textAlign: 'center', marginTop: '20px' }}>
            No activities found for the selected period.
          </div>
        ) : (
          <div className="activities-list">
            {recentEntries.map((entry, index) => (
              <div key={value(entry.sys_id) || index} className="activity-item">
                <div className="activity-info">
                  <div className="activity-name">
                    {display(entry.activity_description) || 'No description'}
                  </div>
                  <div className={`category-pill ${display(entry.category).toLowerCase().replace(' ', '-')}`}>
                    {display(entry.category)}
                  </div>
                </div>
                <div className="activity-duration">
                  {parseFloat(display(entry.duration_hours) || 0).toFixed(1)}h
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Debug info */}
      <div className="debug-info">
        {timeEntries.length} entries loaded, {selectedPeriod}d period
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
}