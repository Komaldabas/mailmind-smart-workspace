import './ClientDecisions.css'
import { useState } from 'react'
import { emails } from '../data/email'

function ClientDecisions() {
    const decisionEmails = emails.filter(
        (email) => email.category === 'client'
    )

    const [decisions, setDecisions] = useState<
        Record<number, string>
    >({})

    const updateDecision = (
        id: number,
        status: string
    ) => {
        setDecisions((prev) => ({
            ...prev,
            [id]: status,
        }))
    }

    return (
        <div className="decisions-page">
            <div className="decisions-header">
                <h2>Client Decisions</h2>
                <p>
                    Review important requests and make
                    confident decisions.
                </p>
            </div>

            <div className="decisions-list">
                {decisionEmails.map((email) => (
                    <div className="decision-card" key={email.id}>
                        <span className="decision-tag">
                            Decision Required
                        </span>

                        <h3>{email.subject}</h3>
                        <p>From: {email.sender}</p>
                        <p>{email.summary}</p>

                        <div className="decision-actions">
                            <button
                                onClick={() =>
                                    updateDecision(email.id, 'Approved')
                                }
                            >
                                Approve
                            </button>

                            <button
                                onClick={() =>
                                    updateDecision(email.id, 'Rejected')
                                }
                            >
                                Reject
                            </button>
                        </div>

                        <p className="decision-status">
                            Status: {decisions[email.id] || 'Pending'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientDecisions
