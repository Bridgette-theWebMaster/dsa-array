const Memory = require('./memory')

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = Memory.allocate(this.length)
    }

    push (value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        Memory.set(this.ptr + this.length, value)
        this.length ++
    }

    _resize(size){
        const oldPtr = this.ptr
        this.ptr = Memory.allocate(size)
        if(this.ptr === null) {
            throw new Error ('Out of Memory')
        }

        Memory.copy(this.ptr, oldPtr, this.length)
        Memory.free(oldPtr)
        this._capacity = size
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error')
        }

        return Memory.get(this.ptr + index)
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Index Error')
        }

        const value = Memory.get(this.ptr + this.length - 1)
        this.length --
        return value
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error')
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        Memory.set(this.ptr + index, value)
        this.length ++
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error')
        }

        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length --
    }
}

function main () {
    
    Array.SIZE_RATIO = 3

    let arr = new Array()

    arr.push(3)
    

    console.log(arr)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)
    console.log(arr)
    arr.pop()
    arr.pop()
    arr.pop()
    console.log(arr)
    arr.push(10)
    console.log(arr)
    console.log(arr.get(0))

    var len = arr.length
    console.log(len)
    for(var i = len - 1; i >= 0; i--) {
        console.log(i)
        arr.remove(i)
    }
    arr.push(-100000000)
    

    console.log(arr.get(0))
}
main()

function urlify(str) {
    return str.replaceAll(" ", "%20")
}

console.log(urlify("www.thinkful.com /tauh ida parv een"))

function arr(arr) {
     let newArr = []
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] >= 5) {
             newArr.push(arr[i])
         }
     }

     return newArr
}

console.log(arr([1, 2, 3, 4, 5, 6]))

function maxSum(arr) {
    let maxSum = 0
    let sumSoFar = 0

    for (let i = 0; i < arr.length; i++) {
        sunSoFar += arr[i]
        if (sumSoFar > maxSum) {
            maxSum = sumSoFar
        }
    }

    return maxSum
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))

function mergeArrays(arr1, arr2) {
    arr1 = arr1.concat(arr2)
    return arr1.sort((a, b) => a - b)
}
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));


function removeChar(string, delimiter) {
    let charArr= []
    let newString = []
    let finalString = ""

    for (let i = 0; i < delimiter.length; i++) {
        charArr.push(delimiter[i])
    }

    for (let j = 0; j < string.length; j++) {
        let caught = false
        charArr.forEach((i, index) => {
            if (i === string[j]) {
                caught = true
            }
            if (charArr.length - 1 === index && caught === false)
                newString.push(string[j])
        })
    }

    for (let k = 0; k < newString.length; k++) {
        finalString += newString[k]
    }

    return finalString
}

console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"))


function products(arr) {
    let products = []
    let t
    for (let i = 0; i < arr.length; i++) {
        let tempArray = arr.filter(j => j !== arr[i])
        t = tempArray.reduce((acc, cur) => acc * cur)
        products.push(t)
    }
    return products
}

console.log(products([1, 3, 9, 4]))

function two(arr) {
    let columnCatch = []
    let rowCatch = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                rowCatch.push(i)
                columnCatch.push(j)
            }
        }
    }

    for (let y = 0; y < arr.length; y++) {
        columnCatch.forEach(item => {
            arr[y][item] = 0
        })

        rowCatch.forEach(item => {
            arr[item] = Array(arr[y].length).fill(0)
        })
    }

    return arr
} 

console.log(
    two([
      [1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ])
  );