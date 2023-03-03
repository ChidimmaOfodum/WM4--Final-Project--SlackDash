const getLastMessage = (epochTime) => {
	const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
	const dOLM = new Date(epochTime * 1000);
	return `${dOLM.toLocaleDateString("en-GB", options)}, ${dOLM.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
};

getLastMessage();

const members = [
	{
		user_id: "U04PHFRULUT",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Farzad Nazif",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676376639),
		most_active_channel: "wm4",
		total_messages: 1000,
	},
	{
		user_id: "U04PEMGLF53",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Michelle Janay",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 187,
	},
	{
		user_id: "U04PHG7K48K",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Chidimma",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1675982746),
		most_active_channel: "wm4",
		total_messages: 884,
	},
	{
		user_id: "U04PEMGLF53",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "John Doe",
		is_email_confirmed: false,
		is_admin: false,
		last_message: getLastMessage(1676328346),
		most_active_channel: "wm4",
		total_messages: 985,
	},
	{
		user_id: "U04PEMGLF65",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Sally Frog",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "random",
		total_messages: 47,
	},
	{
		user_id: "U04PAMGLF43",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Garrett Smith",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 159,
	},
	{
		user_id: "U12PEMGLF32",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Lucy Diamond",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676565946),
		most_active_channel: "wm4",
		total_messages: 845,
	},
	{
		user_id: "U04RMDGF52",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Marta",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676544346),
		most_active_channel: "wm4",
		total_messages: 236,
	},
	{
		user_id: "U04PEMGLF34",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Chioma",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 516,
	},
	{
		user_id: "U66PEMGLF77",
		image_32: "https://a.slack-edge.com/80588/img/slackbot_32.png",
		real_name: "Michelle Janay",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1675982746),
		most_active_channel: "general",
		total_messages: 741,
	},
];

const students = members.filter((student) => student.is_email_confirmed && !student.is_admin);

console.log(getLastMessage(1677163283));
// students.last_message.sort((a,b) => a-b);

// export default students;