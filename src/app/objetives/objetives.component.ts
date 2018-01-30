import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ConexionService } from '../servers/conexion.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.css']
})

export class ObjetivesComponent  {

  constructor(public con : ConexionService) {}
  objetive = { date: null, docURL: null, percentage: null}; 
  trimestre = { mes1 : null, mes2: null, mes3 : null};
  public now: Date = new Date();
  public year = this.now.getFullYear();
  public month = this.now.getMonth() + 1;
  public fecha = "";
  public trimestreInicio;
  public drive = "#";
  public trimestreActual;
  public lenObjecte = 0;
  public total = 0;
  public meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public trimestres = ['Enero - Marzo', 'Abril - Junio', 'Julio - Septiembre', 'Octubre - Diciembre'];
 
  ngOnInit() {
    this.fechaActual();
    this.ObtenerTrimestre();
  }

  ObtenerTrimestre(){
    for(let i = 0;  i < 3; i++)
    {
      this.fecha = (this.trimestreInicio + i )+ '/' + this.year;
      this.con.getObjective("luis.paredes@dsindigo.com",this.fecha, function (res) {
        if (res != null)
        {
          this.objetive = res;
          let tri = this.objetive.percentage;
          let total = this.objetive.total;
          let drive = this.objetive.docURL;
          if (i == 0)
            this.trimestre.mes1 = parseFloat(tri);
          else if (i == 1)
            this.trimestre.mes2 = parseFloat(tri);
          else if (i == 2)
            this.trimestre.mes3 = parseFloat(tri); 
          this.lenObjecte++;
          this.total = total;
          this.drive = drive;
        }
        else{
          if (i == 0)
          this.trimestre.mes1 = "No Asig.";
          if (i == 1)
          this.trimestre.mes2 = "No Asig.";
          if (i == 2)
          this.trimestre.mes3 = "No Asig.";
        }
      }.bind(this));
    }
  }

  

  fechaActual()
  {
    if (this.month >= 1 && this.month <= 3)
      {this.trimestreInicio = 1;this.trimestreActual = 1;}
    else if (this.month >= 4 && this.month <= 6)
      {this.trimestreInicio = 4;this.trimestreActual = 2;}
    else if (this.month >= 7 && this.month <= 9)
      {this.trimestreInicio = 7;this.trimestreActual = 3;}
    else
      {this.trimestreInicio = 10;this.trimestreActual = 4;}
  }

  cambiarTrimestre(flag){
    this.lenObjecte = 0;
    this.trimestre.mes1 = null;
    this.trimestre.mes2 = null;
    this.trimestre.mes3 = null;
    this.total = 0;
    this.drive = "#";
    if (flag == 1)
    {
      if (this.trimestreActual >= 4) {
        this.trimestreActual = 1;
        this.year++;
        // this.month = 1;
      }
      else
       this.trimestreActual++;
    }
    else
    {
      if (this.trimestreActual <= 1) {
        this.trimestreActual = 4;
        this.year--;
        // this.month = 1;
      }
      else
       this.trimestreActual--;
    }
    
    if (this.trimestreActual == 1)
      this.trimestreInicio  = 1;
    if (this.trimestreActual == 2)
      this.trimestreInicio  = 4;
    if (this.trimestreActual == 3)
      this.trimestreInicio  = 7;
    if (this.trimestreActual == 4)
      this.trimestreInicio  = 10;
    this.ObtenerTrimestre();
  }

  cambiarAno(flag){
    this.lenObjecte = 0;
    this.trimestre.mes1 = null;
    this.trimestre.mes2 = null;
    this.trimestre.mes3 = null;
    this.total = 0;
    this.drive = "#";
    if (flag == 1)
      this.year++;
    else
      this.year--;    
    this.ObtenerTrimestre();
  }

}
