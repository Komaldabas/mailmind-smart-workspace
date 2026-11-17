import { LayoutDashboard, Mail, GitPullRequest, Clock3, Sparkles, } from 'lucide-react'

import { useState } from 'react'
import './App.css'
import SmartInbox from './components/SmartInbox'
import ClientDecisions from './components/ClientDecisions'
import FollowUps from './components/FollowUps'
import AIDrafts from './components/AIDrafts'

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Smart Inbox', icon: Mail },
  { label: 'Client Decisions', icon: GitPullRequest },
  { label: 'Follow-ups', icon: Clock3 },
  { label: 'AI Draft', icon: Sparkles },
]

function App() {
  const [activePage, setActivePage] = useState('Overview')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"> </div>
          <div>
            <h2>MailMind</h2>
            <span>AI WORKSPACE</span>
          </div>
        </div>

        <div
          className="workspace-label">WORKSPACE</div>
        <nav className="navigation">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={activePage === item.label ? 'nav-item active'
                  : 'nav-item'}
                onClick={() => setActivePage(item.label)}
              >
                <span className="nav-icon" > <Icon size={19} strokeWidth={1.8} /> </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="ai-status">
            <span className="status-dot"></span>
            AI Assistant Ready
          </div>
          <div className="profile">
            <div className="avataar">KD</div>
            <div>
              <strong>My Workspace</strong>
              <p>Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR INTELLIGENT WORKAPACE</p>
            <h1>{activePage}</h1>
          </div>
          <div className="topbar-actions">
            <span className="live-indicators"> AI Powered</span>
            <div className="header-avatar">KD</div>
          </div>
        </header>
        {activePage === 'Smart Inbox' ? (
          <SmartInbox />
        ) : activePage === 'Client Decisions' ? (<ClientDecisions />
        ) : activePage === 'Follow-ups' ? (<FollowUps />
        ) : activePage === 'AI Draft' ? (<AIDrafts />
        ) : (
          <></>
        )}
        {activePage === 'Overview' && (
          <>

            <section className="welcome-card">


              <div>
                <span className="welcome-tag"> YOUR AI COPILOT</span>
                <h2>Make every email count.</h2>
                <p>
                  Turn inbox overload into clarity.Prioritize decisions,track follow-ups, and draft smarter replies.

                </p>
                <button
                  className="primary-button"
                  onClick={() => setActivePage('Smart Inbox')}>
                  Explore Smart Inbox
                </button>
              </div>
              <div className="welcome-visual" aria-hidden="true">

              </div>
            </section>

            <section className="section-heading">
              <div>
                <h2>Your workspace at a glace</h2>
                <p>Intelligence that keeps you one step ahead.</p>
              </div>
            </section>

            <div className="stats-grid">
              <div className="stat-card">
                <span>Total Emails</span>
                <strong>128</strong>
                <p>Across your workspace</p>
              </div>
              <div className="stat-card">
                <span>Need Your Reply</span>
                <strong>24</strong>
                <p>Awaiting your attention</p>
              </div>
              <div className="stat-card">
                <span>Client Decisions</span>
                <strong>08</strong>
                <p>Pending review</p>
              </div>
              <div className="stat-card">
                <span>Follow-ups</span>
                <strong>12</strong>
                <p>Conversations to revisit</p>
              </div>
            </div>

          </>
        )}

      </main>
    </div>

  )
}
export default App
