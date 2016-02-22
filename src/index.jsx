import React, {Component, PropTypes, cloneElement} from "react";
import ReactDOM from "react-dom";

export class Tab extends Component {

  constructor() {
    super();
    this.currTab = ''; // 当前选中的tab
    this.selectedTabs = {}; // 记录选中过的tab
    this.state = {
      actived: ''
    }
  }

  static defaultProps = {
    cls: '',
    style: {},
    actived: null,
    onSwitch: function() {}
  }

  static propTypes = {
    cls: PropTypes.string,
    style: PropTypes.object,
    actived: PropTypes.string,
    onSwitch: PropTypes.func
  }

  switchTab(tabKey) {
    var {onSwitch = function(){}} = this.props;
    this.selectedTabs[tabKey] = true;
    this.currTab = tabKey;
    this.setState({'actived': tabKey});
    typeof onSwitch == 'function' && onSwitch(tabKey);
  }

  componentWillMount() {
    var {actived, children} = this.props;
    if(typeof actived == 'undefined') {// 没有配置actived,默认设置成第一个
      var count = React.Children.count(children);
      if(count) {
        var child = count == 1 ? children : children[0];
        if(child) {
          this.setState({'actived': child.props.tabKey});
          this.selectedTabs[child.props.tabKey] = true;
        }
      }
    } else {
      this.setState({'actived': actived});
      this.selectedTabs[actived] = true;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.actived != nextProps.actived &&
    this.currTab != nextProps.actived &&
    this.switchTab(nextProps.actived)
  }

  renderTabItem() {
    var self = this;
    var actived = this.state.actived;
    var {cls, style} = this.props;
    var tabKeyList = [];
    return (
      <ul className="aloha-tab-item">
        {
          React.Children.map(this.props.children, (tab, index) => {
            if(!tab) {
              return;
            }

            let {tabKey, title} = tab.props;
            if (tabKey) {
              if(~tabKeyList.indexOf(tabKey)) {
                console.error('props tabKey in TabPanel is not allowed to repeat!');
              } else {
                tabKeyList.push(tabKey);
                let className = "item " + (tabKey == actived ? "item-on " : "") + cls;
                let handler = self.switchTab.bind(self, tabKey);
                return <li className={className} key={index} onClick={handler} style={style}>{title}</li>
              }
            } else {
              console.error('props tabKey in TabPanel is require!');
            }
          })
        }
      </ul>
    )
  }

  renderChild() {
    var selectedTabs = this.selectedTabs, actived = this.state.actived;
    return React.Children.map(this.props.children, (child) => {
      if(!child) {
        return null;
      }
      let tabKey = child.props['tabKey'];
      return cloneElement(child, {
        isShow: tabKey == actived,
        isRenderChild: selectedTabs[tabKey]
      });
    });
  }

  render() {
    return (
      <div className="aloha-tab">
        {this.renderTabItem()}
        {this.renderChild()}
      </div>
    )
  }
}

export class TabPanel extends Component {

  static propTypes = {
    cls: PropTypes.string,
    style: PropTypes.object,
    tabKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    cls: '',
    style: {}
  }

  render() {
    var {cls, style, isShow, isRenderChild} = this.props;
    var display = isShow ? 'block' : 'none';
    var cls = 'aloha-tab-panel ' + cls;
    var style = Object.assign({display: display}, style);
    return <div className={cls} style={style}>{isRenderChild ? this.props.children : null}</div>
  }
}
