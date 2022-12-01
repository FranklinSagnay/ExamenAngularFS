import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/app/intefaz/itodo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  lista: Itodo[] =[];
  tarea:Itodo;
  tareas:string="";
  
  constructor() { 
    this.tarea = {
      nombre: "",
      completado: false
    }
  }

  ngOnInit(): void {
  }


  guardarTarea(){
    this.lista.push(this.tarea);
    this.tarea = {
      nombre: "",
      completado: false
      
  }
  console.log("exitto");}
}
