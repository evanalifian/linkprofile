import "./preflight.css";
import "./style.css";
import "./utilities.css";
import evan from '/img/evan.png'
import data from "../data.json";

function App() {
  return (
    <>
      <main>
        <header className="profile container">
          <figure className="profile_header">
            <img
              src={evan}
              alt="Evan Alifian"
              width="112"
              loading="lazy"
              className="profile_header_image"
            />
            <figure className="profile_header_title">
              <span className="profile_header_title_name">Evan Alifian</span>
              <span className="profile_header_title_catchword">
                I make code with JavaScript.
              </span>
              <span></span>
            </figure>
          </figure>
        </header>
        <main className="content container">
          <section className="content_about">
            <h1>About Me</h1>
            <p>
              Hi! my name is Evan Rafa Radya Alifian. I am a student at
              Trunojoyo Madura University. I have a basic experince in web
              development, especially in frontend development. Currently, i
              build website with{(" ")}
              <span className="badge">HTML5</span>,{(" ")}
              <span className="badge">JavaScript</span>,{(" ")}
              <span className="badge">TailwindCSS</span>, and{(" ")}
              <span className="badge">React.js</span>.
            </p>
          </section>
          <section className="content_skills">
            <h2>Skills</h2>
            <ul>
            {data.skills.map((skill) => (
              <li key={skill.name}>
                <figure className="social_card">
                  <img src={skill.icon} alt={skill.name} width="28" loading="lazy" className="social_card_image" />
                  <figcaption className="social_card_title">
                    <span className="social_card_title_name">{skill.name}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
            </ul>
          </section>
          <section className="content_social">
            <h2>Social Media</h2>
            <ul>
              {data.social_media.map((data, i) => (
                <li key={i}>
                  <a href="${data.url}" target="_blnank">
                    <figure className="social_card">
                      <img
                        src={data.icon}
                        alt={data.name}
                        width="44"
                        loading="lazy"
                        className="social_card_image"
                      />
                      <figcaption className="social_card_title">
                        <span className="social_card_title_name">{data.name}</span>
                        <span className="social_card_title_username">
                          @{data.username}
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </main>
      <footer className="container">
        <p>
          If you need something from me, you can email me on{" "}
          <a href="mailto:evanalifian@gmail.com">evanalifian@gmail.com</a>
        </p>
        <span>&copy; 2024 evanalifian</span>
      </footer>
    </>
  );
}

export default App;
