import { IoMdArrowDropdown } from "react-icons/io";

export const FilterBar = () => {
  return (
    <div className="flex justify-center w-full bg-white shadow-xl max-[767px]:shadow-none relative z-10">
      <nav className="flex justify-center py-2.5 h-[3.1rem] gap-2.5 max-[1200px]:w-[960px] max-[992px]:w-[770px]">
        <button className="flex items-center px-5 rounded-full text-white bg-[#01754f] hover:bg-[#004c33]">
          <p className="text-[0.95rem] font-semibold leading-none">Empleos</p>
          <IoMdArrowDropdown size={19} />
        </button>
        <div className="h-full w-[1px] bg-[#0000004d]"></div>
        <button className="flex max-[508px]:hidden items-center px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          <p className="text-[0.95rem] font-semibold">Fecha de publicación</p>
          <IoMdArrowDropdown size={19} />
        </button>
        <button className="flex items-center max-[768px]:hidden px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          <p className="text-[0.95rem] font-semibold">Nivel de experiencia</p>
          <IoMdArrowDropdown size={19} />
        </button>
        <button className="flex items-center max-[992px]:hidden px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          <p className="text-[0.95rem] font-semibold">Empresa</p>
          <IoMdArrowDropdown size={19} />
        </button>
        <button className="flex items-center max-[992px]:hidden px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          <p className="text-[0.95rem] font-semibold">Remoto</p>
          <IoMdArrowDropdown size={19} />
        </button>
        <button className="max-[1200px]:hidden text-[0.95rem] font-semibold px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          Solicitud sencilla
        </button>
        <div className="h-full w-[1px] bg-[#0000004d]"></div>
        <button className="text-[0.95rem] font-semibold px-2 rounded-full text-[#00000099] bg-white border border-[#0000001a] hover:text-[#000000cc] hover:border-[#00000099] hover:bg-[#8c8c8c1a] hover:outline hover:outline-[#00000099]">
          Todos los filtros
        </button>
      </nav>
    </div>
  );
};
