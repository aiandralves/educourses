import { Component, OnInit } from "@angular/core";
import { CategoryController } from "app/controllers/category.controller";
import { CategoryDTO } from "app/dtos/category.dto";

@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
    categories: CategoryDTO[];

    constructor(private _categoryController: CategoryController) {}

    ngOnInit() {
        this.findCategories();
    }

    async findCategories(): Promise<CategoryDTO[] | void> {
        return await this._categoryController.findAll().then((data) => {
            this.categories = data;
        });
    }
}
