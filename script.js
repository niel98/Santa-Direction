const { dir } = require('console')
const fs = require ('fs')

const whatFloor = () => {
    console.time('SantaTime')
    fs.readFile('./santa.txt', (err, data) => {
        if (data) {
            const directions = data.toString()
            // console.log(directions)

            const directionArray = directions.split('')
            console.log(directionArray)

            const answer = directionArray.reduce((acc, currentItem) => {
                if (currentItem === '(') {
                   return acc += 1 // Go one floor up
                } else if (currentItem === ')') {
                   return acc -= 1 // Go one floor down
                }
            }, 0)
            console.timeEnd('SantaTime')
            console.log('floor => ', answer)
        }
    })
}

// whatFloor()

const whatFloorBasement = () => {
    console.time('SantaAtBasement')
    fs.readFile('./santa.txt', (err, data) => {
        if (data) {
            const directions = data.toString()

            const directionArray = directions.split('')

            let accumulator = 0
            let counter = 0
            directionArray.some(currentItem => {
                if (currentItem === '(') {
                    accumulator += 1
                } else if (currentItem === ')') {
                    accumulator -= 1
                }
                counter ++
                return accumulator < 0
            })
            console.timeEnd('SantaAtBasement')
            console.log('Floor_Basement => ', counter)
        }
    })
}

whatFloorBasement()