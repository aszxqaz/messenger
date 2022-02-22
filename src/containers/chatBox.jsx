import styled from 'styled-components';
import ChatMessageContainer from './chatMessage';

const ChatBox = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	background-color: #f3f0ec;
`;

export default function ChatBoxContainer({ chatMessages }) {
	return (
		<ChatBox>
			{chatMessages.map((message) => (
				<ChatMessageContainer messageText={message.messageText} date={message.date} />
			))}
		</ChatBox>
	);
}
