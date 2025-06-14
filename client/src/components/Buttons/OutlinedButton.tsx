interface OutlinedButtonProps {
  text: string;
}

export const OutlinedButton = ({ text }: OutlinedButtonProps) => {
  return (
    <button className="text-[0.95rem] font-semibold text-[#0a66c2] rounded-full border border-[#0a66c2] px-3.5 hover:bg-[#378fe91a] hover:text-[#004182] hover:border-[#004182]">
      {text}
    </button>
  );
};
