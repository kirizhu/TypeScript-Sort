import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('jadajADASDJ');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(7);
linkedList.add(-10);
linkedList.add(90);
linkedList.add(-3);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
