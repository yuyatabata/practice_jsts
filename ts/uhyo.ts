// 1
function isPositive(num:number): boolean {
    return num >= 0;
}

isPositive(3);
// isPositive('123');
// const numVar: number = isPositive(-5)

// 2
interface User{
    name: string,
    age: number,
    private: boolean
}

function showUserInfo(user: User) {
    console.log('showUserInfo:',user);
}

showUserInfo({
    name: 'John',
    age: 16,
    private: false,
})

// 3
type IsPositiveFunc = (num:number) => boolean;

const isPositive2: IsPositiveFunc = num => num >= 0; 

console.log('isPositive2:',isPositive2(5))

// 4
function sumOfPos(arr: (number)[]): number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

const sum: number = sumOfPos([1, 3, -2, 0]);
console.log('sum:',sum)

// 2-1
function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}

const res = myFilter([1,2,3,4], num => num % 2 ===0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);