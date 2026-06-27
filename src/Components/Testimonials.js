import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <Fade triggerOnce duration={1200}>
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>

              <div className="ten columns flex-container">
                <ul className="slides">{testimonials}</ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Testimonials;
