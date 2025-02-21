import { Component } from '@angular/core';

interface fanta {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-fanta',
  templateUrl: './fanta.component.html',
  styleUrls: ['./fanta.component.css']
})
export class fantaComponent {
  fanta: fanta[] = [
    {
      nev: 'Jalapeño fanta',
      image: './assets/fantaImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű fanta',
      image: './assets/fantaImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres fanta',
      image: './assets/fantaImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.fanta[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
