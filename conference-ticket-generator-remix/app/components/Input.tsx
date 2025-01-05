type InputProps = {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-150">
      <label htmlFor={props.name} className="text-preset-5">
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="h-[54px] rounded-12 border border-c-neutral-500 bg-c-neutral-0 bg-opacity-[8%] px-200 text-preset-6 text-c-neutral-300 backdrop-blur-[5px]"
      />
    </div>
  );
};
