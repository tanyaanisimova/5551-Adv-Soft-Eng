import { Component } from '@angular/core';
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

export class NutritionComponent {
  food = '';
  nutrition: Nutrition;
  showNutrition = false;

  constructor(private httpService: HttpService) { }

  search() {
    if (this.food.trim() === '') {
      alert('Please enter a food to search.');
      return;
    }
    this.httpService.getNutrition(this.food).subscribe((data) => {
      if (data['hits'].length === 0) {
        alert('No results found for ' + this.food);

      } else {
        this.nutrition = {name: data['hits'][0].fields.item_name,
          calories: (data['hits'][0].fields.nf_calories === undefined ? '--'
            : data['hits'][0].fields.nf_calories + ' cal'),
          serving: (data['hits'][0].fields.nf_serving_weight_grams === null ? '--'
            : data['hits'][0].fields.nf_serving_weight_grams + ' g')};
        this.showNutrition = true;
        this.food = '';
      }
    });
  }
}


