import express from "express";

import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();

// Giving all channels informations
app.get("/users",(req,res)=>{
	fetch("https://slack.com/api/conversations.list",{
		headers:{
			"Authorization" : `Bearer ${process.env.TOKEN}`,
		},
	}).then((response)=>response.json()).then((data)=>res.send(data.channels));
});

// Giving all channel member IDs
app.get("/channelMembers",(req,res)=>{
	fetch("https://slack.com/api/conversations.members?channel=C04P33JK30F",{
		headers:{
			"Authorization" : `Bearer ${process.env.TOKEN}`,
		},
	}).then((response)=>response.json()).then((data)=>res.send(data));
});

// User presence by ID
app.get("/user/:id",(req,res)=>{
	const ID = req.params.id;
	fetch(`https://slack.com/api/users.getPresence?user=${ID}&pretty=1`,{
		headers:{
			"Authorization" : `Bearer ${process.env.TOKEN}`,
		},
	}).then((response)=>response.json()).then((data)=>res.send(data));
});

// History of conversation in a channel, it shows who involved the chat
app.get("/conversations/channel/:id",(req,res)=>{
	const ID = toString(req.params.id);
	fetch(`https://slack.com/api/conversations.history?channel=${ID}`,{
		headers:{
			"Authorization" : `Bearer ${process.env.TOKEN}`,
		},
	}).then((response)=>response.json()).then((data)=>res.send(data));
});

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
