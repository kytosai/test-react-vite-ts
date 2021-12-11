import { useState } from 'react';
import '@/less/index.less';
import { buildUrl } from '@/helpers/url';

function App() {
  const [count, setCount] = useState(0);

  const a = buildUrl();
  console.log(a);

  return (
    <div className="App">
      <h1>App</h1>
      <button className="btn">Button</button>
    </div>
  );
}

export default App;
