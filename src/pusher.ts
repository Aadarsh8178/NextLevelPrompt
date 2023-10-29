import Pusher, { Channel } from "pusher-js";
import { addChat, responseLoading } from "./store/chat";

var pusher: Pusher;
var channel: Channel;

const pusherKey = import.meta.env.PUBLIC_PUSHER_KEY;

export function initPusher() {
  if (pusher)
    return {
      pusher,
      channel,
    };

  pusher = new Pusher(pusherKey, {
    cluster: "ap2",
  });

  channel = pusher.subscribe("prompt-handler");
  channel.bind("message", function (data: any) {
    console.log("message", data?.message);
    if (data.isCompleted) {
      responseLoading.set(true);
    }
    addChat({ text: data?.message || "", isResponse: true });
  });

  // {"labels":["Alicia Borer Sr.","Carla Greenholt","Claudia Johns","Daryl Greenholt","Delbert Grady","Dennis Legros","Dr. Mabel Flatley","Hope Nienow","Ira Kassulke PhD","Janis Zulauf","Jan Pouros","Jean Thompson","Jo Christiansen","Jonathon Jacobs","Lynette Gutkowski","Omar Collins","Roberta Ryan","Rochelle Hermann","Sherry Schuster","Warren Sauer"],"chartType":"bar","datasets":[{"label":"Number of Conversations","data":[5,8,11,12,12,12,8,10,12,10,12,10,11,9,10,7,17,14,11,13],"borderWidth":1}]}
  channel.bind("chart", function (data: any) {
    const message = data?.message || "";
    console.log("chart", { message });
    if (data.isCompleted) {
      responseLoading.set(true);
    }
    const chartData = JSON.parse(message);
    const type = chartData.chartType;

    addChat({ data: JSON.parse(message), isResponse: true, type });
  });

  return {
    pusher,
    channel,
  };
}
