const getLastMessage = (epochTime) => {
	const msPerDay = 1000 * 60 * 60 * 24;
	const today = new Date();
	const dOLM = new Date(epochTime * 1000);
	let diff = Math.abs(today.getTime() - dOLM.getTime());
	return Math.trunc(diff / msPerDay);
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

// students.last_message.sort((a,b) => a-b);



let messages = [
    {
      "type": "message",
      "text": "",
      "user": "USLACKBOT",
      "channel": "C04Q7AGB5EU",
      "room": {
        "id": "R04QQ3H3SDA",
        "name": "",
        "media_server": "",
        "created_by": "U04PEMGLF53",
        "date_start": 1677009745,
        "date_end": 0,
        "participants": [
          "U04PEMGLF53"
        ],
        "participant_history": [
          "U04PEMGLF53"
        ],
        "participants_camera_on": [],
        "participants_camera_off": [],
        "participants_screenshare_on": [],
        "participants_screenshare_off": [],
        "canvas_thread_ts": "1677009746.155049",
        "thread_root_ts": "1677009746.155049",
        "channels": [
          "C04Q7AGB5EU"
        ],
        "is_dm_call": false,
        "was_rejected": false,
        "was_missed": false,
        "was_accepted": false,
        "has_ended": false,
        "background_id": "GRADIENT_01",
        "canvas_background": "GRADIENT_01",
        "attached_file_ids": [],
        "media_backend_type": "free_willy",
        "display_id": "",
        "external_unique_id": "0157750b-6d08-4ab8-bc68-8393d94b0706",
        "app_id": "A00",
        "call_family": "huddle"
      },
      "no_notifications": false,
      "permalink": "https://codeyourfutur-dno9020.slack.com/call/R04QQ3H3SDA",
      "ts": "1677009746.155049",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "/kCx",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "A huddle started"
                }
              ]
            }
          ]
        }
      ],
      "team": "T04PL3NKJP6"
    },
    {
      "client_msg_id": "b582ad59-0e06-4970-99d6-ab54080ae2a2",
      "type": "message",
      "text": "A second test message",
      "user": "U04PHG7K48K",
      "ts": "1676897346.238299",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "GqUXc",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "A second test message"
                }
              ]
            }
          ]
        }
      ],
      "team": "T04PL3NKJP6"
    },
    {
      "client_msg_id": "cef0eb49-91c4-4732-942e-e43ee38f60b9",
      "type": "message",
      "text": "Good morning team. This is a test message",
      "user": "U04PHG7K48K",
      "ts": "1676890988.532239",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "YyZ",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "Good morning team. This is a test message"
                }
              ]
            }
          ]
        }
      ],
      "team": "T04PL3NKJP6",
      "reactions": [
        {
          "name": "eyes",
          "users": [
            "U04PEMGLF53"
          ],
          "count": 1
        }
      ]
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04QP9J0SPK|Demo App>",
      "user": "U04PHG7K48K",
      "bot_id": "B04QP9J0SPK",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04QP9J0SPK|Demo App>",
      "ts": "1676833285.685419"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04PVB2J4HJ|Demo App>",
      "user": "U04PEMGLF53",
      "bot_id": "B04PVB2J4HJ",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04PVB2J4HJ|Demo App>",
      "ts": "1676484082.933819"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04Q5EUMA0H|Demo App>",
      "user": "U04PHG7K48K",
      "bot_id": "B04Q5EUMA0H",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04Q5EUMA0H|Demo App>",
      "ts": "1676483827.181979"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04PSQVB1DY|Demo App>",
      "user": "U04PEMGLF53",
      "bot_id": "B04PSQVB1DY",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04PSQVB1DY|Demo App>",
      "ts": "1676483632.196809"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04PU8YFU5S|Demo App>",
      "user": "U04PHG7K48K",
      "bot_id": "B04PU8YFU5S",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04PU8YFU5S|Demo App>",
      "ts": "1676475478.733059"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04QF80R9A4|Demo App>",
      "user": "U04PHG7K48K",
      "bot_id": "B04QF80R9A4",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04QF80R9A4|Demo App>",
      "ts": "1676473486.252389"
    },
    {
      "type": "message",
      "subtype": "channel_join",
      "ts": "1676471233.462999",
      "user": "U04PWALHADP",
      "text": "<@U04PWALHADP> has joined the channel",
      "inviter": "U04PHG7K48K"
    },
    {
      "type": "message",
      "subtype": "bot_add",
      "text": "added an integration to this channel: <https://codeyourfutur-dno9020.slack.com/services/B04PAMT1MKR|Demo App>",
      "user": "U04PHG7K48K",
      "bot_id": "B04PAMT1MKR",
      "bot_link": "<https://codeyourfutur-dno9020.slack.com/services/B04PAMT1MKR|Demo App>",
      "ts": "1676471018.418719"
    },
    {
      "type": "message",
      "subtype": "channel_join",
      "ts": "1676394608.822929",
      "user": "U04PKEHC3QB",
      "text": "<@U04PKEHC3QB> has joined the channel"
    },
    {
      "type": "message",
      "subtype": "channel_join",
      "ts": "1676377415.240589",
      "user": "U04PHG7K48K",
      "text": "<@U04PHG7K48K> has joined the channel"
    },
    {
      "client_msg_id": "5e49879a-e7b3-4aa0-acba-8358b1c7e668",
      "type": "message",
      "text": ":wave: Hello, team!",
      "user": "U04PEMGLF53",
      "ts": "1676377207.351409",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "u3/",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "emoji",
                  "name": "wave",
                  "unicode": "1f44b"
                },
                {
                  "type": "text",
                  "text": " Hello, team!"
                }
              ]
            }
          ]
        }
      ],
      "team": "T04PL3NKJP6"
    },
    {
      "type": "message",
      "subtype": "channel_join",
      "ts": "1676377171.443369",
      "user": "U04PEMGLF53",
      "text": "<@U04PEMGLF53> has joined the channel"
    },
    {
      "type": "message",
      "subtype": "channel_join",
      "ts": "1676376851.869569",
      "user": "U04PHFRULUT",
      "text": "<@U04PHFRULUT> has joined the channel"
    }
  ],
export default students;