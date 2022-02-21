import { Container, Image, LastMessage, MessageInfo, UserImage, UserName } from "./styles";

export default function DialogsItem({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

DialogsItem.UserImage = function ({ children, ...restProps }) {
	return (
		<UserImage>
			<Image {...restProps} />
		</UserImage>
	);
};

DialogsItem.MessageInfo = function ({ children, ...restProps }) {
	const {username, lastMessage} = restProps
	return (
		<MessageInfo>
			<UserName>{username}</UserName>
			<LastMessage>{lastMessage}</LastMessage>
		</MessageInfo>
	)
}