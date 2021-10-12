import { Dispatch, useEffect } from "react";
import { PageSlider, Image } from "../../shared/components";
import useScroll from "../../shared/utils/useScroll";
import profile from "../../assets/img/profile.png";

export interface IContactLinks {
  title: string;
  link: string;
}

interface IContactProps {
  setSectionTitle: Dispatch<string>;
}

const ContactUs: React.FC<IContactProps> = ({ setSectionTitle }) => {
  const [ref, controls, inView] = useScroll();

  useEffect(() => {
    if (inView) {
      setSectionTitle("Contact");
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider ref={ref} initial="hidden" animate={controls}>
      <PageSlider.Content>
        <PageSlider.Left>
          <PageSlider.Header>By Email</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <p className="pb-4">
              The best way to contact me is by email! But you can also reach me
              via direct message on{" "}
              <a
                href="https://www.linkedin.com/in/nick-zaremba-4a441a87/"
                className="text-purple-500"
              >
                LinkedIn
              </a>
              .
            </p>

            <div className="pt-8 rounded-3xl flex flex-col justify-center items-center">
              <a
                className="text-xl sm:text-3xl text-purple-700"
                href="mailto: nfzaremba@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                nfzaremba@gmail.com
              </a>
            </div>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <Image src={profile} alt="contact" />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
