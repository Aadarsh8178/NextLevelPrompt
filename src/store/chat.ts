import { atom } from "nanostores";

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

export type Chat = {
  text?: string;
  isResponse: boolean;
  type?: string;
  id?: number;
  data?: unknown;
};

export const responseLoading = atom<boolean>(false);

export const chatStore = atom<Chat[]>([
  // {
  //   text: "Bhupinder Jogi",
  //   isResponse: false,
  //   id: 1,
  // },
  // {
  //   text: "This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT.",
  //   isResponse: true,
  //   id: 2,
  // },
  // {
  //   text: "Bhupinder Jogi",
  //   isResponse: false,
  //   id: 3,
  // },
  // {
  //   text: "This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT.",
  //   isResponse: true,
  //   id: 4,
  // },
  // {
  //   text: "Bhupinder Jogi",
  //   isResponse: false,
  //   id: 5,
  // },
  // {
  //   text: "This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT This line is a comment, it won't be copied to the clipboard or sent to ChatGPT.",
  //   isResponse: true,
  //   type: "bar",
  //   id: 6,
  // },
]);

export function sendRequestAndAddChat(chat: Chat) {
  console.log("making api call");
  responseLoading.set(true);
  chatStore.set([...chatStore.get(), chat]);

  fetch(`${BASE_URL}/api/prompt/load`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: chat.text }),
  }).then((res) => res.json());
}

export function addChat(chat: Chat) {
  chatStore.set([...chatStore.get(), chat]);
}

export function getChat() {
  return chatStore.get();
}
