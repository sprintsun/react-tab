import {Tab, TabPanel} from '@mtfe/react-tab';
import React from 'react';
import ReactDOM from 'react-dom';

require('@mtfe/react-tab/assets/index.css');

export default class Page extends React.Component {

  constructor() {
    super();

    this.state = {
      actived: 'tab3'
    }
  }

  render() {
    return (
      <Tab actived={this.state.actived} onSwitch={(tabKey) => {console.log('tabKey: ', tabKey)}}>
        <TabPanel title="Tab1" tabKey='tab1'>
          <div>
            <p>hello world</p>
            <p>this is tab1</p>
          </div>
          <button onClick={() => this.setState({'actived': 'tab2'})}>点击我切换到Tab2</button>
        </TabPanel>
        <TabPanel title="Tab2" tabKey='tab2'>
          <div>
            <p>hello world</p>
            <p>this is tab2</p>
          </div>
          <button onClick={() => this.setState({'actived': 'tab3'})}>点击我切换到Tab3</button>
        </TabPanel>
        <TabPanel title="Tab3" tabKey='tab3'>
          <div>
            <p>hello world</p>
            <p>this is tab3</p>
          </div>
          <button onClick={() => this.setState({'actived': 'tab1'})}>点击我切换到Tab1</button>
        </TabPanel>
      </Tab>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('__component-content'));
