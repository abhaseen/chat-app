import styles from "./styles.module.css";

type Props = {
  isSelf?: boolean;
};

export function ChatBubble({ isSelf = false }: Props) {
  return (
    <div className={styles.chatBubbleContainer}>
      {!isSelf ? <div className={styles.imgContainer}>img</div> : null}
      <div
        className={`${styles.messageContainer} ${
          isSelf ? styles.messageContainerSelf : null
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          numquam.
        </p>
      </div>
    </div>
  );
}
