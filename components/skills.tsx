"use client";

import { GlareCard } from "./ui/glare-card";

export function ProgrammingSkills() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Programming Language
        </p>
        <p className="text-white  text-xl mt-4">JavaScript</p>
        <p className="text-white  text-xl mt-4">TypeScript</p>
        <p className="text-white  text-xl mt-4">Python</p>
      </GlareCard>
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Web Development Technologies
        </p>
        <p className="text-white text-xl mt-4">HTML</p>
        <p className="text-white  text-xl mt-4">SCSS (Sass)</p>
      </GlareCard>
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Frontend Development{" "}
        </p>
        <p className="text-white  text-xl mt-4">React</p>
        <p className="text-white  text-xl mt-4">Next.js</p>
        <p className="text-white  text-xl mt-4">React Query</p>
        <p className="text-white  text-xl mt-4">NextUI</p>
        <p className="text-white  text-xl mt-4">Material-UI (MUI)</p>
        <p className="text-white  text-xl mt-4">Aceternity-UI</p>
      </GlareCard>
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Backend Technologies
        </p>
        <p className="text-white  text-xl mt-4">PostgreSQL</p>
        <p className="text-white  text-xl mt-4">
          Knex.js (SQL query builder for Node)
        </p>
      </GlareCard>

      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Authentication and Security
        </p>
        <p className="text-white  text-xl mt-4">
          Bcrypt (for password hashing)
        </p>
        <p className="text-white  text-xl mt-4">
          JWT (JSON Web Tokens)
        </p>
      </GlareCard>

      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Cloud Services and Infrastructure{" "}
        </p>
        <p className="text-white  text-xl mt-4">
          EC2 (Elastic Compute Cloud)
        </p>
        <p className="text-white  text-xl mt-4">
          S3 (Simple Storage Service)
        </p>
      </GlareCard>
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">
          Containerization and Version Control{" "}
        </p>
        <p className="text-white  text-xl mt-4">Docker </p>
        <p className="text-white  text-xl mt-4">Git </p>
      </GlareCard>
      <GlareCard className="cols-span-1 flex flex-col items-center justify-center">
        <p className="text-white font-bold text-4xl mt-4">Design Software </p>
        <p className="text-white  text-xl mt-4">Figma </p>
        <p className="text-white  text-xl mt-4">Stable Diffusion</p>
        <p className="text-white  text-xl mt-4">Adobe Photoshop</p>
        <p className="text-white  text-xl mt-4">Adobe Illustrator</p>
        <p className="text-white  text-xl mt-4">Adobe After Effects</p>
        <p className="text-white  text-xl mt-4">Adobe Premiere Pro</p>
        <p className="text-white  text-xl mt-4">Blender </p>
      </GlareCard>
    </div>
  );
}
