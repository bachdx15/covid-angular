import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  showOrHide=true
  constructor(private regionSer: CountryService) {}

  ngOnInit(): void {

  }
  toggleShow(){
    this.showOrHide=!this.showOrHide
  }

}
