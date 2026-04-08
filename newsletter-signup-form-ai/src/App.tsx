import { MentorFooter } from "./components/MentorFooter";
import { SignupCard } from "./components/NewsletterSignup/SignupCard";
import { SuccessCard } from "./components/NewsletterSignup/SuccessCard";
import { useNewsletterSignup } from "./hooks/useNewsletterSignup";

function App() {
  const {
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
  } = useNewsletterSignup();

  return (
    <>
      <div className="flex min-h-screen flex-col bg-blue-800 font-roboto text-blue-800">
        <main className="flex flex-1 items-center justify-center px-4 py-8 md:px-10 md:py-16 lg:px-6 lg:py-0">
          {view === "signup" ? (
            <SignupCard
              email={email}
              onEmailChange={onEmailChange}
              error={error}
              emailFieldId={emailFieldId}
              errorId={errorId}
              inputRef={emailInputRef}
              onSubmit={handleSubmit}
            />
          ) : (
            <SuccessCard
              submittedEmail={submittedEmail}
              onDismiss={handleDismiss}
            />
          )}
        </main>
      </div>
      <MentorFooter />
    </>
  );
}

export default App;
