import { type ChangeEvent, type SubmitEvent, useId, useRef, useState } from "react";

export type NewsletterView = "signup" | "success";

export function useNewsletterSignup() {
  const [view, setView] = useState<NewsletterView>("signup");
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const emailFieldId = useId();
  const errorId = useId();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = emailInputRef.current;
    if (!input) return;

    const value = input.value.trim();
    if (value.length === 0) {
      setError("Email address is required");
      return;
    }

    if (!input.checkValidity()) {
      setError("Valid email required");
      return;
    }

    setError(null);
    setSubmittedEmail(value);
    setView("success");
  }

  function handleDismiss() {
    setView("signup");
    setEmail("");
    setError(null);
  }

  function onEmailChange(ev: ChangeEvent<HTMLInputElement>) {
    setEmail(ev.target.value);
    if (error) setError(null);
  }

  return {
    view,
    email,
    submittedEmail,
    error,
    emailInputRef,
    emailFieldId,
    errorId,
    handleSubmit,
    handleDismiss,
    onEmailChange,
  };
}
