import iconList from "../../assets/images/icon-list.svg";

const benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
] as const;

export function BenefitsList() {
  return (
    <ul className="space-y-2.5 text-base leading-6 md:space-y-3">
      {benefits.map((line) => (
        <li key={line} className="flex gap-4">
          <img
            src={iconList}
            alt=""
            width={21}
            height={21}
            className="mt-1 size-[21px] shrink-0"
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}
