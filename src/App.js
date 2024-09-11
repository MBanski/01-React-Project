import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const readDescription = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = readDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

// Using Destructoring to get image, title, descriptio
// this prevents us from having to use props.image, props.title...
const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Alternative prop syntax - if keys are same as prop names*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
