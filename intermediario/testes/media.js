// eslint-disable-next-line no-unused-vars
const media = (...nums) => {
    if (nums[0] === undefined) return 0
    const total = nums.map((num) => parseFloat(num)).reduce((a, b) => a + b)
    return total / nums.length
}
