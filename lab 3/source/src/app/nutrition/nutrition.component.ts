import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

interface Nutrition {
  name: string;
  calories: string;
  serving: string;
}

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})

export class NutritionComponent implements OnInit {
  food = '';
  nutrition: Nutrition;
  showNutrition = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void { }

  search() {
    this.httpService.getNutrition(this.food).subscribe((data) => {
      console.log(data)
      if (data['hits'].length === 0) {
        this.showNutrition = false;
        alert('No results found for ' + this.food);
      } else {
        this.nutrition = {name: data['hits'][0].fields.item_name,
          calories: data['hits'][0].fields.nf_calories,
          serving: (data['hits'][0].fields.nf_serving_weight_grams === null ?
            data['hits'][0].fields.nf_serving_weight_grams : 'n/a')};
        // example: chick
        this.showNutrition = true;
        this.food = '';
      }
    });
  }
}
