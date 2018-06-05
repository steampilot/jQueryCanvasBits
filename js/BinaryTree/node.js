/**
 * Created by steam on 05.06.2018.
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
Node.prototype.visit = function () {
    if (this.left !== null) {
        this.left.visit();
    }
    console.log(this.value);
    if (this.right !== null) {
        this.right.visit();
    }
};
Node.prototype.search = function (value) {
    if (this.value === value) {
        return this;
    } else if (value < this.value && this.left !== null) {
        return this.left.search(value);
    } else if (value > this.value && this.right !== null)
        return this.right.search(value);
}
;

Node.prototype.addNode = function (node) {
    if (node.value < this.value) {
        if (this.left === null) {
            this.left = node;
        } else {
            this.left.addNode(node);
        }
    }
    if (node.value > this.value) {
        if (this.right === null) {
            this.right = node;
        } else {
            this.right.addNode(node)
        }
    }
};