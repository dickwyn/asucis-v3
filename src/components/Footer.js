import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Image from "./image";

library.add(fab);

const Footer = () => {
  const date = new Date();

  const links = [
    { id: 1, name: "Home", url: "https://www.google.com" },
    { id: 2, name: "Research", url: "https://www.google.com" },
    { id: 3, name: "Our Partners", url: "https://www.google.com" },
    { id: 4, name: "News/Events", url: "https://www.google.com" },
    { id: 5, name: "Our Mission", url: "https://www.google.com" },
    { id: 6, name: "F-1 OPT", url: "https://www.google.com" },
  ];

  const addressLine1 = "RM 225J, Student Pavilion,";
  const addressLine2 = "400 E Orange St,";
  const addressLine3 = "Tempe, Arizona 85281.";

  return (
    <footer>
      <div className="footer-top-container">
        <div className="footer-top">
          <div className="section-one">
            <div className="left-section">
              <Image />
            </div>
            <div className="right-section">
              <p className="name">Coalition of International Students</p>
              <div className="social-icon-container">
                <div className="social-icon">
                  <a
                    href="https://facebook.com/asucis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://twitter.com/asu_cis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://www.instagram.com/asucis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </div>
                <div className="social-icon">
                  <a href="/weixin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "weixin"]} />
                  </a>
                </div>
              </div>
              <p className="address">{addressLine1}</p>
              <p className="address">{addressLine2}</p>
              <p className="address">{addressLine3}</p>

              <a
                href="https://goo.gl/maps/RMmsoVy7nE6E8AEG7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit us
              </a>
            </div>
          </div>
          <div className="section-two">
            <h1>Explore</h1>
            {links.map(link => (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="section-three">
            <h1>Resources</h1>
            {links.reverse().map(link => (
              <a key={link.id} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <div className="left-section">
            <p>
              Arizona State University © Coalition of International Students{" "}
              {date.getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="right-section">
            <p>
              Built by{" "}
              <a
                href="https://www.dickwyn.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                dickwyn
              </a>{" "}
              and the collaborators. This code is available under the{" "}
              <a
                href="https://github.com/asucis/v3/blob/dev/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
