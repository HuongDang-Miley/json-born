// read file
const fs = require('fs')

const getStudentByIndex = function (index) {
  const file = fs.readFileSync('../students.json', 'utf8')
// convert to object
const obj = JSON.parse(file)

  return obj.students[index]
}


const getStudentByName = function (name) {
  const file = fs.readFileSync('../students.json', 'utf8')
  // convert to object
  const obj = JSON.parse(file)
  for (const student of obj.students) {
    if (student.name === name) {
      return student
    }
  }
  return -1
}


const graduateStudent = function (name) {
  const file = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(file)
  for (const student of obj.students) {
    if (student.name === name) {
      student.term++
    }
  }
  const updateFile = JSON.stringify(obj, null, 2)
  fs.writeFileSync('../students.json', updateFile)
}


if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
