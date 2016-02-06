import Component from '@mtfe/react-tab';
import React from 'react';
import ReactDOM from 'react-dom';

require('@mtfe/react-tab/assets/index.css');

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Component name="click me!" onClick={() => alert('custom alert')} />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__component-content'));
