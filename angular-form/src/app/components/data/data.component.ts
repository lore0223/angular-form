import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { setTimeout } from 'timers';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {

    forma:FormGroup;

  constructor() {

    this.forma = new FormGroup({
      'nombre': new FormControl('',   [
                                       Validators.required,
                                       Validators.minLength(3)
                                      ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('',   [
                                      Validators.required, 
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                      ]),
      'pasatiempos': new FormArray ([
        new FormControl ('correr', Validators.required)
      ]),
      'username'  : new FormControl('', Validators.required, this.existeUsuario),
      'password1' : new FormControl('', Validators.required),
      'password2' : new FormControl()

    })


    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma)//bind se utiliza para asignarle un valor a this. Es decir cuando la vuelvo a utilizar, this valdrá this.forma.
    ])
   }

   guardarCambios(){
     console.log(this.forma.value);

     this.forma.reset({
       nombre :  '',
       apellido: '',
       correo:   ''
     })
     
   }

   agregarPasatiempo(){  
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('', Validators.required)
     )
   }

   noIgual( control: FormControl) : {[s:string]:boolean}{

    let forma:any = this;

    if (control.value !== forma.controls['password1'].value){
        
      return{
        noiguales:true
      }
    }
  return null
   }
   
    //  existeUsuario ( control : FormGroup) : Promise<any>|Observable<any>{

    //   let promesa = new Promise(

    //     (resolve, reject) =>{
          
    //       setTimeout( () =>{

    //         if( control.value === "strider"){
    //           resolve ({existe : true})
    //         }
    //         else {
    //           resolve( null )
    //         }
    //       }, 3000)
    //     }
    //   );
    
    //   return promesa;

    //  }



}
