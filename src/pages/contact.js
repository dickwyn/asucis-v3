import React, { Component } from "react";
import * as typeformEmbed from "@typeform/embed";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Contacts extends Component {
  componentDidMount() {
    const elm = this.typeformElm;
    typeformEmbed.makeWidget(elm, "https://asucis.typeform.com/to/MtcZjL", {
      hideScrollbars: true,
      hideFooter: true,
      onSubmit() {
        console.log("Typeform successfully submitted");
      },
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <div
          className="ReactTypeformEmbed"
          style={{ height: "100%" }}
          ref={tf => {
            this.typeformElm = tf;
          }}
        />
      </Layout>
    );
  }
}

export default Contacts;
