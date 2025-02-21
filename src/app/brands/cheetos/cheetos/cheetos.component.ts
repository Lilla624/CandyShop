import { Component } from '@angular/core';

interface cheetos {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-cheetos',
  templateUrl: './cheetos.component.html',
  styleUrls: ['./cheetos.component.css']
})
export class cheetosComponent {
  cheetos: cheetos[] = [
    {
      nev: 'Jalapeño cheetos',
      image: './assets/cheetosImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű cheetos',
      image: './assets/cheetosImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres cheetos',
      image: './assets/cheetosImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.cheetos[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
