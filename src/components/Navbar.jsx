import styles from './Navbar.module.css'

const NAV_LINKS = ['Product', 'Pricing', 'Customers', 'Blog']

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🫒</span>
          <span>olive</span>
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map(l => <li key={l}><a href="#">{l}</a></li>)}
        </ul>
        <div className={styles.actions}>
          <a href="#" className={styles.login}>Log in</a>
          <a href="#" className={styles.cta}>Get started free</a>
        </div>
      </div>
    </nav>
  )
}
