import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
	// console.log(Outlet);
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}
