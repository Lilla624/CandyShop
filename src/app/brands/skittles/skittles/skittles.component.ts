import { Component } from '@angular/core';

interface skittles {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-skittles',
  templateUrl: './skittles.component.html',
  styleUrls: ['./skittles.component.css']
})
export class skittlesComponent {
  skittles: skittles[] = [
    {
      nev: 'Jalapeño skittles',
      image: './assets/skittlesImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű skittles',
      image: './assets/skittlesImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres skittles',
      image: './assets/skittlesImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.skittles[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
