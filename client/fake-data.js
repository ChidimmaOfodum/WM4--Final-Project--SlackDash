const getLastMessage = (epochTime) => {
	const msPerDay = 1000 * 60 * 60 * 24;
	const today = new Date();
	const dOLM = new Date(epochTime * 1000);
	let diff = Math.abs(today.getTime() - dOLM.getTime());
	return Math.trunc(diff / msPerDay);
};

getLastMessage();

const students = [
	{
		user_id: "U04PHFRULUT",
		profile_picture: "img.jpg",
		real_name: "Farzad Nazif",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676376639),
		most_active_channel: "wm4",
		total_messages: 1000,
	},
	{
		user_id: "U04PEMGLF53",
		profile_picture: "img.jpg",
		real_name: "Michelle Janay",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 187,
	},
	{
		user_id: "U04PHG7K48K",
		profile_picture: "img.jpg",
		real_name: "Chidimma",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1675982746),
		most_active_channel: "wm4",
		total_messages: 884,
	},
	{
		user_id: "U04PEMGLF53",
		profile_picture: "img.jpg",
		real_name: "John Doe",
		is_email_confirmed: false,
		is_admin: false,
		last_message: getLastMessage(1676328346),
		most_active_channel: "wm4",
		total_messages: 985,
	},
	{
		user_id: "U04PEMGLF65",
		profile_picture: "img.jpg",
		real_name: "Sally Frog",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "random",
		total_messages: 47,
	},
	{
		user_id: "U04PAMGLF43",
		profile_picture: "img.jpg",
		real_name: "Garrett Smith",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 159,
	},
	{
		user_id: "U12PEMGLF32",
		profile_picture: "img.jpg",
		real_name: "Lucy Diamond",
		is_email_confirmed: true,
		is_admin: true,
		last_message: getLastMessage(1676565946),
		most_active_channel: "wm4",
		total_messages: 845,
	},
	{
		user_id: "U04RMDGF52",
		profile_picture: "img.jpg",
		real_name: "Marta",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676544346),
		most_active_channel: "wm4",
		total_messages: 236,
	},
	{
		user_id: "U04PEMGLF34",
		profile_picture: "img.jpg",
		real_name: "Chioma",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1676377172),
		most_active_channel: "wm4",
		total_messages: 516,
	},
	{
		user_id: "U66PEMGLF77",
		profile_picture: "img.jpg",
		real_name: "Michelle Janay",
		is_email_confirmed: true,
		is_admin: false,
		last_message: getLastMessage(1675982746),
		most_active_channel: "general",
		total_messages: 741,
	},
];

export default students;