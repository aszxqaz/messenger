import DialogsList from './components/DialogsList/DialogsList';
import dialogsItems from './data/dialogsItems.json';

export default function Home() {
	//const dialogsItems = JSON.parse(data);
	return <DialogsList dialogsArray={dialogsItems} />;
}
