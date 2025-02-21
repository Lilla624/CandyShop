import { Component } from '@angular/core';

interface bazooka {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-bazooka',
  templateUrl: './bazooka.component.html',
  styleUrls: ['./bazooka.component.css']
})
export class bazookaComponent {
  bazooka: bazooka[] = [
    {
      nev: 'Jalapeño bazooka',
      image: './assets/bazookaImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű bazooka',
      image: './assets/bazookaImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres bazooka',
      image: './assets/bazookaImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.bazooka[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
