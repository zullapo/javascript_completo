type GenericArray<T> = T[]

const numArr: number[] = [1, 2, 3]
const numTypedArr: GenericArray<number> = [10, 20, 30]

const strNumArr: (string | number)[] = ['1', 2, '3']
const strNumTypedArr: GenericArray<string | number> = [10, '20', 30]
