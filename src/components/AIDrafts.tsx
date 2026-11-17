import './AIDrafts.css'
import { useState } from 'react'
import { emails } from '../data/email'

function AIDrafts() {
    const [selectedId, setSelectedId] = useState(emails[0].id)
    const [draft, setDraft] = useState('')

    const selectedEmail = emails.find(
        (email) => email.id === selectedId
    )

    const generateDraft = () => {
        if (!selectedEmail) return

        const firstName = selectedEmail.sender.split(' ')[0]

        const message = `Hi ${firstName},

Thank you for reaching out regarding "${selectedEmail.subject}".

I have reviewed your message and will follow up with the relevant information shortly.

Best regards,
MailMind Team`

        setDraft(message)
    }

    return (
        <div className="drafts-page">
            <h2>AI Draft Studio</h2>
            <p>Craft thoughtful replies in seconds.</p>

            <div className="drafts-workspace">
                <div className="drafts-input">
                    <h3>01 / Select Conversation</h3>

                    <label htmlFor="draft-email">Choose an email</label>

                    <select
                        id="draft-email"
                        value={selectedId}
                        onChange={(e) => {
                            setSelectedId(Number(e.target.value))
                            setDraft('')
                        }}
                    >
                        {emails.map((email) => (
                            <option key={email.id} value={email.id}>
                                {email.subject}
                            </option>
                        ))}
                    </select>

                    {selectedEmail && (
                        <div className="draft-email-preview">
                            <strong>{selectedEmail.sender}</strong>
                            <h4>{selectedEmail.subject}</h4>
                            <p>{selectedEmail.summary}</p>
                        </div>
                    )}

                    <button onClick={generateDraft}>
                        ✨ Generate Smart Reply
                    </button>
                </div>

                <div className="drafts-output">
                    <h3>02 / Reply Workspace</h3>

                    <label htmlFor="reply-draft">Your Draft</label>

                    <textarea
                        id="reply-draft"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        placeholder="Your reply will appear here..."
                        rows={12}
                    />

                    <button
                        disabled={!draft.trim()}
                        onClick={() => navigator.clipboard.writeText(draft)}
                    >
                        Copy Reply
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AIDrafts