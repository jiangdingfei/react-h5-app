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
export default {
  aa,
  reverse
}
