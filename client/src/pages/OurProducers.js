import React, { Component } from "react";

class OurProducers extends Component {
  state = {};
  render() {
    return (
      <div id="producers">
        <h3>Our Producers</h3>

        <hr />

        <p>
          <img
            src="https://girlsgottadrink.com/wp-content/uploads/2016/09/Italian_Wine_Grapes_Sagrantino-770x963.jpg"
            id="grapes"
            alt="grapes"
          />
          Our producers are guided by a sense of responsible stewardship of
          their heritage, as well as of their vines.
        </p>

        <p>
          All of our producers are committed to sustainable agriculture and a
          good number practice “biodynamic” farming. Most produce fewer than
          6,000 cases in any given year, and their wines perfectly reflect the
          culture and terroir of their region and vineyards.
        </p>

        <p>
          If you are a producer and would like to have us represent your
          products, please contact us. If you are an existing producer-partner,
          and need to update your information, please contact us. We're
          available 7 days a week: phone: 888-POUR-CWC or email: info@cwc.com.
        </p>
      </div>
    );
  }
}

export default OurProducers;
