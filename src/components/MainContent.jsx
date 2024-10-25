import evanImg from "/img/evan.png";
import { FileUser } from "lucide-react";
import data from "../../data.json"

export default function MainContent() {
  return (
    <article className="space-y-12">
      <header>
        <figure className="flex items-center gap-x-4">
          <div className="w-max border border-zinc-300 p-1 rounded-lg dark:border-zinc-700">
            <img
              src={evanImg}
              alt="Evan Rafa Radya Alifian"
              loading="lazy"
              className="w-24 rounded-md"
            />
          </div>
          <figcaption>
            <h1 className="font-semibold text-2xl">Evan Alifian</h1>
            <p>I code with JavaScript.</p>
          </figcaption>
        </figure>
      </header>
      <section aria-describedby="about_me">
        <h2 id="about" className="text-2xl font-bold mb-2">
          <a href="#about">About</a>
        </h2>
        <p className="text-justify">
          Hi! my name is Evan Rafa Radya Alifian. I am a student at Trunojoyo
          Madura University. I have a basic experince in web development,
          especially in frontend development. Currently, i build website with
          HTML5, JavaScript, TailwindCSS, and React.js.
        </p>
      </section>
      <section aria-describedby="curriculum_vitae">
        <h2 id="curriculum_vitae" className="text-2xl font-bold mb-2">
          <a href="#curriculum_vitae">Curriculum vitae</a>
        </h2>
        <a
          href="/cv.pdf"
          target="_blank"
          className="inline-flex gap-x-2 text-gray-700 font-medium transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <FileUser /> See my CV
        </a>
      </section>
      <section aria-describedby="skills">
        <h2 id="skills" className="text-2xl font-bold mb-2">
          <a href="#skills">Skills</a>
        </h2>
        <div className="flex flex-wrap gap-4">
          {data.skills.map((skill) => (
            <figure
              key={skill.name}
              className="flex items-center gap-x-4 border border-zinc-300 bg-zinc-100 rounded-lg p-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                width={24}
              />
              <figcaption>{skill.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section aria-describedby="social_media">
        <h2 id="social_media" className="text-2xl font-bold mb-2">
          <a href="#social_media">Social Media</a>
        </h2>
        <div className="space-y-4">
          {data.social_media.map((social) => (
            <a
              href={social.url}
              target="_blank"
              key={social.url}
              className="block"
            >
              <figure className="flex items-center justify-center gap-4 border border-zinc-300 bg-zinc-100 rounded-lg p-2 transition-transform hover:scale-105 dark:border-zinc-700 dark:bg-zinc-100">
                <img
                  src={social.icon}
                  alt={social.name}
                  loading="lazy"
                  width={44}
                />
                <figcaption className="flex flex-col">
                  <span>{social.name}</span>
                  <span className="text-lg text-zinc-700 font-semibold">
                    @{social.username}
                  </span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
