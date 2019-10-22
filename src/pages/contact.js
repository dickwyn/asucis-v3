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
              <h1>We&apos;d love to hear from you</h1>
              <p>
                Wether you have a question about our organization, advocacy
                work, event or anything else, our team is ready to connect you
                with the resources or help you need.
              </p>
              <div className="contact-section-container">
                <div className="contact-section">
                  <h2>General inquiries</h2>
                  <p>
                    Nam non lorem eu elit tristique vestibulum quis in justo.
                    Donec non dictum augue. Pellentesque in imperdiet eros, ut
                    tincidunt metus.
                  </p>
                  General mailbox:{" "}
                  <a href="mailto:asucis.rocks@gmail.com">
                    asucis.rocks@gmail.com
                  </a>
                  <p>
                    High priority mailbox:{" "}
                    <a href="mailto:international.students@asu.edu">
                      international.students@asu.edu
                    </a>{" "}
                    - urgent matter only please, don&apos;t abuse this inbox.
                  </p>
                </div>
                <div className="contact-section">
                  <h2>Advocacy inquiry</h2>
                  <p>
                    Nam non lorem eu elit tristique vestibulum quis in justo.
                    Donec non dictum augue. Pellentesque in imperdiet eros, ut
                    tincidunt metus.
                  </p>

                  <ul>
                    <li>
                      President -{" "}
                      <a href="mailto:cluk3@asu.edu">cluk3@asu.edu</a>
                    </li>
                    <li>
                      Vice-President -{" "}
                      <a href="mailto:ljgranad@asu.edu">ljgranad@asu.edu</a>
                    </li>
                    <li>
                      Advisor -{" "}
                      <a href="mailto:Xiaojing.Cao@asu.edu">
                        Xiaojing.Cao@asu.edu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
