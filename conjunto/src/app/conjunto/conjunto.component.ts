import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.css']
})
export class ConjuntoComponent implements OnInit {

  public form: FormGroup;

  public entrada: string;
  public saida: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      entrada: ['', Validators.required],
      saida: ['', Validators.required]
    });
  }

  /**
   * Metodo para ordenar o conjunto e ordem crescente.
   * @param a
   * @param b
   */
  ordenaNumber = function (a: number, b: number) {
    return a - b;
  }

  /**
   * Metodo para tratar os dados digitados pelo usuario.
   * @param entrada
   */
  resultado(entrada) {
    let entradaFormatada = this.entrada.split(' ');
    let arrayTemporario: any = [];
    let itemFinal: any = [];

    for (let i = 0; i <= entradaFormatada.length - 1; i++) {
      if (entradaFormatada[i]) {
        arrayTemporario = parseInt(entradaFormatada[i]);
        if (arrayTemporario <= 1000 && arrayTemporario >= -1000 && !itemFinal.includes(arrayTemporario)) {
          itemFinal.push(arrayTemporario);
          itemFinal.sort(this.ordenaNumber);
        }
      }
    }
    this.saida = itemFinal.toString().split(',').join(' ');

  }

  /**
   * Metodo para limpar os dados do formulario.
   */
  limpar() {
    this.form.reset();
  }

  ngOnInit() {
  }

}
