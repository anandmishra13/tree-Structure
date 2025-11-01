import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

interface Tree {
  [key: string]: string[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly input: Tree = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f', 'g'],
    e: ['h', 'i'],
    f: ['j', 'k'],
  };

  public getRoot() {
    const allChild = new Set<string>();

    Object.values(this.input).forEach(children => {
      children.forEach(child => allChild.add(child));
    })

    const root = Object.keys(this.input).find(key => !allChild.has(key));
    console.log(allChild, root);

    return root;
  }
 }
