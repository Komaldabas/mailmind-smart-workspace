
export type EmailCategory = 'assistant' | 'client' | 'fyi'

export interface Email {
    id: number
    sender: string
    email: string
    subject: string
    body: string
    time: string
    category: EmailCategory
    urgent: boolean
    summary: string
    reason: string
}

export const emails: Email[] = [
    {
        id: 1,
        sender: 'Sarah Mitchell',
        email: 'sarah@northstar.com',
        subject: 'Partnership Proposal Approval',
        body: 'Hi, we have finalized the partnership proposal. Could you please review the terms and confirm your approval before Friday?',
        time: '09:42 AM',
        category: 'client',
        urgent: true,
        summary: 'Partnership proposal requires final approval.',
        reason: 'The sender requests a business decision.'
    },
    {
        id: 2,
        sender: 'Daniel Cooper',
        email: 'daniel@skyline.com',
        subject: 'Meeting Reschedule Request',
        body: 'Hello, can we move our meeting from Wednesday to Thursday afternoon? Please let me know what works.',
        time: '09:15 AM',
        category: 'assistant',
        urgent: false,
        summary: 'Sender requests a meeting reschedule.',
        reason: 'This is a routine scheduling task.'
    },
    {
        id: 3,
        sender: 'Product Updates',
        email: 'updates@producthub.com',
        subject: 'Your Weekly Product Digest',
        body: 'Here is your weekly roundup of new product releases, improvements and upcoming features.',
        time: 'Yesterday',
        category: 'fyi',
        urgent: false,
        summary: 'Weekly product updates and announcements.',
        reason: 'Informational email with no action requested.'
    }
]
