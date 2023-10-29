import { atom } from "nanostores";
import { getUserId } from "../user";

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

export type Chat = {
  text?: string;
  isResponse: boolean;
  type?: string;
  id?: number;
  data?: unknown;
};

export const responseLoading = atom<boolean>(false);

export const chatStore = atom<Chat[]>([]);

export function sendRequestAndAddChat(chat: Chat) {
  // responseLoading.set(true);
  chatStore.set([...chatStore.get(), chat]);

  fetch(`${BASE_URL}/api/prompt/load`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: chat.text, userId: getUserId() }),
  });
}

export function addChat(chat: Chat) {
  chatStore.set([...chatStore.get(), chat]);
}

export function getChat() {
  return chatStore.get();
}
