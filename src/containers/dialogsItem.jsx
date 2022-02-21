import DialogsItem from "../components/DialogsItem/DialogsItem";

export default function DialogsItemContainer({
	avatarSrc,
	username,
	lastMessage,
	...restProps
}) {
	return (
		<DialogsItem>
			<DialogsItem.UserImage src={avatarSrc} />
			<DialogsItem.MessageInfo username={username} lastMessage={lastMessage} />
		</DialogsItem>
	);
}
