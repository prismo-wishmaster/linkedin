export const Pagination = () => {
  return (
    <div className="flex items-center w-full py-[1.4rem] border-b border-[#8c8c8c33]">
      <ul className="flex mx-auto gap-1.5">
        <li className="flex justify-center items-center rounded-full w-7 h-7 text-[0.8rem] font-semibold text-white bg-[#000000e6]">
          1
        </li>
        <li className="flex justify-center items-center rounded-full w-7 h-7 text-[0.8rem] font-semibold text-[#00000099] hover:bg-[#0000001a]">
          2
        </li>
        <li className="flex justify-center items-center rounded-full w-7 h-7 text-[0.8rem] font-semibold text-[#00000099] hover:bg-[#0000001a]">
          3
        </li>
        <li className="flex justify-center items-center rounded-full w-7 h-7 text-[0.8rem] font-semibold text-[#00000099] hover:bg-[#0000001a]">
          ...
        </li>
      </ul>
      <button className="flex justify-center items-center p-2 text-[0.8rem] font-semibold text-[#00000099] hover:bg-[#0000001a] rounded-sm">
        Siguiente
      </button>
    </div>
  );
};
