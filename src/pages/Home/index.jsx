import * as React from "react";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage_main_holder">
        <div className="homepage_title_holder">
          <div className="homepage_image_container">
            <img src='./assets/arcadis.png'/>
          </div>
          <div className="homepage_title_container">
            <h2>Report Generator Add-In</h2>
          </div>
        </div>
        <div className="homepage_body_holder">
          <div className="homepage_text_container"></div>
          <div className="homepage_text_container"></div>
          <div className="homepage_text_container"></div>
          <div className="homepage_text_container">
            <button>Sign-On</button>
          </div>
        </div>
      </div>
    );
  }
}
