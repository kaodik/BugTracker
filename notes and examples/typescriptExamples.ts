//Typescript examples
//Basic types
let id: number = 5;
let company: string = "raversy media";
let isPublished: boolean = true;
let x: any = "hello";
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

//Tuple
//a tuple is very specific the order and type has to match
let person: [number, string, boolean] = [1, "brad", true];
//Tuple arr
let employee: [number, string][];
employee = [
  [1, "brad"],
  [2, "ale"],
  [3, "jeff"],
];

//Union allows for a variable to hold more than one type
let pid: string | number = 22;

pid = 22;
pid = "22";

//Enum
//they start with val of 0-4 up =0 by default
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

//Objects
//can and please use interface instead of they way
//objects can be usesed with primitives and unions
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};

type Point = number | string;
const p1: Point = 1;

//Type assertion
let cid: any = 1;
let customerID = cid as number;
//or
//let customerID = <number>cid
//testcase customerID = true;

//functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//Interfaces
//simuar to objects
//can't use primitives or unions
//adding ? means optional
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "john",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//classes used to create objects, they need props

//id and name are public by default
//by adding private in front of id or name it is only accessable with in the class
//protected only way to access it is within that class or any class that is extened from it
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id, this.name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, "brad lee");
const st = new Person(1, "st lee");

//Subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "steve", "developer");

//Generics
//the T was any, it represents a placeholder for type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["st", "hel", "yal"]);

//for react passing props should use the interface ie
interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
}

// const List: React.FC<IProps> = ({ people }) => {
//   return people.map(person) => {return("html with person.url... stuff")};
// };

//I would recommend for the easiest method of getting things going quickly is to
//build the project and with each completed component review what typescript is doing
// and then declare the types as i go along.
