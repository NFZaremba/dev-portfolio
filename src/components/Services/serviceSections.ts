import clock from "../../assets/img/clock.svg";
import diaphragm from "../../assets/img/diaphragm.svg";
import money from "../../assets/img/money.svg";
import teamwork from "../../assets/img/teamwork.svg";

export interface ISection {
  img: string;
  title: string;
  paragraph: string;
}

export const sections: ISection[] = [
  {
    img: clock,
    title: "Efficient",
    paragraph: "Lorem ipsum dolor sit amet1.",
  },
  {
    img: diaphragm,
    title: "Diaphragm",
    paragraph: "Lorem ipsum dolor sit amet2.",
  },
  {
    img: money,
    title: "Affordable",
    paragraph: "Lorem ipsum dolor sit amet3.",
  },
  {
    img: teamwork,
    title: "Teamwork",
    paragraph: "Lorem ipsum dolor sit amet4.",
  },
];
