import { BsTelephoneFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";


const MsgStats = () => {
	return (
		<div className="msg-stats">
			<div className="icons">
				<TiMessages size={80} color={"green"} />
				<p>20</p>
			</div>
			<div className="icons">
				<BsTelephoneFill size={70} color={"#28cef4"} />
				<p>14</p>
			</div>
		</div>
	);
};

export default MsgStats;
