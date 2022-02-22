import { Container, MessageDate, MessageText } from "./styles";


export default function ChatMessage({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

ChatMessage.Text = function ({ children, ...restProps }) {
	return (
		<MessageText {...restProps}>
			<p>{children}</p>
		</MessageText>
	);
};

ChatMessage.Date = function ({ children, ...restProps }) {
	return (
		<MessageDate {...restProps}>
			<p>{children}</p>
		</MessageDate>
	);
};