import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-regione',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  list!: [];
  listName!: any[];
  listRegion!: any[];
  op: any;
  selectedReg = 'VN';
  constructor(private regionservice: CountryService) {}

  ngOnInit(): void {
    this.getRegion();

  }

  getRegion() {
    this.regionservice.getAllRegion().subscribe((reg) => {
      this.list = reg;
      this.dataSelection();
    });
  }

  dataSelection() {
    this.listName = this.list.filter((item: any) => {
        return Boolean(item.countrycode);
    });

    this.regionservice.allRegion=this.listName;

    this.listRegion = this.listName.filter(
      (item: any, index: any, arr: any) => {
        return (
          arr.findIndex((t: any) => t.countryregion == item.countryregion) ===
          index
        );
      }
    );
  }
}
