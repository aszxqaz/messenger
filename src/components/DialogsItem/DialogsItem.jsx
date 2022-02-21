import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export default function DialogsItem({ fullname, messageText, avatarSrc }) {
	return (
		<ListItem alignItems="flex-start" sx={{ width: '100%' }}>
			<ListItemAvatar>
				<Avatar alt={fullname} src={avatarSrc} sx={{ width: 100, height: 100 }} />
			</ListItemAvatar>
			<ListItemText
				primary={
					<Typography
						sx={{ display: 'block', fontSize: '1.25rem', fontWeight: 'bold' }}
						color="text.primary">
						{fullname}
					</Typography>
				}
				secondary={
					<Typography
						sx={{ display: 'block', fontSize: '1.15rem' }}
						color="text.primary">
						{messageText}
					</Typography>
				}
				sx={{ padding: '5px 15px' }}
			/>
		</ListItem>
	);
}
