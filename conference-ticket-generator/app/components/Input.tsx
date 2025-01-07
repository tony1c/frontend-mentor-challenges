import { InputProps } from "~/types/types";

export const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-150">
      <label htmlFor={props.id} className="text-preset-5">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="h-[54px] cursor-pointer rounded-12 border border-c-neutral-500 bg-c-neutral-0 bg-opacity-[8%] px-200 text-preset-6 text-c-neutral-300 backdrop-blur-[5px] transition-all duration-300 invalid:border-c-orange-500 hover:bg-opacity-20"
        {...props.register}
      />
      {props.errors?.email && (
        <div className="space-x-100">
          <svg className="inline-block size-[16px] stroke-c-orange-500">
            <path d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
            <path d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path d="M8.004 10.462V7.596M8 5.569v-.042" />
          </svg>
          <span className="text-preset-7 text-c-orange-500">
            {props.errors.email.message}
          </span>
        </div>
      )}
    </div>
  );
};
