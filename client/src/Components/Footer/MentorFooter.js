import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const MentorFooter = () => {
	return (
		<footer className="trainee-footer">
			<Link to="/mentordashboardloggedin">
				<button className="homebtn-wrapper">
					<AiTwotoneHome size={40} color={"red"}></AiTwotoneHome>
				</button>
			</Link>
		</footer>
	);
};

export default MentorFooter;
