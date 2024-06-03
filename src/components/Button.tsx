interface ButtonProps {
  label: string;
  iconUrl?: string;
  backgroundStyle?: string;
  textStyle?: string;
  borderStyle?: string;
  widthStyle?: string;
}

function Button({
  label,
  iconUrl,
  backgroundStyle,
  textStyle,
  borderStyle,
  widthStyle,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center whitespace-nowrap justify-center gap-4 rounded-full border px-7 py-4 font-montserrat leading-none hover:opacity-90
      ${backgroundStyle ? backgroundStyle : "bg-coral-red"}
      ${textStyle ? textStyle : "text-white"}
      ${borderStyle ? borderStyle : "border-coral-red"}
      ${widthStyle ? widthStyle : ""}
    `}
    >
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow right icon" />}
    </button>
  );
}

export default Button;
