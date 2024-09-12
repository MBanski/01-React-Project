import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";

function App() {
  //useState always returns and array with exactly 2 elements

  //The first element is the Current state value

  //The second element is always a function used to update
  //the first element and tells react to re-execture the component

  const [selectedTopic, setSelectedTopic] = useState("Please click a button!");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //selectedButton => 'components', 'JSX', 'Props', 'State'
    console.log(selectedTopic);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* IMPORTANT - We can pass functions as props (we pass a  pointer to a function as a prop, this function 
              can then be executed in the receiving component even when the function is not located in the same component file  ) */}
            <TabButton onSelect={() => handleSelect("component")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
