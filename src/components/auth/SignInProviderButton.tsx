type Props = {
  name: string;
  icon: string;
  color: string;
  method: () => void;
  disabled?: boolean;
};

export default function SignInProviderButton ({ name, icon, color, method, disabled = false }: Props) {
  return (
    <button
      className={`w-full ${color} mb-4 text-white font-bold py-2 px-4 rounded-md ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
      onClick={method}
      type="button"
      disabled={disabled}
    >
      {name}
    </button>
  );
}
