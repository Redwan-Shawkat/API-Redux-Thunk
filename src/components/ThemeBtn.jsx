import { useDispatch } from "react-redux";
import { changeBgColor, changeTextColor } from "../store/actions/theme";

const ThemeBtn = () => {
	const dispatch = useDispatch();
	return (
		<div className="theme">
			<div className="bg-btn-group">
				<button onClick={() => dispatch(changeBgColor("red"))}>
					Change Bg Color to Red
				</button>
				<button onClick={() => dispatch(changeBgColor("green"))}>
					Change Bg Color to green
				</button>
				<button onClick={() => dispatch(changeBgColor("blue"))}>
					Change Bg Color to Blue
				</button>
			</div>
			<div className="text-btn-group">
				<button onClick={() => dispatch(changeTextColor("yellow"))}>
					Change Text Color to Yellow
				</button>
				<button onClick={() => dispatch(changeTextColor("purple"))}>
					Change Text Color to Purple
				</button>
				<button onClick={() => dispatch(changeTextColor("white"))}>
					Change Text Color to White
				</button>
			</div>
			<button onClick={() => dispatch({ type: "theme/reset" })}>
				Reset Theme
			</button>
		</div>
	);
};

export default ThemeBtn;
