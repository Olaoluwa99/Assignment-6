// Creating the array of students
const students = [
  {
    firstName: "Daniel",
    lastName: "Odewale",
    age: 16,
    score: 82,
    courses: ["C.R.S", "Government"],
  },
  {
    firstName: "Fikayo",
    lastName: "Odewale",
    age: 18,
    score: 90,
    courses: ["Anatomy", "Physiology"],
  },
  {
    firstName: "Segun",
    lastName: "Daniels",
    age: 17,
    score: 76,
    courses: ["Neurosurgery", "Government"],
  },
  {
    firstName: "Favour",
    lastName: "Odewale",
    age: 16,
    score: 88,
    courses: ["Computer Science", "Mathematics"],
  },
  {
    firstName: "Paul",
    lastName: "Thomson",
    age: 15,
    score: 91,
    courses: ["Economics", "Yoruba"],
  },
];

// Using the map for destructuring and template literals
const studentDescriptions = students.map(
  ({ firstName, lastName, age, score, courses }) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}.\nCourses taken: ${courses[0]} & ${courses[1]}\n\n`;
  }
);

//Using the For Each loop
studentDescriptions.forEach((description) => {
  console.log(description);
});
