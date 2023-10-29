import Pusher, { Channel } from "pusher-js";
import { addChat, responseLoading } from "./store/chat";
import { getUserId } from "./user";

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
    const userId = getUserId();
    if (data.userId !== userId) return;
    if (data.isCompleted) {
      responseLoading.set(false);
    }
    addChat({ text: data?.message || "", isResponse: true });
  });

  channel.bind("chart", function (data: any) {
    const userId = getUserId();
    if (data.userId !== userId) return;
    const message = data?.message || "";
    if (data.isCompleted) {
      responseLoading.set(false);
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
