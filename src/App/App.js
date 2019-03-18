import React from 'react';

const App = () => (
  <div>
    <div>
    <h1>vauquelin - JSON translator</h1>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <div>input</div>
        <textarea rows={50} style={{ width: '80%' }} />
      </div>
      <div style={{ width: '50%' }}>
        <div>output</div>
        <textarea rows={50} style={{ width: '80%' }} value="" onChange={() => {}} />
      </div>
    </div>
  </div>
)

export { App };
