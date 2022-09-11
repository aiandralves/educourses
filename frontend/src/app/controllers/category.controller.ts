import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryDTO } from "app/dtos/category.dto";
import { environment } from "src/environments/environment";

@Injectable()
export class CategoryController {
    private _api: string = environment.api;

    constructor(private _http: HttpClient) {}

    async findAll(): Promise<CategoryDTO[]> {
        return this._http
            .get<CategoryDTO[]>(`${this._api}/categories`)
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
