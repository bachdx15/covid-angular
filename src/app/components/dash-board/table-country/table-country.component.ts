import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.css'],
})
export class TableCountryComponent implements OnInit {
  label = 'confirmed';
  top20Countries: Country[] | any;
  CountriesByPage: Country[] | any;
  startIndex:number=0;
  endIndex:number=10;
  constructor(private regionSer: CountryService) {}

  ngOnInit(): void {
    this.top20CountriesByKey('confirmed')
  }

  top20CountriesByKey(key: keyof Country) {
    this.regionSer.getAllCountry().subscribe((countries) => {
      let allCountries
    allCountries = countries;
      allCountries.sort((a: any, b: any) => {
        return a[key] - b[key];
      });
      this.top20Countries = allCountries.slice(
        allCountries.length - 20

      ).reverse();
      let position=1;
      for(let country of this.top20Countries){
        country.top=position;
        position++;
      }
      this.CountriesByPage= this.top20Countries.slice(this.startIndex,this.endIndex);
    });

  }

  onPageChange(ev: PageEvent) {
    this.startIndex = ev.pageIndex * ev.pageSize;
    this.endIndex = this.startIndex + ev.pageSize;
    if (this.endIndex > this.top20Countries?.length) {
      this.endIndex = this.top20Countries.length;
    }
    this.CountriesByPage = this.top20Countries.slice(this.startIndex,this.endIndex);

  }

  showConfirmed() {
    this.label = 'confirmed';
    this.top20CountriesByKey('confirmed')
  }
  showRecovered() {
    this.label = 'recovered';
    this.top20CountriesByKey('recovered')

  }
  showDeaths() {
    this.label = 'deaths';
    this.top20CountriesByKey('deaths')
}
}
