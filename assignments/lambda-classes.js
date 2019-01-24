// CODE here for your Lambda Classes
class Person {
    constructor(assignments) {
        this.name = assignments.name;
        this.location = assignments.location;
        this.gender = assignments.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}