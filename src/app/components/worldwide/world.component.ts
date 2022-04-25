import { Component, OnInit } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldComponent implements OnInit {

  worldWideData:any
  fatality:number=0
  constructor(private service:WorldService) { }

  ngOnInit(): void {

    this.service.getTotal().subscribe(data=>{
      this.worldWideData=data
      this.fatality=this.worldWideData.deaths/this.worldWideData.confirmed
    })
  }

}
