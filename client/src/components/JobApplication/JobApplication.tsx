import { IoReturnUpForward } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { MdOutlineWork } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineLightbulb } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { OutlinedButton } from "../Buttons/OutlinedButton";
import { BlueButton } from "../Buttons/BlueButton";

export const JobApplication = () => {
  return (
    <section className="p-6 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <img
            className="w-[32px] h-[32px]"
            src="https://media.licdn.com/dms/image/v2/D560BAQGIpB9H94zM3Q/company-logo_100_100/company-logo_100_100/0/1722293658901?e=1754524800&v=beta&t=dWDrxJ97bxkg0mGdybuI0oQap9-rSM5KVjjIdxxXKs4"
            alt=""
          />
          <p className="text-[0.95rem] font-medium">ITJ</p>
        </div>
        <div className="flex gap-[7px]">
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full hover:bg-[#00000008]">
            <IoReturnUpForward className="w-6 h-6" />
          </div>
          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full hover:bg-[#00000008]">
            <SlOptions className="w-4 h-4" />
          </div>
        </div>
      </div>

      <h1 className="mb-[11px] font-normal text-[1.5rem] hover:underline">
        Software Engineer
      </h1>

      <ul className="flex gap-2 mb-3">
        <li className="text-[0.82rem] text-[#00000080]">México</li>
        <li className="text-[0.82rem] text-[#00000080]">hace 2 semanas</li>
        <li className="text-[0.82rem] text-[#00000080]">
          Más de 100 solicitudes
        </li>
      </ul>

      <ul className="flex gap-2 mb-3">
        <li className="text-[0.82rem] text-[#00000080]">
          Promocionado por técnico de selección
        </li>
        <li className="text-[0.82rem] text-[#00000080] font-medium text-[#01754f]">
          Evaluando solicitudes de forma activa
        </li>
      </ul>

      <ul className="flex flex-col text-[0.82rem] gap-5 text-[#000000cc]">
        <li>
          <div className="flex items-center gap-2">
            <MdOutlineWork className="w-[1.6rem] h-[1.6rem] mr-2 text-[#000000cc]" />
            <p className="p-[0.3rem] rounded-sm bg-[#daebd1]">En remoto</p>
            <p className="p-[0.3rem] rounded-sm bg-[#daebd1]">
              Jornada completa
            </p>
            <p>Intermedio</p>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <FaListCheck className="w-[1.6rem] h-[1.6rem] mr-2 text-[#000000cc]" />
            <p>Aptitudes: Pensamiento crítico, Spring Boot y 8 más</p>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <MdOutlineLightbulb className="w-[1.6rem] h-[1.6rem] mr-2 text-[#000000cc]" />
            <p>
              Ve una comparación con otros 100 solicitantes.{" "}
              <a href="">Volver a probar Premium por 0 MXN</a>
            </p>
          </div>
        </li>
      </ul>

      <div className="flex my-3.5 gap-5 w-full">
        <BlueButton text="Solicitud sencilla" icon={ImLinkedin} />
        <OutlinedButton text="Guardar" />
      </div>
      <h2 className="font-normal text-[1.3rem] mb-[11px]">Acerca del empleo</h2>
      <h3 className="font-normal text-[1.06rem] my-[11px]">
        Software Engineer.
      </h3>
      <p className="text-sm text-[#000000cc]">
        We’re looking for a Software Engineer who focuses on improving software
        design, collaborating with their peers, and effectively communicating
        with other representatives of the business.
      </p>
      <p className="text-sm text-[#000000cc]">
        This role will design, develop, test, and maintain software components
        of moderate complexity with general instruction from senior engineers
        and drive tasks to completion. This role will leverage well-developed
        professional and technical expertise to work collaboratively on
        cross-functional agile teams to deliver high-quality software.
      </p>
      <h3 className="font-normal text-[1.06rem] my-[11px]">
        Essential Duties and Responsibilities.
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-[#000000cc]">
        <li>
          Demonstrate basic theories, skills, and practices to accomplish work
          assignments of low to medium complexity.
        </li>
        <li>
          Build defined features, investigate and fix bugs, and write tests
          related to software components of moderate complexity with limited
          instructions for new projects and work provided by leadership.
        </li>
        <li>
          Initiate independent software design with guidance from others.
          Participate in reviewing design alternatives, problems, and solutions.
        </li>
        <li>
          Communicate status updates on individual project-based assignments to
          the project team.
        </li>
        <li>
          Provide professional advice on decisions or actions that may impact
          the outcome of a task or workflow of the team/work group.
        </li>
        <li>
          Build productive internal collaborative partnerships with peers, SMEs,
          and decision-makers.
        </li>
        <li>
          Support and comply with the company’s Quality Management System
          policies and procedures.
        </li>
        <li>
          Uphold company mission and values through accountability, innovation,
          integrity, quality, and teamwork.
        </li>
        <li>
          Ability to act with an inclusion mindset and model these behaviors for
          the organization.
        </li>
      </ul>
    </section>
  );
};
