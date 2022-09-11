import { Component, OnInit } from "@angular/core";
import { CourseController } from "app/controllers/course.controller";
import { CourseDTO } from "app/dtos/course.dto";

@Component({
    selector: "app-course",
    templateUrl: "./course.component.html",
    styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
    courses: CourseDTO[];

    constructor(private _courseController: CourseController) {}

    ngOnInit() {
        this.findCourses();
    }

    async findCourses(): Promise<CourseDTO | void> {
        return await this._courseController.findAll().then((data) => {
            this.courses = data;
        });
    }
}
