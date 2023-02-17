import { BsFilterSquare } from "react-icons/bs";

const Nav = (props) => {
  return (
		<div className="nav">
			<BsFilterSquare
				className="toggle"
				size={50}
				onClick={props.onClick}
			></BsFilterSquare>
			<h2>DASHBOARD</h2>
			<div className="profile-pics"></div>
		</div>
	);
};

export default Nav;
