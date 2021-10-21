import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                “이 사이트에 방문해줘서 고마워. 내가 개인적으로 만들어 본 영화 평가사이트야.
                마음껏 즐겨!”
            </span>
            <span>− Hannah, 2021</span>
        </div>
    );
}

export default About;