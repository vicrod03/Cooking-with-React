import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={2} />
      CounterHooks
      <CounterHooks initialCount={3} />
      <button
        onClick={() =>
          setTheme((prevValue) => (prevValue === 'red' ? 'blue' : 'red'))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
