import { WebClient, LogLevel } from "@slack/web-api";

const getSlackClient = () => {
  return new WebClient(process.env.TOKEN, {
    logLevel: LogLevel.DEBUG,
  });
};

export default getSlackClient;

