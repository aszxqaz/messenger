import Chat from './Chat';
import ChatBoxContainer from './containers/chatBox';
import GlobalStyles from './GlobalStyles';
import ChatPage from './pages/Chat';

function App() {
	return (
		<>
			<GlobalStyles />
			{/* <DialogsItemContainer
				avatarSrc={
					'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
				}
				lastMessage={"I am writing right now to you. How are you?"}
				username={'Peter Jackson'}
			/>
			<DialogsItemContainer
				avatarSrc={
					'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
				}
				lastMessage={"I am writing right now to you. How are you?"}
				username={'Peter Jackson'}
			/>
			<DialogsItemContainer
				avatarSrc={
					'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
				}
				lastMessage={"I am writing right now to you. How are you?"}
				username={'Peter Jackson'}
			/> */}
			<ChatPage dialogsPartner={{
				avatarSrc: "wolf.jpg",
				fullname: "Maxim Butenko"
			}} />
		</>
	);
}

export default App;
