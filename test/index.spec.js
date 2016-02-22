import React from 'react';
import {Tab, TabPanel} from '../src';
import sinon from 'sinon';
import assert from 'assert';
import TestUtils from "react-addons-test-utils";

describe('Tab', () => {

  let onSwitch = (tabKey) => {
    alert(tabKey)
  }

  it('should actived correct', () => {
    let component = TestUtils.renderIntoDocument(
      <Tab actived="tab2">
        <TabPanel title="tab1" tabKey="tab1">tab1</TabPanel>
        <TabPanel title="tab2" tabKey="tab2">tab2</TabPanel>
      </Tab>
    );
    const tab1 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li')[0];
    const tab2 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li')[1];
    assert.equal(tab1.className.indexOf('item-on') == -1, true);
    assert.equal(tab2.className.indexOf('item-on') != -1, true);
  });

  it('should response to click event', () => {
    let component = TestUtils.renderIntoDocument(
      <Tab onSwitch={onSwitch}>
        <TabPanel title="tab1" tabKey="tab1">tab1</TabPanel>
        <TabPanel title="tab2" tabKey="tab2">tab2</TabPanel>
      </Tab>
    );
    const tab1 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li')[0];
    const tab2 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li')[1];
    global.alert = sinon.spy();
    TestUtils.Simulate.click(tab1);
    assert.equal(global.alert.withArgs('tab1').calledOnce, true);
    TestUtils.Simulate.click(tab2);
    assert.equal(global.alert.withArgs('tab2').calledOnce, true);
  });
});
