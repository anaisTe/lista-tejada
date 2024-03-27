import { Component } from '@angular/core';

interface AlumniData {
  name: string;
  lastName: string;
  faculty: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //date
  fecha = Date.now();
  
  negocios_img:string = 'assets/img/business.svg';
  medicina_img:string = 'assets/img/plus-heart.svg';
  ingenieria_img:string = 'assets/img/mit.svg';
  arq_img:string = 'assets/img/anchor.svg';
  derecho_img:string = 'assets/img/law-building.svg';
  comu_img:string = 'assets/img/megaphone.svg';

  setIcon(ico: string) {
    switch (ico) {
      case 'Medicina':
        return this.medicina_img;
      case 'Ingeniería':
        return this.ingenieria_img;
      case 'Comunicaciones':
        return this.comu_img;
      case 'Negocios':
        return this.negocios_img;
      case 'Arquitectura':
        return this.arq_img;
      default:
        return this.derecho_img;
    }
  }

  setTagColor(color: string) {
    switch(color) {
      case 'Activo':
        return 'color-green';
      case 'Retirado':
        return 'color-red';
      default:
        return 'color-blue';
    }
  }

  Estudiantes: AlumniData[] = [
    {lastName: 'Test1', name: 'User 1', faculty: 'Medicina', status: 'Retirado'},
    {lastName: 'Test2', name: 'User 2', faculty: 'Ingeniería', status: 'Activo'},
    {lastName: 'Test3', name: 'User 3', faculty: 'Comunicaciones', status: 'Activo'},
    {lastName: 'Test4', name: 'User 4', faculty: 'Negocios', status: 'Retirado'},
    {lastName: 'Test5', name: 'User 5', faculty: 'Arquitectura', status: 'Nuevo'},
    {lastName: 'Test6', name: 'User 6', faculty: 'Derecho', status: 'Activo'},
    {lastName: 'Test7', name: 'User 7', faculty: 'Medicina', status: 'Retirado'},
    {lastName: 'Test8', name: 'User 8', faculty: 'Ingeniería', status: 'Nuevo'},
    {lastName: 'Test9', name: 'User 9', faculty: 'Comunicaciones', status: 'Activo'},
    {lastName: 'Test10', name: 'User 10', faculty: 'Negocios', status: 'Nuevo'},
    {lastName: 'Test11', name: 'User 11', faculty: 'Arquitectura', status: 'Activo'},
    {lastName: 'Test12', name: 'User 12', faculty: 'Derecho', status: 'Nuevo'},
  ];
}
