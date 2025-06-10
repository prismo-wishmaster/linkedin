import "./JobApplication.css";
import returnArrow from "../../assets/return-arrow.svg";
import ellipsis from "../../assets/ellipsis.svg";

export const JobApplication = () => {
  return (
    <section className="job-offer__container">
      <div className="job-offer__header">
        <div className="job-offer__company">
          <img
            className="job-offer__logo"
            src="https://media.licdn.com/dms/image/v2/D560BAQGIpB9H94zM3Q/company-logo_100_100/company-logo_100_100/0/1722293658901?e=1754524800&v=beta&t=dWDrxJ97bxkg0mGdybuI0oQap9-rSM5KVjjIdxxXKs4"
            alt=""
          />
          <p>ITJ</p>
        </div>
        <div className="options-icons__container">
          <div className="options-icons">
            <img className="options-icons__img" src={returnArrow} alt="" />
          </div>
          <div className="options-icons">
            <img className="options-icons__img" src={ellipsis} alt="" />
          </div>
        </div>
      </div>
      <h1 className="title-job">Software Engineer</h1>
      <ul className="list-low-emphasis">
        <li>
          <p className="low-emphasis">México</p>
        </li>
        <li>
          <p className="low-emphasis">hace 2 semanas</p>
        </li>
        <li>
          <p className="low-emphasis">Más de 100 solicitudes</p>
        </li>
      </ul>
      <ul className="list-low-emphasis">
        <li>
          <p className="low-emphasis">Promocionado por técnico de selección</p>
        </li>
        <li>
          <p className="low-emphasis low-emphasis--green">
            Evaluando solicitudes de forma activa
          </p>
        </li>
      </ul>
      <ul className="job-characteristics">
        <li>
          <ul>
            <li>
              <p className="no-content">En remoto</p>
            </li>
            <li>
              <p>Jornada completa</p>
            </li>
            <li>
              <p>Intermedio</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Aptitudes: Pensamiento crítico, Spring Boot y 8 más</p>
        </li>
        <li>
          <p>
            Ve una comparación con otros 100 solicitantes. Volver a probar
            Premium por 0 MXN
          </p>
        </li>
      </ul>
    </section>
  );
};

// {
//   "id": 1,
//   "jobTitle": "Software Engineer",
//   "isVerified": true,
//   "companyName": "ITJ",
//   "location": "Mexico",
//   "workMode": "En remoto",
//   "isPromoted": true,
//   "isActivelyEvaluating": true,
//   "easyApply": true,
//   "postedAt": "tiempo en utc",
//   "companyLogoUrl": "https://media.licdn.com/dms/image/v2/D560BAQGIpB9H94zM3Q/company-logo_100_100/company-logo_100_100/0/1722293658901?e=1754524800&v=beta&t=dWDrxJ97bxkg0mGdybuI0oQap9-rSM5KVjjIdxxXKs4"
// }
