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
			{/* <div className="profile-pics"></div> */}
			<img src={props.studentProfileImage} alt="profile image" className="profile-pics"></img>
		</div>
	);
};

export default Nav;
