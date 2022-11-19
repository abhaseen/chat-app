import { Room, Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { FormEvent } from "react";
import styles from "./styles.module.css";

export function ChatControls() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Message sent");
  }

  return (
    <form
      className={styles.controlsContainer}
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        id="message"
        label="Message"
        placeholder="Type your message here..."
        variant="outlined"
        sx={{ flexGrow: 1 }}
      />
      <Button type="submit" variant="text">
        <Send />
      </Button>
      <Button type="button" variant="text">
        <Room />
      </Button>
    </form>
  );
}
