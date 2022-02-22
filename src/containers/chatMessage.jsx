import ChatMessage from "../components/ChatMessage/ChatMessage";

export default function ChatMessageContainer({ messageText, date }) {
	return (
		<ChatMessage>
			<ChatMessage.Text>
				{messageText}
			</ChatMessage.Text>
			<ChatMessage.Date>
				{date}
			</ChatMessage.Date>
		</ChatMessage>
	);
}
