"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 20, -10, 100, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('kölfjsdaölfdjföldsjf');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(7);
linkedList.add(-10);
linkedList.add(90);
linkedList.add(-3);
linkedList.sort();
linkedList.print();
