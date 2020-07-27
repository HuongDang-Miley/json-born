const fs = require('fs')

const getStudentByIndex = function(index) {
    const file = fs.readFilesSync('../students.json', 'utf8')
    const data = JSON.parse(file);
    console.log(data)
    return data.students[index]
}


const getStudentByName = function(name) {
    const file = fs.readFilesSync('../students.json', 'utf8')
    const obj = JSON.parse(file);
    for (const student of obj.students ) {
      if (student.name === name) {
        return student
      }
    }
    return -1
  }
  

  const graduateStudent = function(name) {
    const file = fs.readFilesSync('../students.json', 'utf8')
    const obj = JSON.parse(file);
    for (const student of obj.students) {
      if (student.name === name) {
        student.term ++
      }
    }
    const updateFile = JSON.stringify(obj, null, 2)
    fs.writeFileSync('../students.json', updateFile)
  }