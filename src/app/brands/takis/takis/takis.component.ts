import { Component } from '@angular/core';

interface takis {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-takis',
  templateUrl: './takis.component.html',
  styleUrls: ['./takis.component.css']
})
export class takisComponent {
  takis: takis[] = [
    {
      nev: 'Jalapeño takis',
      image: './assets/takisImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű takis',
      image: './assets/takisImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres takis',
      image: './assets/takisImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.takis[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
