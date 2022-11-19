import "./App.css";
import { ChatBubble } from "./components/ChatBubble/ChatBubble";
import { ChatControls } from "./components/ChatControls/ChatControls";
import { NavBar } from "./components/NavBar/NavBar";
import { PageLayout } from "./components/PageLayout/PageLayout";

function App() {
  return (
    <div>
      <NavBar />
      <PageLayout>
        <ChatBubble />
        <ChatBubble isSelf />
        <ChatControls />
      </PageLayout>
    </div>
  );
}

export default App;
