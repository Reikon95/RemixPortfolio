// import Linkedin from "linkedin.svg";
// import Github from "github.svg";
// import Globe from "globe.svg";
// import Gmail from "gmail.svg";
import stylesUrl from "~/styles/contact.css";
import { LinksFunction } from "remix";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <div className="contact-panel">
        <img
          src="https://avatars.githubusercontent.com/u/38852603?v=4"
          width="200"
          height="200"
          alt="cam"
          className="cam-picture"
        />
        <div className="contact-panel-details">
          <div className="updates-info">
            I'm currently looking for partnerships for The Coder Career to help
            establish it as a careers hub for technology professionals
            worldwide. If you think you can help, please get in touch via the
            links below!
          </div>
          <div className="socials-icon">
            <a
              href="mailto:thecodercareer@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"gmail.svg"} height="32px" />
            </a>
            <a
              href="https://www.github.com/reikon95"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"github.svg"} height="32px" />
            </a>

            <a
              href="https://www.linkedin.com/in/cameron-blackwood-2b758883/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"linkedin.svg"} height="32px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
