import { Divider, List } from '@mui/material';
import DialogsItem from '../DialogsItem/DialogsItem';

const getAvatarSrcString = (avatarSrc) => {
	return `/static/images/avatar/${avatarSrc}`;
};

export default function DialogsList({ dialogsArray }) {
	if (dialogsArray.length === 0) return null;
	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
			{dialogsArray.map((dialogItem, index, array) => {
				return (
					<>
						<DialogsItem
							key={dialogItem.lastMessageId}
							avatarSrc={getAvatarSrcString(
								dialogItem.lastMessageAuthorAvatarSrc,
							)}
							fullname={dialogItem.lastMessageAuthorFullname}
							messageText={dialogItem.lastMessageText}
						/>
						{index !== array.length - 1 ? (
							<Divider
								key={'divider' + dialogItem.lastMessageId}
								variant="inset"
								component="li"
							/>
						) : null}
					</>
				);
			})}
		</List>
	);
}
