const { convertCsv } = require('../csv.parse')
const fs = require('fs')
const { promisify } = require('util')

module.exports.read = () => {
	try {
		const readFile = promisify(fs.readFile)

		const read = async () => {
			const data = await readFile('./data/pulitzer-circulation-data.csv', 'utf-8')
			console.table(convertCsv(data))
		}

		read()
	} catch (err) {
		console.log(`Error with file: ${err}`)
	}
}
