import { ThemeProvider } from '@mui/material';
import GlobalStyles from './GlobalStyles';
import Home from './Home';
import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Home />
		</ThemeProvider>
	);
}

export default App;
