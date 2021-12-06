import React, { Component } from "react";
import "../style/Testimonials.css";
import Person from "./Person";
export default class Testimonials extends Component {
  star = () => {
    let index1 = 0;
    if ("") {
      return [
        <img
          alt="star2"
          src="https://img.icons8.com/fluency/30/ffffff/star.png"
        />,
        <img
          alt="star2"
          src="https://img.icons8.com/fluency/30/ffffff/star.png"
        />,
        <img
          alt="star2"
          src="https://img.icons8.com/fluency/30/ffffff/star.png"
        />,
      ];
    }
  };
  render() {
    let info = [
      {
        name: "Yaser Ananbeh",
        msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        avatar:
          "https://img.icons8.com/color/170/4a90e2/collaborator-male--v1.png",
        index1: 0,
        class: "message other-message float-right",
      },
      {
        name: "A.Shatnawi",
        msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        avatar: "https://img.icons8.com/color/170/000000/doctor-male--v1.png",
        // rate:"<img alt=\"star1\" src=\"https://img.icons8.com/fluency/30/ffffff/star.png\"/>",
        class: "message other-messageLeft float-right",
      },
      {
        name: "Aya Meizer",
        msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        avatar:
          "https://img.icons8.com/color/170/000000/scientist-woman-skin-type-2.png",
        // rate:"<img alt=\"star1\" src=\"https://img.icons8.com/fluency/30/ffffff/star.png\"/>",
        class: "message other-message float-right",
      },
    ];
    let testimonial = info.map((item, key) => (
      <Person
        name={item.name}
        avatar={item.avatar}
        msg={item.msg}
        className={item.class}
        rate={this.star()}
        key={key}
      />
    ));
    return (
      <>
        <h2 className="testimonialsTitle">
          Testimonials
        </h2>
        {testimonial}
      </>
    );
  }
}
