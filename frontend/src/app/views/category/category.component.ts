import { Component, OnInit } from "@angular/core";

export type ICategory = {
    icon: string;
    title: string;
    courseId: number;
};

@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
    categories: ICategory[] = [
        {
            icon: "bx-code",
            title: "Web Development",
            courseId: 5,
        },
        {
            icon: "bxs-palette",
            title: "Personal Development",
            courseId: 8,
        },
        {
            icon: "bxs-data",
            title: "Database",
            courseId: 3,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}

