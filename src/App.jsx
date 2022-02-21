import { ThemeProvider } from '@mui/material';
import DialogsItemContainer from './containers/dialogsItem';
import GlobalStyles from './GlobalStyles';
import Home from './Home';
import theme from './theme';

function App() {
	return (
		<>
			<GlobalStyles />
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
			/>
			<DialogsItemContainer
				avatarSrc={
					'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
				}
				lastMessage={"I am writing right now to you. How are you?"}
				username={'Peter Jackson'}
			/>
		</>
	);
}

export default App;
