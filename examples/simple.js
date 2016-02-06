import {Tab, TabPanel} from '@mtfe/react-tab';
import React from 'react';
import ReactDOM from 'react-dom';

require('@mtfe/react-tab/assets/index.css');

export default class Page extends React.Component {

  render() {
    return (
      <Tab actived='tab2'>
        <TabPanel title="Tab1" tabKey='tab1'>
          <div>
            <p>hello world</p>
            <p>this is tab1</p>
          </div>
        </TabPanel>
        <TabPanel title="Tab2" tabKey='tab2'>
          <div>
            <p>hello world</p>
            <p>this is tab2</p>
          </div>
        </TabPanel>
        <TabPanel title="Tab3" tabKey='tab3'>
          <div>
            <p>hello world</p>
            <p>this is tab3</p>
          </div>
        </TabPanel>
      </Tab>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('__component-content'));
