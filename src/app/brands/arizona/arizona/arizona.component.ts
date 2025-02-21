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
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/arizona/Arizona Cherry Lime Rickey 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/arizona/Arizona Frost Chillzicle 650ml.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/TKChili.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/TKCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Steak.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Puff.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/PrPap.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/PrBBQ.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/HotPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/HotCr.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/HotCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Chipito.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/ChiliCheese.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Chili.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Chedarpop.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/ChedarPf.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Chedar.jpg',
      ar: 600,
      darab: 1
    },
    {
      nev: 'Fűszeres arizona',
      image: './assets/arizona/Beef.jpg',
      ar: 600,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.arizona[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
