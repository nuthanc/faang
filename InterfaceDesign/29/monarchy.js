class Monarch {
  constructor(name) {
    this.monarch_tree = {};
    this.monarch_tree[name] = { children: [], parent: null, isAlive: true };
    this.current_monarch = name;
  }

  birth(child, parent) {
    this.monarch_tree[parent].children.push(child);
    this.monarch_tree[child] = { children: [], parent: parent, isAlive: true };
  }

  death(name) {
    this.monarch_tree[name].isAlive = false;
    if (name === this.current_monarch) {
      this.current_monarch = null;

      const children = this.monarch_tree[name].children;
      for (const child of children) {
        if(child.isAlive) {
          this.current_monarch = child;
          break;
        }
      }
      if (!this.current_monarch) {

      }
    }
  }
}
// Incomplete 