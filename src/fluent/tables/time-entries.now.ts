import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, DecimalColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_snc_alfred_time_entries = Table({
    name: 'x_snc_alfred_time_entries',
    label: 'Time Entries',
    schema: {
        activity_description: StringColumn({ 
            label: 'Activity Description', 
            maxLength: 255, 
            mandatory: true 
        }),
        date: DateColumn({ 
            label: 'Date', 
            mandatory: true 
        }),
        duration_hours: DecimalColumn({ 
            label: 'Duration (Hours)', 
            mandatory: true 
        }),
        category: ChoiceColumn({
            label: 'Category',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                only_me: { 
                    label: 'Only Me', 
                    sequence: 0 
                },
                delegate_now: { 
                    label: 'Delegate Now', 
                    sequence: 1 
                },
                delegate_later: { 
                    label: 'Delegate Later', 
                    sequence: 2 
                }
            }
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 1000, 
            mandatory: false 
        })
    },
    allow_web_service_access: true,
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    caller_access: 'tracking',
    display: 'activity_description'
})