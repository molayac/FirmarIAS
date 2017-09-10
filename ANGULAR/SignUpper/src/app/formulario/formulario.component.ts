import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
  } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  public myForm: FormGroup;
  public showForm:boolean=true;
  public step:number = 0;
  public tabs:any=[
    { activeTab: "active", activeContent: "tab-pane", name: "Datos Personales"},
    { activeTab: "", activeContent: "tab-pane", name: "Datos Empresariales"},
    { activeTab: "", activeContent: "tab-pane", name: "Páginas Web"}
  ];
  public image:any = "";

  constructor(private _fb: FormBuilder) { }


  tabClick(index){
    console.log("Index", index);
    for(let i =0; i< this.tabs.length; i++){
      if(i === index){
        this.tabs[index].activeTab = "active";
        this.tabs[index].activeContent = "tab-pane active";
        this.step = index;
        console.log("Active panel: ", index);
      }else{
        this.tabs[index].activeTab = "none";
        this.tabs[index].activeContent = "tab-pane";
      }
    }
  }
  nextStep(){
    if(this.step < 2)
      this.step = this.step + 1;
  }

  backStep(){
    if(this.step != 0)
      this.step = this.step - 1;
    
  }

  ngOnInit() {
    // the long way
    // this.myForm = new FormGroup({
    //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    //     address: new FormGroup({
    //         address1: new FormControl('', <any>Validators.required),
    //         postcode: new FormControl('8000')
    //     })
    // });

    // the short way
    this.myForm = this._fb.group({
        nombre: ['', [<any>Validators.required]],
        cargo: ['', [<any>Validators.required]],
        empresa: [''],
        celular: ['', [<any>Validators.required]],
        telefono: [''],
        direccion:[''],
        ciudad: [''],
        email: ['', [<any>Validators.required]],
        pais: [''],
        mapa: [null],
        linkedin:[''],
        facebook:[''],
        twitter:[''],
        web:[''],
        image:[null]
    });
  }

  noImagen(){
    this.myForm.value.image=null;
  }

  getFirma(data, valid){
    if(data.web != ''){
      if(data.web.indexOf("http://") == -1)
        this.myForm.value.web="http://"+data.web;
    }
    if(data.twitter != ''){
      if(data.twitter.indexOf("http://") == -1)
        this.myForm.value.twitter="http://"+data.twitter;
    }
    if(data.facebook != ''){
      if(data.facebook.indexOf("http://") == -1)
        this.myForm.value.facebook="http://"+data.facebook;
    }
    if(data.linkedin != ''){
      if(data.linkedin.indexOf("http://") == -1)
        this.myForm.value.linkedin="http://"+data.linkedin;
    }

  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
        reader.onload = (event) => {
        this.myForm.value.image = reader.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
