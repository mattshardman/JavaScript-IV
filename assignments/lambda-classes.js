// CODE here for your Lambda Classes
class Person {
    constructor({ name, location, gender }) {
        this.name = name;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        return console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(assignments) {
        super(assignments);
        const { specialty, favLanguage, catchPhrase } = assignments;
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(assignments) {
        super(assignments);
        const { previousBackground, className, favSubjects } = assignments;
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects() {
        this.favSubjects.map(each => console.log(each));
    }

    PRAssignment(subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(assignments) {
        super(assignments);
        const { gradClassName, favInstructor } = assignments;
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }

    debugsCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
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

// Instructor instances
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

// Student instances
const roy = new Student({
    name: 'Roy',
    location: 'London',
    gender: 'M',
    previousBackground: 'none',
    className: 'cs1',
    favSubjects: [''],
});

const rosie = new Student({
    name: 'Rosie',
    location: 'Maidenhead',
    gender: 'F',
    previousBackground: '3 month camp',
    className: 'cs1',
    favSubjects: ['js', 'go', 'erlang'],
});

// ProjectManger instances
const tom = new ProjectManager({
    name: 'Tom',
    location: 'San Martin',
    gender: 'M',
    specialty: 'ice',
    favLanguage: 'JS',
    catchPhrase: 'Let\'s take it for a ride',
});

const tily = new ProjectManager({
    name: 'Tily',
    location: 'USA',
    gender: 'F',
    specialty: 'polymath',
    favLanguage: 'Python',
    catchPhrase: 'Hello everyone',
});

// person methods
console.log('\n*****Person methods*****');
roger.speak();
pauline.speak();

// Instructor methods
console.log('\n*****Instructor methods*****');
eric.demo('fishing');
sandra.grade(roy, 'go');

// student methods
console.log('\n*****Student methods*****');
rosie.listSubjects();
roy.PRAssignment('js classes');
rosie.sprintChallenge('es6');

// PM methods
console.log('\n*****PM methods*****');
tily.demo('dogs n that');
tom.standUp('eu1');
tom.debugsCode(rosie, 'C++');
