import { atom } from "nanostores";

export const promptInput = atom<String>("");

export function setPromptInput(text: string) {
  console.log({ text });
  promptInput.set(text);
}
