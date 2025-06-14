import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import LogoLinkedin from "../../assets/linkedIn.png";
import { OutlinedButton } from "../Buttons/OutlinedButton";

export const Header = () => {
  return (
    <header className="flex justify-center w-full h-[3.1rem] py-[0.55rem] px-6 border-b bg-white border-[#8c8c8c33]">
      <div className="flex justify-between w-[1130px]">
        <section className="flex items-center">
          <img
            className="h-full aspect-square rounded-sm mr-3"
            src={LogoLinkedin}
            alt=""
          />
          <label
            htmlFor="search"
            className="flex items-center justify-center rounded-l-sm bg-[#edf3f8] h-full pl-1.5"
          >
            <IoSearchSharp className="text-[#666666]" size={18} />
          </label>
          <input
            id="search"
            className="h-full w-[150px] shrink rounded-r-sm bg-[#edf3f8] focus:outline-none mr-2.5"
            type="text"
          />
          <label
            htmlFor="location"
            className="flex items-center justify-center rounded-l-sm bg-[#edf3f8] h-full pl-1.5"
          >
            <IoLocationSharp className="text-[#666666]" size={18} />
          </label>
          <input
            id="location"
            className="h-full w-[150px] shrink rounded-r-sm bg-[#edf3f8] focus:outline-none mr-2.5"
            type="text"
          />
          <OutlinedButton text="Buscar" />
        </section>
        <div className="flex items-center gap-2">
          <IoChatbubbleEllipsesSharp className="text-[#666666]" size={25} />
          <MdWork className="text-[#666666]" size={25} />
          <img
            className="h-full rounded-full aspect-square object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};
