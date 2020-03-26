import { RulesPerson } from "../../types";

let aa: string = '123'
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): string | number {
  let newX: string | number = x
  if (typeof x === 'number') {
    // newX = Number(x.toString().split('').reverse().join(''));
    newX = x.toString().split('').reverse().join('');
  } else if( typeof x === 'string') {
    newX = x.split('').reverse().join('');
  }
  return newX
}
const isArray = (value: unknown): value is [] => Array.isArray(value)
export default {
  aa,
  reverse,
  isArray
}
const conditionItem: RulesPerson = {
  aa: '111'
}
function truthy(a: number,b: number): number {
  return a && b
}
if(truthy(1,3)) {
  console.log(1111)
}