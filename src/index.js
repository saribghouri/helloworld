import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div id="main-container">
      <div>
        <h1 id="main-heading">CURRICULUM VITAE</h1>
      </div>
      <div id="detail-div">
        <h2 id="name">Sarib Ghouri</h2>
        <h3>22/j-block-2</h3>
        <h3>karachi pakistan</h3>
        <h3>
          Contect No-<u>03322852640</u>
        </h3>
        <h3>
          E Mail ID:- <u>Sarib.ghouri45@gmail.com</u>
        </h3>
      </div>
      <br class="brr"></br>
      <hr class="brr"></hr>
      <div id="Work-div">
        <h2>Objective</h2>
        <li id="reading-status">
          {" "}
          To make a mark in services industry by putting best of efforts
        </li>

        <h2>Professional Qualification</h2>
        <li id="reading-status">2020-2022 working on a software house </li>

        <h2>Working Experience</h2>

        <li id="reading-status">
          working with web development sofware house in inciter tech{" "}
        </li>

        <h2>Education Qualification</h2>
        <li id="reading-status">
          2019 in matriculation from gf academy school
        </li>
        <li id="reading-status">
          2021 in intermidiate from degree science collage
        </li>

        <h2>Achievements</h2>
        <li id="reading-status">Awarded Certificate from gf academy</li>
        <li id="reading-status">Awarded Certificate engineering department</li>

        <h2> Hobbies</h2>
        <li id="reading-status">playing & singing</li>

        <h2>Personal Profile</h2>
        <div class="name">
          <p class="prg">Father Name </p>
          <p id="scd">muhammad yousuf ghouri </p>
        </div>

        <div class="name">
          <p class="prg">Date of Birth </p>
          <p id="scd">18/feb/2002</p>
        </div>

        <div class="name">
          <p class="prg">sex </p>
          <p id="scd">male </p>
        </div>

        <div class="name">
          <p class="prg">Martial Status </p>

          <p id="scd">Unmarried </p>
        </div>

        <div class="name">
          <p class="prg">Nationality </p>
          <p id="scd">pakistani </p>
        </div>

        <div class="name">
          <p class="prg">language</p>
          <p id="scd">english & urdu </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
