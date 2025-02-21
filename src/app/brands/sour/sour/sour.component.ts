import { Component } from '@angular/core';

interface sour {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-sour',
  templateUrl: './sour.component.html',
  styleUrls: ['./sour.component.css']
})
export class sourComponent {
  sour: sour[] = [
    {
      nev: 'Jalapeño sour',
      image: './assets/sourImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű sour',
      image: './assets/sourImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres sour',
      image: './assets/sourImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.sour[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
