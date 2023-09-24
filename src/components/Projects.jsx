import React from "react";
import { Tilt } from "react-tilt";

export default function Projects() {
  return (
    <>
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
        className={"w-108 m-5"}
      >
        <article class="overflow-hidden rounded-lg transition bg-bg-gray">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover"
          />

          <div class=" p- bg-bg-gray sm:p-6">
            <time
              datetime="2022-10-10"
              class="block text-xs text-gray-500 dark:text-gray-400"
            >
              10th Oct 2022
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">
                How to position your furniture for positivity
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
          <div class="px-4 bg-bg-gray flex justify-start items-center">
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <img src="https://media.licdn.com/dms/image/D5603AQG3T9WelNmVgw/profile-displayphoto-shrink_400_400/0/1692572748078?e=1701302400&v=beta&t=JM2t3g5kYL_yTif515eiPEsvNsNaiGENwt4Zv1yz1co"></img>
            </div>
            <span class="px-2">Arjun Dabir</span>
          </div>
        </article>
      </Tilt>
    </>
  );
}
