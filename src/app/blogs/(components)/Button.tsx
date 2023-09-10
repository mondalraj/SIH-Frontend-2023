import { ButtonProps } from "@/types/interfaces";

export function Button({ name }: ButtonProps) {
  return (
    <button className="border-white/40 hover:border-white/60 border-2 m-1 py-1 h-fit px-3 rounded-full">
      {name}
    </button>
  );
}
