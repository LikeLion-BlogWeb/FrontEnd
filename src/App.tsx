import './App.css';
import Router from "./components/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

	return (
		<>
			<ToastContainer />
			<Router /> 
		</>
	);
}

export default App;