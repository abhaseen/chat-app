import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./styles.module.css";

export function PageLayout() {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <Outlet />
    </div>
  );
}
