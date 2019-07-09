import { Component, KeyValueDiffers } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
   styles: [`
   .ng-invalid.ng-touched:not(form){
     border : 1px solid red;
   }
   `]
})
export class TemplateComponent  {

 usuario : Object = {
     nombre:'',
     apellido:'',
     correo:''
 }

  constructor() { }

  onSubmit  (forma:NgForm){

    console.log("Ng-Form",forma);
    console.log('valor', forma.value);
    console.log('usuario', this.usuario);
    
    }

}
