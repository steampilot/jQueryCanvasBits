/**
 * Created by steam on 05.06.2018.
 */
function Tree() {
    this.root = null;
}
Tree.prototype.addValue = function (value) {
    var node = new Node(value);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addNode(node)
    }

};
Tree.prototype.traverse = function () {
    if (this.root !== null) {
       return this.root.visit();
    } else {
        console.log('Tree is empty');
    }
};

Tree.prototype.search = function (value) {
    if (this.root !== null) {
        return this.root.search(value);
    } else {
        return null;
    }
};