import { Component } from '@angular/core';

interface nerds {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-nerds',
  templateUrl: './nerds.component.html',
  styleUrls: ['./nerds.component.css']
})
export class nerdsComponent {
  nerds: nerds[] = [
    {
      nev: 'Jalapeño nerds',
      image: './assets/nerdsImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű nerds',
      image: './assets/nerdsImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres nerds',
      image: './assets/nerdsImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.nerds[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
