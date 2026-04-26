import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>✨ Now with AI-powered scheduling</div>
      <h1 className={styles.headline}>
        The all-in-one platform<br />for modern restaurants
      </h1>
      <p className={styles.sub}>
        Streamline operations, delight guests, and grow your business —<br />
        all from one beautifully simple dashboard.
      </p>
      <div className={styles.actions}>
        <a href="#" className={styles.primary}>Start for free</a>
        <a href="#" className={styles.secondary}>
          <span className={styles.playIcon}>▶</span> Watch demo
        </a>
      </div>
      <div className={styles.social}>
        <span>Trusted by 2,000+ restaurants</span>
        <div className={styles.avatars}>
          {['🧑‍🍳','👩‍💼','👨‍🍳','👩‍🍳','🧑‍💼'].map((e, i) => (
            <span key={i} className={styles.avatar}>{e}</span>
          ))}
        </div>
        <div className={styles.stars}>{'★'.repeat(5)} <span>4.9/5</span></div>
      </div>
      <div className={styles.dashboardWrapper}>
        <div className={styles.dashboard}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', height: '100%' }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        {[
          { label: 'Revenue today', value: '$4,280', change: '+12%', color: '#5C6B2E' },
          { label: 'Orders', value: '142', change: '+8%', color: '#3B82F6' },
          { label: 'Avg. ticket', value: '$30.14', change: '+3%', color: '#8B5CF6' },
          { label: 'Table turns', value: '3.2x', change: '+5%', color: '#F59E0B' },
        ].map(card => (
          <div key={card.label} style={{
            flex: 1, background: '#F9FAFB', borderRadius: '10px',
            padding: '16px', border: '1px solid #E5E7EB'
          }}>
            <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '6px' }}>{card.label}</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: card.color }}>{card.value}</div>
            <div style={{ fontSize: '11px', color: '#10B981', marginTop: '4px' }}>{card.change} vs yesterday</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 2, background: '#F9FAFB', borderRadius: '10px', padding: '16px', border: '1px solid #E5E7EB' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>Revenue this week</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' }}>
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0',
                background: i === 5 ? '#5C6B2E' : '#D1D5DB'
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            {['M','T','W','T','F','S','S'].map((d, i) => (
              <span key={i} style={{ flex: 1, textAlign: 'center', fontSize: '10px', color: '#9CA3AF' }}>{d}</span>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, background: '#F9FAFB', borderRadius: '10px', padding: '16px', border: '1px solid #E5E7EB' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>Top items</div>
          {[
            { name: 'Margherita', pct: 82 },
            { name: 'Truffle Pasta', pct: 67 },
            { name: 'Tiramisu', pct: 54 },
          ].map(item => (
            <div key={item.name} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                <span>{item.name}</span><span style={{ color: '#6B7280' }}>{item.pct}%</span>
              </div>
              <div style={{ height: '4px', background: '#E5E7EB', borderRadius: '2px' }}>
                <div style={{ width: `${item.pct}%`, height: '100%', background: '#5C6B2E', borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
