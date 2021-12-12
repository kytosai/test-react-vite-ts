import { useState } from 'react';
// import '@/less/index.less';
import 'antd/dist/antd.less';
import { buildUrl } from '@/helpers/url';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  const a = buildUrl();
  console.log(a);

  return (
    <div className="App">
      <h1>App</h1>

      <div style={{ padding: '16px 0' }}>
        <button className="btn">Button</button>
      </div>

      <div style={{ padding: '16px 0' }}>
        <Button>Antd button</Button>
      </div>
    </div>
  );
}

export default App;
