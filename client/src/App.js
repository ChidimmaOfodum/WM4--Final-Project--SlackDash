import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import StudentView from "./pages/StudentView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/students/table/view" element={<StudentView />} />
		<Route path= "/dashboard" element = {<Dashboard /> } />
		<Route path= "/login" element = {<Login /> } />
	</Routes>
);

export default App;
