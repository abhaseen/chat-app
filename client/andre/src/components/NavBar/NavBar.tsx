import styles from "./styles.module.css";

export function NavBar() {
  return (
    <nav className={styles.topNav}>
      <div>
        <p>Logo</p>
      </div>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navListLink} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navListLink} href="/">
            Chat Room
          </a>
        </li>
        <li>
          <a className={styles.navListLink} href="/">
            Exit
          </a>
        </li>
      </ul>
    </nav>
  );
}
