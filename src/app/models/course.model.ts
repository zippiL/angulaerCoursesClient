export class Course{
    _id?:String;
    nameCourse: String;
    kodeKategory: String;
    amountLessons: Number;
    startCourseDate: Date;
    syllabusArr: String[];
    wayLearning: WayLearning;
    kodeLecture:String;
    image: String; 
    constructor( nameCourse: string, kodeKategory: String, amountLessons: number,
        startCourseDate: Date, syllabusArr: string[], wayLearning: WayLearning, kodeLecture:String, image: string  ) {
        this.nameCourse = nameCourse;
        this.kodeKategory = kodeKategory;
        this.amountLessons = amountLessons;
        this.startCourseDate = startCourseDate;
        this.syllabusArr = syllabusArr;
        this.wayLearning = wayLearning;
        this.kodeLecture=kodeLecture;
        this.image = image;
    }
}
export enum WayLearning{
    zoom = 1,
    frontaly = 2
}