import React from "react";
import { Tilt } from "react-tilt";
import "./css/AboutMe.css";

export default function Projects(props) {
  return (
    <a href={props.link} target="_blank" class="snap-always snap-center">
      <Tilt
        options={{
          reverse: true, // reverse the tilt direction
          max: 10, // max tilt rotation (degrees)
          perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 25, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.}} className=" m-5 w-80">
        }}
        className={"w-96 m-5"}
      >
        <article class="overflow-hidden outline outline-2 rounded-lg bg-bg-gray">
          <img
            alt="Office"
            src={props.image}
            class="h-56 w-full object-cover"
          />

          <div class="bg-bg-gray p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-400">
              {props.date}
            </time>

            <h3 class="mt-0.5 text-lg text-white">{props.title}</h3>

            <p class="h-20 mt-2 line-clamp-3 text-sm/relaxed text-gray-text-gray-400">
              {props.content}
            </p>
          </div>
          <p class="pl-4 pb-2 text-gray-400 ">Team Members</p>
          {props.teamMembers.map((teamMember) => (
            <a href={teamMember.linkedIn} target="_blank">
              <div class="px-4 pb-3 bg-bg-gray flex justify-start items-center">
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                  <img src={teamMember.image}></img>
                </div>
                <span class="px-2">{teamMember.name}</span>
              </div>
            </a>
          ))}
        </article>
      </Tilt>
    </a>
  );
}
