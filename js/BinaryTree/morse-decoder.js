/**
 * Created by steam on 06.06.2018.
 */
var tree;

function setup() {
    tree = new Tree();
    var alphabet = {
        A:'.-',
        B:'-...',
        C:'-.-.',
        D:'-.-.',
        E:'.',
        F:'..-.',
        G:'--.',
        H:'...',
        I:'.---',
        J:'-.-',
        K:'-.-',
        L:'.-..',
        M:'--',
        N:'-.',
        O:'---',
        P:'.--.',
        Q:'--.-',
        R:'.-.',
        S:'...',
        T:'-',
        U:'..-',
        V:'...-',
        W:'.--',
        X:'-..-',
        Y:'-.--',
        Z:'--..',
        1:'.----',
        2:'..---',
        3:'...--',
        4:'....-',
        5:'.....',
        6:'-....',
        7:'--...',
        8:'---..',
        9:'----.',
        0:'-----',
    };
    tree.addChar('A', '.-');
    tree.addChar('B', '-...');
    tree.addChar('C', '-.-.');
    console.log(tree);
    tree.traverse();

}
setup();

function Dot() {
    this.sound = null;
    this.symbol = null;
}
function Dash() {
    this.sound = null;
    this.symbol = null;
}

Tree.prototype.addChar = function (value) {
    var node = new Node(value);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addNode(node)
    }

};