import { Component } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

@Component({
	selector: 'my-app',
	template: `
	          <div id="main">
	          <div id="logo_port">
	   		  <img src="assets/img/nps-logo-1.png" id="logo"/>
	   		  </div>
	          <nav id="navbar">
	  	          
	  	          <div class='nav_item'> <a routerLink="/home"        routerLinkActive="active"> Home         </a></div>
		          <div class='nav_item'> <a> About </a>
		            <div class='sub_menu'>      
		              <div class='sub_menu_item'> <a routerLink="/horacio" routerLinkActive='active'> Horacio Nuguid </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/rosanna" routerLinkActive='active'> Rosanna Nuguid </a> </div>
		            </div>
		          </div>
		          <div class='nav_item'> <a routerLink="/admissions"  routerLinkActive="active"> Admissions   </a> </div>
	  	          <div class='nav_item'> <a routerLink="/under-construction"  routerLinkActive="active"> Alumni       </a> </div>
		          <div class='nav_item'> <a routerLink="/events"    routerLinkActive="active"> Events       </a> </div>
		          <div class='nav_item'> <a> For Students </a> 
		            <div class='sub_menu'>      
		              <div class='sub_menu_item'> <a routerLink="/under-construction" routerLinkActive='active'> Rosanna's Teaching Schedule </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/horacio-calendar" routerLinkActive='active'> Horacio's Teaching Schedule </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/under-construction" routerLinkActive='active'> Important Resources </a> </div>
                      <div class='sub_menu_item'> <a routerLink="/under-construction" routerLinkActive='active'> Standard Fingerings </a> </div>
		            </div>
		          </div>
	          </nav> 
	          <div id="main_body">
	          <router-outlet></router-outlet>       
	          </div>
	          <div id="bottom-bar"> <p id="cr"> Copyright &copy; 2016 Nuguid Piano Studio - All rights reserved </p> </div>
	          </div>`
})
export class AppComponent { } 