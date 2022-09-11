import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CourseDTO } from "app/dtos/course.dto";
import { environment } from "src/environments/environment";

@Injectable()
export class CourseController {
    private _api: string = environment.api;

    constructor(private _http: HttpClient) {}

    async findAll(): Promise<CourseDTO[]> {
        return await this._http
            .get<CourseDTO[]>(`${this._api}/courses`)
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
