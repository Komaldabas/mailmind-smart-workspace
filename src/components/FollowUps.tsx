
import { useState } from 'react'
import { emails } from '../data/email'
import './FollowUps.css'

function FollowUps() {
    const [completed, setCompleted] = useState<number[]>([])

    const followUps = emails.filter(
        (email) => email.category !== 'fyi'
    )

    const toggleComplete = (id: number) => {
        setCompleted((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }

    return (
        <div className="followups-page">
            <h2>Follow-up Tracker</h2>
            <p>Stay on top of every important conversation.</p>

            <div className="followups-list">
                {followUps.map((email) => (
                    <div className="followup-card" key={email.id}>
                        <h3>{email.subject}</h3>
                        <p>{email.summary}</p>
                        <span>From: {email.sender}</span>

                        <div>
                            <button
                                onClick={() => toggleComplete(email.id)}
                            >
                                {completed.includes(email.id)
                                    ? 'Mark Pending'
                                    : 'Mark Complete'}
                            </button>

                            <span
                                className={
                                    completed.includes(email.id)
                                        ? 'status-completed'
                                        : 'status-pending'
                                }
                            >
                                {completed.includes(email.id)
                                    ? 'Completed'
                                    : 'Pending'}

                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FollowUps
