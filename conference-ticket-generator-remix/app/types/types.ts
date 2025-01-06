import { UseFormRegisterReturn } from "react-hook-form";

export interface TicketProps {
  name: string;
  avatarUrl: string;
  email: string;
  username: string;
}

export interface IFormInput {
  name: string;
  email: string;
  username: string;
  avatarUrl: string;
}

export interface FormErrors {
  email?: string;
}

export type InputProps = {
  label: string;
  type: string;
  value?: string;
  placeholder?: string;
  errors?: string;
  register?: UseFormRegisterReturn;
};
