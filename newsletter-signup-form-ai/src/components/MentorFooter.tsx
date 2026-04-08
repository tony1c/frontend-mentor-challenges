const linkClass =
  "rounded-sm underline underline-offset-2 transition-colors hover:text-red hover:decoration-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function MentorFooter() {
  return (
    <footer className="px-4 py-6 text-center text-sm md:px-8">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className={linkClass}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/tony1c"
        className={linkClass}
      >
        tony1c
      </a>
      .
    </footer>
  );
}
