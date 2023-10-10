import React from 'react';
import { SiNextdotjs, SiMongodb, SiTypescript, SiLinkedin, SiFacebook, SiGithub, SiAstro, SiHtml5, SiCss3, SiTailwindcss, SiPreact, SiJavascript } from 'react-icons/si';

import './TechStack.css' 

export default function TechStack() {
  return (
    <nav className="w-full h-screen fixed z-0 bg-transparent flex justify-end gap-2">

      <div className='w-fit h-fit flex lg:hidden self-start rotate-90 relative top-14 left-12'>
        <p className='text-neon-shade opacity-75 text-sm'>Tech-Stack</p>
      </div>

      <hr className="w-1 h-2/6 bg-light-shade self-start m-0 p-0 border-none relative left-4 travel-down-glow load-down" style={{ "--delay": 1 } as React.CSSProperties} />
      <hr className="w-1 h-1/6 bg-light-shade self-end m-0 p-0 border-none travel-down-glow load-up" style={{ "--delay": 1 } as React.CSSProperties} />

      <div className="h-full lg:w-28 w-5 flex flex-col p-1">
        <div className='h-1/2 w-full flex flex-col gap-1'>
          <div className="lg:flex hidden items-end justify-center h-20">
            <h4 className="text-neon-shade lg:text-l text-sm">Tech-Stack</h4>
          </div>
          <div className="flex flex-col w-full h-full justify-between relative lg:top-3">

            <TechItem icon={<SiHtml5 />} text="HTML" />
            <TechItem icon={<SiCss3 />} text="CSS" />
            <TechItem icon={<SiJavascript />} text="JS" />
            <TechItem icon={<SiPreact />} text="React" />
            <TechItem icon={<SiTailwindcss />} text="Tailwind" />
            <TechItem icon={<SiNextdotjs />} text="Next" />
            <TechItem icon={<SiTypescript />} text="TS" />
            <TechItem icon={<SiMongodb />} text="Mongo" />
            <TechItem icon={<SiAstro />} text="Astro" />
          </div>
        </div>

        <div className='w-full h-1/2 flex flex-col-reverse relative bottom-3 gap-3'>
          <SocialLink icon={<SiLinkedin />} link="https://www.linkedin.com/in/iris94/" />
          <SocialLink icon={<SiGithub />} link="https://github.com/Iris94" />
          <SocialLink icon={<SiFacebook />} link="https://www.facebook.com/mirza.iris" />
        </div>
      </div>
    </nav>
  );
}

function TechItem({ icon, text }) {
  return (
    <div className='flex items-center lg:justify-between'>
      <figure className='flex justify-center items-center lg:text-3xl text-xl text-light-shade'>{icon}</figure>
      <p className='text-neon-shade text-xs text-end opacity-75 lg:flex hidden '>{text}</p>
    </div>
  );
}

function SocialLink({ icon, link }) {
  return (
    <div className='flex items-center lg:text-3xl text-xl text-light-shade hover:text-hover-shade'>
      <a href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
    </div>
  );
}
