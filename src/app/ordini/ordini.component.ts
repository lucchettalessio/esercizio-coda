import { Component } from '@angular/core';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent {

  prossimo: string[] = [];

  ultimoCliente = 0;

  elementiMax = 10;

  ultimoTicketFormattato = '000';

  coda: string[] = [];

  staccaTicket() {
    this.ultimoCliente++;
    this.generaTicketFormattato();
    this.aggiungiTicketAllaCoda();
    console.log(this.coda);
  };

  gestisciCoda(){
    const primoElementoCoda = this.coda.shift();

    if (primoElementoCoda !== undefined){
      this.prossimo.unshift(primoElementoCoda);
    }

    if (this.prossimo.length >= this.elementiMax) {
      this.prossimo.splice(this.elementiMax)
    }
  }
    
  private generaTicketFormattato() {

    let res = this.ultimoCliente.toString();

    if (this.ultimoCliente < 10) 
    {
      res = '00' + res;
    } 
    else if (this.ultimoCliente < 100) 
    {
      res = '0' + res
    }

    this.ultimoTicketFormattato = res;

  };

  private aggiungiTicketAllaCoda() {
    this.coda.push(this.ultimoTicketFormattato);
  }
  
}
