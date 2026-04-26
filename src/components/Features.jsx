import styles from './Features.module.css'

const FEATURES = [
  {
    icon: '📋',
    title: 'Smart Menu Management',
    desc: 'Update menus in real-time across all channels. Manage modifiers, pricing, and availability with ease.',
  },
  {
    icon: '📅',
    title: 'Reservations & Waitlist',
    desc: 'Automated booking confirmations, smart waitlist management, and guest preference tracking.',
  },
  {
    icon: '💳',
    title: 'Integrated Payments',
    desc: 'Accept any payment method. Split bills, add tips, and close tabs — all in seconds.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    desc: 'Understand your busiest hours, top-selling items, and staff performance at a glance.',
  },
  {
    icon: '👥',
    title: 'Staff Scheduling',
    desc: 'AI-powered shift scheduling that reduces labor costs and keeps your team happy.',
  },
  {
    icon: '🛵',
    title: 'Delivery & Takeout',
    desc: 'Manage all your delivery platforms from one place. No more tablet chaos.',
  },
]

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.badge}>Everything you need</div>
          <h2 className={styles.title}>Built for the way restaurants actually work</h2>
          <p className={styles.sub}>One platform to replace the dozen tools you're juggling right now.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map(f => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
