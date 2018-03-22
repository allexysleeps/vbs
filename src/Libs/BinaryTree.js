class BinaryTree {
  constructor () {
    this.tree = {};
  }

  addItem = (value, tree = this.tree) => {
    if (!tree.value) {
      tree.value = value
    } else {

      if (value > tree.value) {

        if (!tree.right) {
          tree.right = {};
          tree.right.value = value;
        } else {
          this.addItem(value, tree.right)
        }

      } else if (value < tree.value) {

        if (!tree.left) {
          tree.left = {};
          tree.left.value = value;
        } else {
          this.addItem(value, tree.left)
        }

      }

    }
  };

  generateTree = (data) => {
    data.forEach((item) => {
      this.addItem(item);
    })
  };
}

export default BinaryTree;
