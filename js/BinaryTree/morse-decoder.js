/**
 * Created by steam on 06.06.2018.
 */
var morseTree;

function setup() {
    morseTree = new MorseTree();
    var Alphabet = new Array();
    Alphabet['A'] = '.-|';
    Alphabet['B'] = '-...|';
    Alphabet['C'] = '-.-.|';
    Alphabet['D'] = '-..|';
    Alphabet['E'] = '.|';
    Alphabet['F'] = '..-.|';
    Alphabet['G'] = '--.|';
    Alphabet['H'] = '....|';
    Alphabet['I'] = '..|';
    Alphabet['J'] = '-.-';
    Alphabet['K'] = '-.-|';
    Alphabet['L'] = '.-..|';
    Alphabet['M'] = '--|';
    Alphabet['N'] = '-.|';
    Alphabet['O'] = '---|';
    Alphabet['P'] = '.--.';
    Alphabet['Q'] = '--.-|';
    Alphabet['R'] = '.-.|';
    Alphabet['S'] = '...|';
    Alphabet['T'] = '-|';
    Alphabet['U'] = '..-|';
    Alphabet['V'] = '...-|';
    Alphabet['W'] = '.--|';
    Alphabet['X'] = '-..-|';
    Alphabet['Y'] = '-.--|';
    Alphabet['Z'] = '--..|';
    Alphabet['1'] = '.----|';
    Alphabet['2'] = '..---|';
    Alphabet['3'] = '...--|';
    Alphabet['4'] = '....-|';
    Alphabet['5'] = '.....|';
    Alphabet['6'] = '-....|';
    Alphabet['7'] = '--...|';
    Alphabet['8'] = '---..|';
    Alphabet['9'] = '----.|';
    Alphabet['0'] = '-----|';
    Alphabet['?'] = '..--..|';
    Alphabet['.'] = '.-.-.-|';
    Alphabet[','] = '--..--|';
    Alphabet['='] = '-...-|';
    Alphabet['+'] = '.-.-.|';
    let index;
    for (index in Alphabet) {
        let char = new Char(index, Alphabet[index]);
        morseTree.addChar(char)
    }
    console.log(morseTree);


}

setup();

function Char(char, morse) {
    this.char = char;
    this.morse = morse;
}

function MorseTree() {
    this.root = null;
}

MorseTree.prototype.addChar = function (char) {
    var node = new MorseNode(char);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addNode(node)
    }

};


function MorseNode(char) {
    this.char = char;
    this.chain = char.morse;
    this.dot = null;
    this.dash = null;
}

MorseNode.prototype.addNode = function (node) {
    let symbol = this.chain.charAt(0);
    if (symbol === '|') {
        this.char = node.char;
        this.chain = null;
    } else {
        this.chain = this.chain.substr(1);
        if (symbol === '.') {
            if (this.dot === null) {
                this.dot.addNode(node);
            } else {
                this.dot.visit(node);
            }
        }
        if (symbol === '-'){
            if (this.dash === null) {
                this.dash.addNode(node);
            } else {
                this.dash.visit(node);
            }
        }
    }
};
MorseNode.prototype.visit = function (node) {
    let symbol = this.chain.charAt(0);
    if (symbol === '|') {
        this.char = node.char;
        this.chain = null;
    }
    if (this.dot !== null) {
        this.dot.visit();
    }
    console.log(this.morse + ' = ' + this.char);
    if (this.dash !== null) {
        this.dash.visit();
    }
};
