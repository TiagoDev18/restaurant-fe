import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  label: string;
  htmlFor: string;
  name: string;
  type: string;
  id: string;
  placeholder?: string;
  textColor?: string;
}

export const InputWithLabel = ({
  label,
  htmlFor,
  type,
  id,
  placeholder,
  name,
  textColor = "text-white",
}: InputWithLabelProps) => {
  return (
    <div
      className={`grid w-full items-center gap-3 font-display font-medium ${textColor}`}
    >
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
