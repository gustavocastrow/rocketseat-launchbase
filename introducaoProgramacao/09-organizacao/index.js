const classA = [
  {
    name: 'Gustavo',
    grade: 7.2
  },
  {
    name: 'Pedro',
    grade: 5
  },
  {
    nome: 'Mayk',
    grade: 10
  },
  {
    nome: 'Vito',
    grade: 2
  }
]

const classB = [
  {
    name: 'Marcela',
    grade: 6
  },
  {
    name: 'Fernanda',
    grade: 2
  },
  {
    name: 'Julia',
    grade: 3
  },
  {
    name: 'Ana',
    grade: 0
  }
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade

  }

  const average = sum / students.length;
  return average

}

function sendMessage(average, turma) {

  if (average > 5) {
    console.log(`A média da turma ${turma} foi de ${average}. Parabéns!!`)
  } else {
    console.log(`A média da turma ${turma} foi de ${average}, portanto REPROVADO!!!`)
  }

}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;

  }

}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`O student ${student.name} está flunked!`)
  }
}

function studentReprovado(students) {

  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

studentReprovado(classA);
studentReprovado(classB);