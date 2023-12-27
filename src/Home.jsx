import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-3xl font-bold mt-8 text-center">
          Girijesh Tripathi
        </h1>
        <p className="font-semibold text-center">
          Full Stack Web App Developer
        </p>
        <div className="mx-5 mt-3">
          <div className="bg-sky-400 font-semibold bg-violet-700 p-2 mb-1">
            EDUCATION
          </div>
          <p className="leading-8 tracking-wide">
            <ul className="list-disc ml-4">
              <li>
                <b> Dr. A.P.J.Abdul Kalam Technical University</b><br/>
                Bachelor of Technology (2017-2021) Computer Science and
                Engineering Lucknow, Uttar Pradesh, India
              </li>

              <li>
              <b>Intermediate</b>  UP Board in year 2013
              </li>
              <li><b>High School</b> UP Board in year 2016</li>
            </ul>
          </p>
        </div>
        <div className="mx-5 mt-3">
          <div className="bg-sky-400 font-semibold bg-violet-700 p-2 mb-1">
            PROJECT
          </div>
          <p className="leading-8 tracking-wide">
            <b>User Registration and Login Dashboard Used :</b> <br /> HTML,
            CSS, Bootstrap,ReactJs, MYSqL Description : Developed a User
            Registration and Login System using HTML, CSS, , and MYSql. Stored
            user data securely in an SQL database with password hashing and
            salting for enhanced security. Implemented client-side validation
            for the registration and login forms. Created a user dashboard to
            display registered users' data in a tabular format.
          </p>
        </div>
        <div className="mx-5 mt-3">
          <div className="bg-sky-400 font-semibold bg-violet-700 p-2 mb-1">
            Responsive Website
          </div>
          <p className="leading-8 tracking-wide">
            <b> Used :</b> HTML, CSS, JS, Bootstrap
            <br />
            <b>Description :</b>
            <br />
            <ul className="list-disc ml-4">
              <li>Modern looking website with stylish section border</li>
              <li>Create navigation bar</li>
              <li>Services section</li>
              <li>Testimonial section</li>
              <li>Email sign up forms</li>
              <li>Stylish Footer designs</li>
            </ul>
          </p>
        </div>
        <div className="mx-5 mt-3">
          <div className="bg-sky-400 font-semibold bg-violet-700 p-2 mb-1">
            Responsibility
          </div>
          <p className="leading-8 tracking-wide">
            <ul className="list-disc ml-4">
              <li>
                Front-end development: Writing clean, efficient, and
                maintainable code using Angular to implement user interfaces and
                interactive features based on design mock-ups and specifications
              </li>

              <li>
                Collaborating with the design and product teams to comprehend
                project requirements and translating them into technical
                implementation plans
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
