import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 20, -10, 100, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('kölfjsdaölfdjföldsjf');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(7);
linkedList.add(-10);
linkedList.add(90);
linkedList.add(-3);
linkedList.sort();
linkedList.print();
