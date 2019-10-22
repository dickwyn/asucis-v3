import React, { Component } from "react";
import * as typeformEmbed from "@typeform/embed";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Contact extends Component {
  componentDidMount() {
    const elm = this.typeformElm;
    typeformEmbed.makeWidget(elm, "https://asucis.typeform.com/to/MtcZjL", {
      hideScrollbars: true,
      hideFooter: true,
      // onSubmit() {
      //   console.log("Typeform successfully submitted");
      // },
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />

        <div className="contact-container">
          <div className="contact-information-container">
            <div className="contact-information">
              <h1>Contact us!</h1>
              <ul>
                <li>
                  Due to very busy nature of college students, please provide us
                  with up to 48 hours for a response.
                </li>
                <li>
                  Please don&apos;t email us asking for sponsorships as we
                  generally don&apos;t do those.
                </li>
                <li>We do however accept interview requests.</li>
              </ul>
              <p>
                General mailbox:{" "}
                <a href="mailto:asucis.rocks@gmail.com">
                  asucis.rocks@gmail.com
                </a>
              </p>
              <p>
                High priority mailbox:{" "}
                <a href="mailto:international.students@asu.edu">
                  international.students@asu.edu
                </a>{" "}
                - urgent matter only please, don&apos;t abuse this inbox.
              </p>
              <p>Targeted mailbox:</p>
              <ul>
                <li>
                  President - <a href="mailto:cluk3@asu.edu">cluk3@asu.edu</a>
                </li>
                <li>
                  Vice-President -{" "}
                  <a href="mailto:ljgranad@asu.edu">ljgranad@asu.edu</a>
                </li>
                <li>
                  Advisor -{" "}
                  <a href="mailto:Xiaojing.Cao@asu.edu">Xiaojing.Cao@asu.edu</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="typeform"
            ref={tf => {
              this.typeformElm = tf;
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default Contact;
