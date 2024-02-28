
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import CounterApp from "./components/CounterApp";
import ThemeBtn from "./components/ThemeBtn";

const App = ({ children }) => {
	const theme = useSelector((storeState) => storeState.theme);
	return (
		<div
			style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
			className="App"
		>
			<CounterApp />
			<ThemeBtn />
		</div>
	);
};

export default App;
