import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to California Wine Cooperative!</h3>

        <hr />

        <div>
          <p>
            <img
              src="https://www.parisperfect.com/blog/wp-content/uploads/2012/09/Alsace-Grapes-Wine.jpg"
              id="grapes"
              alt="grapes"
            />
            We have compiled a cellar of the California wines we love the most,
            and we hope you will love them, too. It is our pleasure to introduce
            you to the producers we represent; they are stewards of of their
            land and time-tested methods.
          </p>

          <p>
            Please explore and enjoy our site. If you have questions about any
            of the products we carry, please contact us. We're available 7 days
            a week.
          </p>

          <ul>
            <li id="contact">• Mon - Fri 10AM – 8PM</li>
            <li id="contact">• Sat 9AM – 8PM</li>
            <li id="contact">• Sun 12PM – 4PM</li>
            <li id="contact">• Phone: 888-POUR-CWC</li>
            <li id="contact">• Email: info@cwc.com</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
