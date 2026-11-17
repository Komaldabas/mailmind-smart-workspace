import { useState } from 'react'
import { emails } from '../data/email'
import './SmartInbox.css'

function SmartInbox() {
    const [selectedId, setSelectedId] = useState(emails[0].id)
    const [search, setSearch] = useState('')
    const [reply, setReply] = useState('')

    const selectedEmail = emails.find(
        (email) => email.id === selectedId
    )

    const filteredEmails = emails.filter((email) =>
        `${email.sender} ${email.subject}`
            .toLowerCase()
            .includes(search.toLowerCase())
    )
    const generateReply = () => {
        if (!selectedEmail) return

        const draft = `Hi ${selectedEmail.sender.split(' ')[0]},

Thank you for your email regarding "${selectedEmail.subject}".

I have received your message and will review the details. I will get back to you with an update shortly.

Best regards,
MailMind Team`

        setReply(draft)
    }

    return (
        <div className="inbox-layout">
            <section className="email-list-panel">
                <div className="inbox-heading">
                    <div>
                        <h2>Smart Inbox</h2>
                        <p>Prioritized by intelligence</p>
                    </div>
                    <span className="email-count">{emails.length}</span>
                </div>

                <input
                    className="email-search"
                    placeholder="Search emails..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="email-list">
                    {filteredEmails.map((email) => (
                        <button
                            key={email.id}
                            className={`email-item ${selectedId === email.id ? 'selected' : ''
                                }`}
                            onClick={() => setSelectedId(email.id)}
                        >
                            <div className="email-item-top">
                                <strong>{email.sender}</strong>
                                <span>{email.time}</span>
                            </div>

                            <h3>{email.subject}</h3>
                            <p>{email.summary}</p>

                            <div className="email-badges">
                                <span className={`category-badge ${email.category}`}>
                                    {email.category === 'client'
                                        ? 'Client Must Reply'
                                        : email.category === 'assistant'
                                            ? 'Assistant Handles'
                                            : 'FYI'}
                                </span>

                                {email.urgent && (
                                    <span className="urgent-badge">Urgent</span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <section className="email-detail-panel">
                {selectedEmail && (
                    <>
                        <div className="detail-heading">
                            <span className="detail-label">EMAIL PREVIEW</span>
                            <h2>{selectedEmail.subject}</h2>
                            <p>
                                From {selectedEmail.sender} · {selectedEmail.email}
                            </p>
                        </div>

                        <div className="email-body">
                            {selectedEmail.body}
                        </div>

                        <div className="ai-analysis">
                            <div className="analysis-title">
                                <span>✦</span>
                                <h3>AI Intelligence Analysis</h3>
                            </div>

                            <div className="analysis-block">
                                <strong>Smart Summary</strong>
                                <p>{selectedEmail.summary}</p>
                            </div>

                            <div className="analysis-block">
                                <strong>Why AI classified this</strong>
                                <p>{selectedEmail.reason}</p>
                            </div>
                        </div>

                        <div className="reply-composer">
                            <h3>✨ AI Reply Assistant</h3>
                            <p>Generate a professional reply and customize it before sending.</p>

                            <button onClick={generateReply}>
                                ✨ Generate Smart Reply
                            </button>

                            {reply && (
                                <div className="reply-editor">
                                    <label>Suggested Reply</label>
                                    <textarea
                                        value={reply}
                                        onChange={(e) => setReply(e.target.value)}
                                        rows={8}
                                    />
                                    <button onClick={() => navigator.clipboard.writeText(reply)}>
                                        Copy Reply
                                    </button>
                                </div>
                            )}
                        </div>

                    </>
                )}
            </section>
        </div>
    )
}

export default SmartInbox
