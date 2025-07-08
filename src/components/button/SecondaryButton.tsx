import Image from "next/image";

interface SecondaryBtnProps {
  iconSrc: string;
  alt: string;
  label: string;
  onClick?: () => void;
  borderColor?: string; 
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  iconSrc,
  alt,
  label,
  onClick,
  borderColor = "border-blue-600", 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-18 py-2 text-primary font-medium bg-white rounded hover:bg-gray-100 border text-base ${borderColor} cursor-pointer`}
    >
      <Image src={iconSrc} alt={alt} width={20} height={20} />
      {label}
    </button>
  );
};

export default SecondaryBtn;
