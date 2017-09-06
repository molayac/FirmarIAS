import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cargos:any;
  title = 'app';

  constructor(){
    cargos = this.setCargos();

  }

  private setCargos(){
    return ["- Seleccione -",
  "Arquitecto de Soluciones de Software", 
  "Aprendiz de Desarrollo de Software", 
  "Asistente Administrativo", 
  "Desarrolladora de Negocios", 
  "Desarrollador de Software", 
  "Desarrollador de Software Experto", 
  "Gerente de Operaciones", 
  "Líder de Gestión Humana", 
  "Líder de Proyectos", 
  "Gerente General"];
  }
}
