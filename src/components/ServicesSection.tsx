import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const sections = [
  {
    img: clock,
    title: "Efficient",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: diaphragm,
    title: "Diaphragm",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: money,
    title: "Affordable",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: teamwork,
    title: "Teamwork",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
];

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> servicves
        </h2>
        <div className="cards">
          {sections.map((section) => (
            <div className="card">
              <div className="icon">
                <img
                  src={section.img}
                  alt={section.title.toLocaleLowerCase()}
                />
                <h3>{section.title}</h3>
              </div>
              <p>{section.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="img">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
