import {v4 as uuidv4} from 'uuid';

// generating uuid for students
interface StudentInterface {
  name: string;
  age: number;
  score: number;
  uuid?: string;
}
const student = {
  name: 'azhan',
  age: 23,
  score: 65,
};
function generateStudentUuid(student: StudentInterface, uuid: string): StudentInterface {
  const newStudent = {...student};
  newStudent.uuid = uuid;
  return newStudent;
}

console.log(generateStudentUuid(student, uuidv4()));
