function findTheOddInt (values = []) {
	let countMap = new Map
	values.forEach((v) => {
		if (countMap.has(v)) {
			value = countMap.get(v) + 1
			countMap.set(v, value)
		} else {
			countMap.set(v, 1)
		}
	})

	for (let [key, value] of countMap) {
		if ((value % 2) !== 0) {
			return key
		}
	}
}

let result = findTheOddInt([7])
console.log(`findTheOddInt result is: ${result}`)
result = findTheOddInt([0])
console.log(`findTheOddInt result is: ${result}`)
result = findTheOddInt([1,1,2])
console.log(`findTheOddInt result is: ${result}`)
result = findTheOddInt([0,1,0,1,0])
console.log(`findTheOddInt result is: ${result}`)
result = findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])
console.log(`findTheOddInt result is: ${result}`)

function countSmileFace (values = []) {
	if (!values.length) return 0
	let countSmile = 0
	const eyes = [':', ';']
	const mouse = [')', 'D']
	values.forEach((v) => {
		const checkNotAllow = new RegExp('[^:;\\-~)D]')
		// true if invalid symbol
		if (checkNotAllow.test(v)) return
		const hasEye = eyes.some((eye) => v.includes(eye))
		const hasMouse = mouse.some((m) => v.includes(m))
		if (hasEye && hasMouse) {
			countSmile++
		}
	})

	return countSmile
}

let result2 = countSmileFace([':)', ';(', ';}', ':-D'])
console.log(`[':)', ';(', ';}', ':-D'] has ${result2}`)
result2 = countSmileFace([';D', ':-(', ':-)', ';~)'])
console.log(`[';D', ':-(', ':-)', ';~)'] has ${result2}`)
result2 = countSmileFace([';]', ':[', ';*', ':$', ';-D'])
console.log(`[';]', ':[', ';*', ':$', ';-D'] has ${result2}`)

// function shufflingString(nums = []) {
// 	let resultShuffling = [[]]
//
// 	nums.forEach((n) => {
// 		temp = []
// 		for (let shuff of resultShuffling) {
// 			for (let i = 0; i < shuff.length + 1; i++) {
// 				let oldShuff = shuff.slice()
// 				console.log(n)
// 				console.log(oldShuff.splice(i, 0, n))
// 				temp.push(oldShuff.splice(i, 0, n))
// 			}
// 			resultShuffling = temp
// 		}
// 	})
//
// 	return resultShuffling
// }

// shufflingString(['a', 'b'])