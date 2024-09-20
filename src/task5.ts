interface Course {
    title: string;
    duration: number; //тривалість в годинах
    students: string[];
}

//onlineCourse імплементує інтерфейс course
class OnlineCourse implements Course {
    title: string;
    duration: number;
    students: string[] = [];

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    //метод реєстрації студентів на курс
    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for ${this.title}.`);
        } else {
            console.log(`${student} is already registered for ${this.title}.`);
        }
    }

    //метод перевірки чи студент вже зареєстрований
    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

//coursemanager для керування курсами
class CourseManager {
    private courses: Course[] = [];

    //метод додавання курсу
    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Course "${course.title}" has been added.`);
    }

    //метод видалення
    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.title !== courseName);
        console.log(`Course "${courseName}" has been removed.`);
    }

    //метод пошуку курсу за назвою
    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.title === courseName);
    }

    //метод для виведення всіх курсів та їх студентів
    listCourses(): void {
        if (this.courses.length === 0) {
            console.log("No courses available.");
            return;
        }

        this.courses.forEach(course => {
            console.log(`Course: ${course.title}`);
            console.log(`Duration: ${course.duration} hours`);
            console.log(`Students: ${course.students.length > 0 ? course.students.join(", ") : "No students registered"}`);
            console.log("---");
        });
    }
}

const course1 = new OnlineCourse("TypeScript Basics", 20);
const course2 = new OnlineCourse("Advanced JavaScript", 30);
const course3 = new OnlineCourse("Introduction to Node.js", 25);

const manager = new CourseManager();

manager.addCourse(course1);
manager.addCourse(course2);
manager.addCourse(course3);

course1.registerStudent("Alice");
course1.registerStudent("Bob");
course2.registerStudent("Charlie");
course3.registerStudent("David");

manager.listCourses();
