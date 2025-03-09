import { useState } from 'react';

import { EXAMPLES } from '../assets/data.js';

import TabButton from './TabButton.jsx';

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState();
  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a button</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => clickHandler('components')}
        >
          Componets
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => clickHandler('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => clickHandler('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => clickHandler('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
