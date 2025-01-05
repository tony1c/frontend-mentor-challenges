export interface TicketProps {
  name: string;
  file: string;
  email: string;
  username: string;
}

export interface FormErrors {
  email?: string;
}

export type InputProps = {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  errors?: string;
};
