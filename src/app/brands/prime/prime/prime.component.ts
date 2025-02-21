import { Component } from '@angular/core';

interface prime {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class primeComponent {
  prime: prime[] = [
    {
      nev: 'Jalapeño prime',
      image: './assets/primeImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű prime',
      image: './assets/primeImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres prime',
      image: './assets/primeImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.prime[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
