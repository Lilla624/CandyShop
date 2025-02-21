import { Component } from '@angular/core';

interface warheads {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-warheads',
  templateUrl: './warheads.component.html',
  styleUrls: ['./warheads.component.css']
})
export class warheadsComponent {
  warheads: warheads[] = [
    {
      nev: 'Jalapeño warheads',
      image: './assets/warheadsImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű warheads',
      image: './assets/warheadsImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres warheads',
      image: './assets/warheadsImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.warheads[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
