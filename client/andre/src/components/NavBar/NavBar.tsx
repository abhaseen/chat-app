import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function NavBar() {
  return (
    <nav className={styles.topNav}>
      <div>
        <p>Logo</p>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navListLink} to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
