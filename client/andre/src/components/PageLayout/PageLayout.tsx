import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return <div className={styles.layoutContainer}>{children}</div>;
}
