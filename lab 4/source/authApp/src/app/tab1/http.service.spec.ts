import { HttpService } from "./http.service";
import { TestBed, inject } from "@angular/core/testing";
import { HttpEvent, HttpEventType, HttpClient } from "@angular/common/http";

import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

// describe("httpservice", () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let httpService: HttpService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [HttpService]
//     });
//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//     httpService = new HttpService(httpClient);
//   });

//   it("exists", inject([httpService], (service: HttpService) => {
//     expect(service).toBeTruthy();
//   }));

//   describe("not null", () => {
//     it("returns valid data", () => {
//       httpService.getGenderData("paul").subscribe(x => {
//         expect(x["gender"]).toEqual("male");
//       });
//       const req = httpTestingController.expectOne(
//         "https://gender-api.com/get?name=Paul&key=CvBFLGUHzQFCgNbWHK"
//       );
//       expect(req.request.method).toEqual("GET");
//       req.flush({
//         gender: "male"
//       });
//       httpTestingController.verify();
//     });
//   });
// });

// let httpService = null;
// describe('getGenderByFirstName', () => {

//   let name = H

//   beforeEach(() => {
//     httpService = new HttpService();
//   });
//   it('should return gender', () => {
//       expect(1 + 1).toBe(2);
//   });

// });
