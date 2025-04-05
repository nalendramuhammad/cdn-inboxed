import { User } from "./user";

export type AuthResponse = {
  success: boolean;
  token: string;
  user: User;
};

export type LoginPayload = {
  email: string;
  password: string;
};
