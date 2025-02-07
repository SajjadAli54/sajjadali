'use client';

import Link from 'next/link';
import { GoStack } from 'react-icons/go';
import { Button } from '@radix-ui/themes';

import TechStack from './components/TechStack';

import { techItems } from "./data/tech-items"

import ProfileImage from "./picofme.png"

import Image from 'next/image';



export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-3">
            Hi, I am Sajjad Ali
          </h1>
          <p className="text-lg mb-4">
            Building seamless digital experiences across Web, Mobile, and
            Desktop. Passionate Full-Stack Developer turning complex problems
            into elegant solutions.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/projects">
              <Button size="2">View My Work</Button>
            </Link>
            <Link href="/contact">
              <Button size="2">Contact Me</Button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">
          <Image
            id="myImage"
            className="rounded-full  object-cover"
            src={ProfileImage}
            alt="Sajjad Ali"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Tech Stack Section */}

      <div className="text-center mb-10">
        <h2 className="text-3xl text-primary flex items-center justify-center gap-2">
          <GoStack className="text-yellow-400" /> Tech Stack
        </h2>
        <TechStack techItems={techItems} />
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mt-10">
        <h2 className="text-3xl mb-3 text-primary">Let's Connect</h2>
        <p className="text-white">
          I am always open to new opportunities and collaborations.
        </p>
        <Link href="/contact">
          <Button variant="soft" size="3">Get In Touch</Button>
        </Link>
      </div>
    </div>
  );
}

