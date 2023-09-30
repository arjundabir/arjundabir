import React, { useState } from "react";
import "./css/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        class="aboutme my-5 bg-bg-gray flex justify-center rounded-lg "
      >
        <div class="flex flex-col items-center py-10">
          <img
            class="w-36 h-36 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D5603AQG3T9WelNmVgw/profile-displayphoto-shrink_200_200/0/1692572748078?e=1701302400&v=beta&t=sIQKdoV_YIlNsBNPhgx4nTY9HtdGL4tobvmxGEvMwKk"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-2xl font-medium text-white">Arjun Dabir</h5>
          <span class="text-sm text-gray-400">Student</span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="mailto: arjunadabir@gmail.com"
              class="inline-flex items-center px-12 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-500  "
            >
              Email
            </a>
          </div>
        </div>
        <div class="hidden lg:flex flex-col justify-center p-8 leading-normal w-5/12">
          <h5 class="mb-2 text-5xl font-medium tracking-tight text-inherit text-center pb-3">
            About Me
          </h5>
          <p class=" mb-3 font-normal text-gray-400">
            I am a Full-stack website developer studying mathematics at the
            University of California, Irvine. I love learning, coding, and
            playing tennis. While you are here, check out some of my projects
            below. To get to know me more, or business inquires, feel free to
            contact me and I will get back to you within a day.
          </p>
          <p class=" mb-3 font-normal text-gray-400">
            <strong>Proficient in: </strong>
            Java, HTML, CSS, React, Node.js, MongoDB, SQL, Python, R-Studio,
            Adobe Creative Suite
          </p>
        </div>
      </div>

      <div id="projectname" class="pb-4">
        <h2 class="text-5xl font-medium text-inherit flex justify-center pb-8 py-6 pl-12">
          My Projects
        </h2>
      </div>
    </>
  );
}
