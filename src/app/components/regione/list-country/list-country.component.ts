import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-regional-list',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css'],
})
export class ListCountryComponent implements OnInit, OnChanges {
  @Input('data') regionName = '';
  region: Region[] = [];


  constructor(private regionservice: CountryService) {}

  ngOnInit(): void {
    this.defaultRegion();
  }
  ngOnChanges() {
    this.showRegionOnChange();
  }

  defaultRegion() {
    this.regionservice.getDataByRegion('VN').subscribe((re) => {
      this.region = re;
      this.region[0].fatal =
        (this.region[0]?.deaths / this.region[0]?.confirmed) * 100;
    });
  }

  showRegionOnChange() {
    this.regionservice.getDataByRegion(this.regionName).subscribe((re) => {
      this.region = re;
      this.region[0].fatal = this.region[0]?.deaths / this.region[0]?.confirmed;

    });
  }


}
