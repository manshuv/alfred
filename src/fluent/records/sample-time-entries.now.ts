import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample time entries with dates from the last 30 days (updated for current date context)
export const timeEntry1 = Record({
    $id: Now.ID['time-entry-1'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Code review for new feature',
        date: '2026-05-15', // Recent date
        duration_hours: 2.5,
        category: 'only_me',
        notes: 'Reviewed authentication module changes'
    }
});

export const timeEntry2 = Record({
    $id: Now.ID['time-entry-2'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Weekly team standup',
        date: '2026-05-15', // Recent date
        duration_hours: 1.0,
        category: 'delegate_now',
        notes: 'Could be handled by senior team member'
    }
});

export const timeEntry3 = Record({
    $id: Now.ID['time-entry-3'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Database optimization',
        date: '2026-05-14', // Recent date
        duration_hours: 4.0,
        category: 'only_me',
        notes: 'Performance tuning for user queries'
    }
});

export const timeEntry4 = Record({
    $id: Now.ID['time-entry-4'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Client meeting preparation',
        date: '2026-05-13', // Recent date
        duration_hours: 1.5,
        category: 'delegate_later',
        notes: 'Could train junior staff to handle this'
    }
});

export const timeEntry5 = Record({
    $id: Now.ID['time-entry-5'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Bug fixing in production',
        date: '2026-05-13', // Recent date
        duration_hours: 3.0,
        category: 'only_me',
        notes: 'Critical security vulnerability'
    }
});

export const timeEntry6 = Record({
    $id: Now.ID['time-entry-6'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Status report writing',
        date: '2026-05-12', // Recent date
        duration_hours: 0.5,
        category: 'delegate_now',
        notes: 'Template-based reports could be automated'
    }
});

export const timeEntry7 = Record({
    $id: Now.ID['time-entry-7'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Architecture design session',
        date: '2026-05-11', // Recent date
        duration_hours: 3.5,
        category: 'only_me',
        notes: 'Key technical decisions required'
    }
});

export const timeEntry8 = Record({
    $id: Now.ID['time-entry-8'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Documentation update',
        date: '2026-05-10', // Recent date
        duration_hours: 2.0,
        category: 'delegate_later',
        notes: 'Technical writing task suitable for delegation'
    }
});

export const timeEntry9 = Record({
    $id: Now.ID['time-entry-9'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Code deployment',
        date: '2026-05-09', // Recent date
        duration_hours: 1.0,
        category: 'delegate_now',
        notes: 'Routine deployment process'
    }
});

export const timeEntry10 = Record({
    $id: Now.ID['time-entry-10'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Research new technologies',
        date: '2026-05-08', // Recent date
        duration_hours: 4.0,
        category: 'only_me',
        notes: 'Evaluation of new frameworks and tools'
    }
});

export const timeEntry11 = Record({
    $id: Now.ID['time-entry-11'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Testing automation setup',
        date: '2026-05-06', // Recent date
        duration_hours: 2.5,
        category: 'delegate_later',
        notes: 'Junior developer could learn this skill'
    }
});

export const timeEntry12 = Record({
    $id: Now.ID['time-entry-12'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Customer support escalation',
        date: '2026-05-04', // Recent date
        duration_hours: 1.5,
        category: 'delegate_now',
        notes: 'Could be handled by support lead'
    }
});

export const timeEntry13 = Record({
    $id: Now.ID['time-entry-13'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Performance analysis',
        date: '2026-05-01', // Recent date
        duration_hours: 3.0,
        category: 'only_me',
        notes: 'Deep system analysis required'
    }
});

export const timeEntry14 = Record({
    $id: Now.ID['time-entry-14'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Team mentoring session',
        date: '2026-04-27', // Recent date
        duration_hours: 2.0,
        category: 'only_me',
        notes: 'One-on-one coaching with junior developer'
    }
});

export const timeEntry15 = Record({
    $id: Now.ID['time-entry-15'],
    table: 'x_snc_alfred_time_entries',
    data: {
        activity_description: 'Vendor evaluation meeting',
        date: '2026-04-22', // Recent date
        duration_hours: 1.0,
        category: 'delegate_later',
        notes: 'Could involve procurement team in future'
    }
});