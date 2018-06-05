/**
 * Created by steam on 05.06.2018.
 */

var tree;

function setup() {
    tree = new Tree();
    var unsorted = [];
    for (var i = 0; i < 10; i++) {
        var $value = randomBetween(0, 10);
        unsorted.push($value);
        tree.addValue($value);
    }
    console.log(tree);
    console.log(unsorted);
    tree.traverse();

}
setup();

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}