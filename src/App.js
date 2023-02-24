import { useState } from 'react';

import './App.css';
import Markdowninput from './Componentes/Markdowninput';
import Result from './Componentes/Result';

function App() {
  const [markdownInput, setmarkdownInput] = useState("# Markdown Preview")

  return (
    <div className="App">
      <Markdowninput markdownInput={markdownInput} setmarkdownInput={setmarkdownInput} />
      <Result markdownInput={markdownInput} setmarkdownInput={setmarkdownInput} />
    </div>
  );
}

export default App;
