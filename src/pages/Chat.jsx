import styled from 'styled-components';
import { getAvatarSrcString } from '../components/DialogsList/DialogsList';
import { MdMoreHoriz, MdSend } from 'react-icons/md';
import ChatBoxContainer from '../containers/chatBox';

const Container = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	padding: 0.35rem 0 0.35rem 0.75rem;
	background-color: #ededed;
`;
const PartnerInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-transform: capitalize;
`;
const PartnerImage = styled.div`
	width: 3rem;
	margin-right: 1rem;
	margin-left: 0.75rem;
	& > img {
		width: 100%;
		border-radius: 100%;
	}
`;
const Buttons = styled.div`
	margin-right: 0.75rem;
	margin-left: 0.75rem;
`;

export default function ChatPage({ dialogsPartner }) {
	return (
		<Container>
			<Header>
				<PartnerInfo>
					<PartnerImage>
						<img src={getAvatarSrcString(dialogsPartner?.avatarSrc)} alt="" />
					</PartnerImage>
					<p>{dialogsPartner?.fullname}</p>
				</PartnerInfo>
				<Buttons>
					<MdMoreHoriz />
				</Buttons>
			</Header>
			<ChatBoxContainer
				chatMessages={[
					{
						messageText: 'Hello, how are you?',
						date: '19.07.1912',
					},
					{
						messageText: 'Hello, how are you?',
						date: '19.07.1912',
					},
				]}
			/>
			{/* <Input /> */}
		</Container>
	);
}
