export class TeacherClass {
    name: string;
    professor: string;

    constructor(name?: string, professor?: string) {
        this.name = name ? name : '';
        this.professor = professor ? professor : '';
    }
}
