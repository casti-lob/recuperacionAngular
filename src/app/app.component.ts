import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primerProyecto';
  initialValue:number =0;
  increment:number =1;
  result:number=0;
 
  minioms =[
    {
      name: "Kevin",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/kevin.jpg",
      birth: "1951",
      side:"de los buenos"
    },
    {
      name: "Josua",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/Josua.jpg",
      birth: "1672",
      side:"malvado"
    },
    {
      name: "Dave",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/dave.jpg",
      birth: "1723",
      side: "de los buenos"
    },
    {
      name: "Mudito",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/mudito.jpeg",
      birth: "1379",
      side:"de los buenos"
    },
    {
      name: "Llongueras",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/llongueras.jpg",
      birth: "1687",
      side: "malvado"
    },
    {
      name: "Minioncé",
      bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
      img: "assets/img/minionce.jpg",
      birth: "1976",
      side: "de los buenos"
    },
    {
      name: "Lobeznion",
      bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
      img: "assets/img/lobeznion.jpg",
      birth: "2017",
      side: "malvado"
    },
    {
      name: "Minion Presley",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/minion-presley.jpg",
      birth: "2017",
      side: "malvado"
    }
];


 /*Ejercicio Minions */

minionsBase = this.minioms;
  search(filtro:String){
    
    this.minioms= this.minionsBase
    this.minioms=this.minioms.filter(miniom=>{
      return miniom.name.toLowerCase()== filtro.toLowerCase();
    })
  }
 /*Ejercicio Minions */

empleados=[
  {
    "nombre": "John",
    "apellido": "Doe",
    "cargo": "Desarrollador",
    "departamento": "Tecnología"
  },
  {
    "nombre": "Jane",
    "apellido": "Smith",
    "cargo": "Diseñadora",
    "departamento": "Diseño"
  },
  {
    "nombre": "Robert",
    "apellido": "Johnson",
    "cargo": "Gerente de Proyecto",
    "departamento": "Administración"
  },
  {
    "nombre": "Emily",
    "apellido": "Davis",
    "cargo": "Analista de Datos",
    "departamento": "Tecnología"
  }
]
newUser:String ="";
password:String="";

totalEvent(newTotal:any){
  this.result=newTotal;
}
showName(ne:any){
  console.log(ne)
  console.log(`El usuario: ${ne}`)
}
showPassword(pass:any){
  console.log(`Contraseña: ${pass}`)
}

empleadosBase = this.empleados

filtrar(filtro:String){
  
  this.empleados=this.empleadosBase
  this.empleados = this.empleados.filter(empleado =>{
    return empleado.nombre.toLowerCase()==filtro.toLowerCase()
  })
}

}

