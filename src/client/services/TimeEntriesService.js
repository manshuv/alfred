export class TimeEntriesService {
  constructor() {
    this.tableName = "x_snc_alfred_time_entries";
  }

  async getTimeEntries(dateRange = 7) {
    try {
      // Calculate the date filter for the last N days
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - dateRange);
      
      const startDateStr = startDate.toISOString().split('T')[0];
      const endDateStr = endDate.toISOString().split('T')[0];

      const response = await fetch(
        `/api/now/table/${this.tableName}?sysparm_display_value=all&sysparm_query=dateBETWEEN${startDateStr}@${endDateStr}&sysparm_order_by=date`,
        {
          headers: {
            "Accept": "application/json",
            "X-UserToken": window.g_ck
          }
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch time entries');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching time entries:', error);
      throw error;
    }
  }

  async getAllTimeEntries() {
    try {
      const response = await fetch(
        `/api/now/table/${this.tableName}?sysparm_display_value=all&sysparm_order_by=date&sysparm_limit=1000`,
        {
          headers: {
            "Accept": "application/json",
            "X-UserToken": window.g_ck
          }
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch all time entries');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching all time entries:', error);
      throw error;
    }
  }

  async createTimeEntry(entryData) {
    try {
      const response = await fetch(
        `/api/now/table/${this.tableName}?sysparm_display_value=all`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-UserToken": window.g_ck
          },
          body: JSON.stringify(entryData)
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create time entry');
      }

      return response.json();
    } catch (error) {
      console.error('Error creating time entry:', error);
      throw error;
    }
  }
}