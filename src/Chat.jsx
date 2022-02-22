import ChatBoxContainer from "./containers/chatBox"
import ChatBox from "./containers/chatBox"

export default function Chat() {
    return (
        <ChatBoxContainer chatMessages={[
            {
                messageText: "Hello, how are you?",
                date: "19.07.1912"
            },
            {
                messageText: "Hello, how are you?",
                date: "19.07.1912"
            }
        ]}/>
    )
}