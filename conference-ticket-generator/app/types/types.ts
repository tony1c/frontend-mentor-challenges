import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

export interface TicketData {
  name: string;
  email: string;
  username: string;
  avatarUrl: string;
}

export type InputProps = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  errors?: FieldErrors<TicketData>;
  register?: UseFormRegisterReturn;
};
