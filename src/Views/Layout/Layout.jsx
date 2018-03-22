import React from 'react'
import {AppBar} from 'material-ui';
import DataForm from '../../Partials/DataForm/DataForm.jsx';
import BinaryTree from '../../Libs/BinaryTree';
import TreeContainer from '../../Partials/TreeContainer/TreeContainer.jsx';

class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      sourceData: null,
      treeData: null,
      showTree: false
    }
  }

  static getTreeData = (data) => {
    const binaryTree = new BinaryTree;
    binaryTree.generateTree(data);
    return binaryTree.tree;
  };

  onDataInput = (data) => {
    this.setState({
      sourceData: data,
      treeData: Layout.getTreeData(data)
    })
  };

  componentWillMount () {
    const {defaultData} = this.props;
    if (defaultData) {
      this.setState({
        treeData: Layout.getTreeData(defaultData)
      })
    }
  }

  render () {
    const {treeData} = this.state;
    return (
      <div style={styles.layout}>
        <AppBar
          style={styles.appBar}
          titleStyle={styles.title}
          title="Visualize Binary Tree"
          showMenuIconButton={false}/>
        <DataForm
          onSubmit={this.onDataInput}/>
        <TreeContainer treeData={treeData}/>
      </div>
    )
  }
}

const styles = {
  layout: {
  },
  appBar: {
    background: '#7C4DFF'
  },
  title: {
    textAlign: 'center',
    color: "#fff"
  }
};

export default Layout;
