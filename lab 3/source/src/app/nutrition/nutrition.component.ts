import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  nutrition = {}

  constructor(private httpService: HttpService) { }

  ngOnInit(): void { }

  searchNutrition() {
    this.httpService.getNutrition().subscribe((data) => {
      console.log(data);
      if (data['hits'].length === 0) {
        alert('no result');
      } else {
        this.nutrition = {calories: data['hits'][0].fields.nf_calories, serving: data['hits'][0].fields.nf_serving_weight_grams};
        console.log(this.nutrition);
      }
    });
  }

}
