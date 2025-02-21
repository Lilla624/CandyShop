import { Component } from '@angular/core';

interface ghost {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class ghostComponent {
  ghost: ghost[] = [
    {
      nev: 'Jalapeño ghost',
      image: './assets/ghostImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű ghost',
      image: './assets/ghostImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres ghost',
      image: './assets/ghostImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.ghost[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
