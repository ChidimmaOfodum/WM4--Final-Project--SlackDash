import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const Footer = () => {
  return (
		<footer>
			<Link to="/">
				<button className="homebtn-wrapper">
					<AiTwotoneHome size={40} color={"red"}></AiTwotoneHome>
				</button>
			</Link>
		</footer>
	);
};

export default Footer;
