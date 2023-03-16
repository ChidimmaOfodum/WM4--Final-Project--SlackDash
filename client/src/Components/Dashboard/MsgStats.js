import { BsTelephoneFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";


const MsgStats = ({totalMessages,totalCalls}) => {
	return (
		<div className="msg-stats">
			<div className="icons">
				<TiMessages size={80} color={"green"} />
				<p>{totalMessages}</p>
			</div>
			<div className="icons">
				<BsTelephoneFill size={70} color={"#28cef4"} />
				<p>{totalCalls}</p>
			</div>
		</div>
	);
};

export default MsgStats;
