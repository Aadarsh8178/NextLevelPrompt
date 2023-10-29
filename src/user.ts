import { nanoid } from "nanoid";

export const getUserId = () => {
  let userId = sessionStorage.getItem("userId");
  if (!userId) {
    userId = nanoid();
    sessionStorage.setItem("userId", userId);
  }
  return userId;
};
