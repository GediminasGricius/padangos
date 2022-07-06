import { Component, OnInit } from '@angular/core';
import { Padanga } from 'src/app/models/padanga';
import { PadangosService } from 'src/app/services/padangos.service';

@Component({
  selector: 'app-padangos-list',
  templateUrl: './padangos-list.component.html',
  styleUrls: ['./padangos-list.component.css']
})
export class PadangosListComponent implements OnInit {

  public padangos:Padanga[]=[];
  public visoPadangu:number=0;
  public visoTipu:number=0;

  constructor(private padangosService:PadangosService) { }

  private uzkrautiPadangas(){
    this.padangosService.getPadangos().subscribe((response)=>{
      this.padangos=response;
      this.visoPadangu=0;
      this.visoTipu=0;
      this.padangos.forEach((padanga)=>{
        this.visoPadangu+=padanga.quantity;
        this.visoTipu++;
      })
    })
  }

  ngOnInit(): void {
    this.uzkrautiPadangas();
  }

  public deletePadanga(id:string|undefined){
    if (id!==undefined){
      this.padangosService.deletePadanga(id).subscribe(()=>{
        this.uzkrautiPadangas();
      });
    }
   
  }

}
