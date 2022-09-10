import { Component, OnInit } from "@angular/core";

export type ICourse = {
    image: string;
    title: string;
    category: string;
    time: string;
    price: number;
};

@Component({
    selector: "app-course",
    templateUrl: "./course.component.html",
    styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
    courses: ICourse[] = [
        {
            image: "course-01.png",
            title: "Education Makes A Person A Responsible Citizen",
            category: "Front-End",
            time: "18h 15m 44s",
            price: 55.55,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}

