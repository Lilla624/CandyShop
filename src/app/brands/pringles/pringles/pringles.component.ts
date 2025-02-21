import { Component } from '@angular/core';

interface pringles {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-pringles',
  templateUrl: './pringles.component.html',
  styleUrls: ['./pringles.component.css']
})
export class pringlesComponent {
  pringles: pringles[] = [
    {
      nev: 'Jalapeño pringles',
      image: './assets/pringlesImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű pringles',
      image: './assets/pringlesImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres pringles',
      image: './assets/pringlesImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.pringles[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
