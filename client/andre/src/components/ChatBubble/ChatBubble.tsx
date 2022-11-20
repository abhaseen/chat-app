import styles from "./styles.module.css";

type Props = {
  message: string;
  author: string;
  isSelf?: boolean;
};

export function ChatBubble({ message, author, isSelf = false }: Props) {
  return (
    <div>
      <p
        className={`${styles.messageContainer} ${
          isSelf ? styles.messageContainerSelf : null
        }`}
      >
        {message}
      </p>
      <p className={`${styles.author} ${isSelf ? styles.authorSelf : null}`}>
        {isSelf ? "You" : author}
      </p>
    </div>
  );
}
