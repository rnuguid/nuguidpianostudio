import { Component } from '@angular/core';

@Component({
	selector: 'about',
	template: '<h2> About Us </h2>'
})
export class AboutComponent { }

@Component({
	selector: 'horacio',
	template: `
	<div class="bio" id="h_bio">
    <h1>Dr. Horacio Nuguid </h1>
    <img src='a.jpg'/>
  <p>
  As founder and artistic director of the Rochester Chamber Music Society, Nuguid performs regularly both as soloist and collaborator with distinguished artists and ensembles in the region. He formed the Odelia Piano Trio which became Classical MPR's Artist in Residence for the city of Rochester in 2014. </p>
  <p>
  Born in Manila, Horacio Nuguid began formal music training at the University of Santo Tomas Conservatory of Music and later was awarded the top prize at the National Music Competition for Young Artists in the Philippines. He continued his music studies in the United States and completed the Master of Music Degree at the University of Northern Iowa and the Doctor of Musical Arts Degree at the University of Illinois in Urbana-Champaign. Last year, he went on tour to the Philippines and Mexico presenting recitals and masterclasses at the University of Santo Tomas in Manila, Children's Integrated School in Iloilo City and Centro Cultural Ollin Yoliztli in Mexico City. Dr. Nuguid has served as a member of the Artist Faculty of the festival since 2002. 
  </p>
</div>`
})
export class HoracioComponent {}


@Component({
	selector: 'rosanna',
	template: `
	<div class="bio" id="r_bio">
  <h1>
  Mrs. Rosanna Nuguid
  </h1>
  <img src="ros.jpg"/>
  <p>  Insert biography here
  </p>
</div>`
})
export class RosannaComponent {

}