import { Component } from '@angular/core';

interface Arizona {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.css']
})
export class ArizonaComponent {
  arizona: Arizona[] = [
    {
      nev: 'Jalapeño arizona',
      image: './assets/arizonaImg/TKZombie.jpg',
      ar: 500,
      darab: 1
    },
    {
      nev: 'BBQ ízű arizona',
      image: './assets/arizonaImg/TKWaves.jpg',
      ar: 550,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/TKNitro.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/TKFajita.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/TKChili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizonaImg/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.arizona[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
