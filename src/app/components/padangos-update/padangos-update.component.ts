import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Padanga } from 'src/app/models/padanga';
import { PadangosService } from 'src/app/services/padangos.service';

@Component({
  selector: 'app-padangos-update',
  templateUrl: './padangos-update.component.html',
  styleUrls: ['./padangos-update.component.css']
})
export class PadangosUpdateComponent implements OnInit {

  public id:string;
  public mark:string="";
  public diameter:number=16;
  public quantity:number=0;

  constructor(
    private padangosService:PadangosService,
    private route:ActivatedRoute,
    private router:Router
  ) { 
    this.id=route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.padangosService.getPadanga(this.id).subscribe((response)=>{
      this.mark=response.mark;
      this.diameter=response.diameter;
      this.quantity=response.quantity;
    });
  }

  public updatePadanga(){
    let padanga=new Padanga(this.mark,this.diameter,this.quantity,this.id);
    this.padangosService.updatePadanga(padanga).subscribe(()=>{
      this.router.navigate(["/"]);
    })
  }

}
