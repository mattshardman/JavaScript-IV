// CODE here for your Lambda Classes
class Person {
    constructor(assignments) {
        this.name = assignments.name;
        this.location = assignments.location;
        this.gender = assignments.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(assignments) {
        super(assignments);
        this.specialty = assignments.specialty;
        this.favLanguage = assignments.favLanguage;
        this.catchPhrase = assignments.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(assignments) {
        super(assignments);
        this.previousBackground = assignments.previousBackground;
        this.className = assignments.className;
        this.favSubjects = assignments.favSubjects;
    }

    listSubjects() {
        this.favSubjects.map(each => console.log(each));
    }

    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(assignments) {
        super(assignments);
        this.gradClassName = assignments.gradClassName;
        this.favInstructor = assignments.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Person instances
const roger = new Person({
    name: 'Roger',
    location: 'Japan',
    gender: 'M',
});

const pauline = new Person({
    name: 'Pauline',
    location: 'Westbury',
    gender: 'F'
});

console.log(roger.speak());
console.log(pauline.speak());

// Person instances
const eric = new Instructor({
    name: 'Eric',
    location: 'Wolverhampton',
    gender: 'M',
    specialty: 'ice',
    favLanguage: 'JS',
    catchPhrase: 'Let\'s take it for a ride',
});

const sandra = new Instructor({
    name: 'Sandra',
    location: 'Canada',
    gender: 'F',
    specialty: 'polymath',
    favLanguage: 'Python',
    catchPhrase: 'Hello everyone',
});

console.log(eric.demo('fishing'));
console.log(sandra.grade({ name: 'Roy'}, 'go'));