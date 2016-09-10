import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
	selector: 'my-app',
	template: `
	          <div id="main">
	          <div id="logo_port">
	   		  <img src="NPS_Logo1.png" id="logo"/>
	   		  </div>
	          <nav id="navbar">
	  	          
	  	          <div class='nav_item'> <a routerLink="/home"        routerLinkActive="active"> Home         </a></div>
		          <div class='nav_item'> <a routerLink="/about"       routerLinkActive='active'> About </a>
		            <div class='sub_menu'>      
		              <div class='sub_menu_item'> <a routerLink="/about/horacio" routerLinkActive='active'> Horacio Nuguid </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/about/rosanna" routerLinkActive='active'> Rosanna Nuguid </a> </div>
		            </div>
		          </div>
		          <div class='nav_item'> <a routerLink="/admissions"  routerLinkActive="active"> Admissions   </a> </div>
	  	          <div class='nav_item'> <a routerLink="/alumni"      routerLinkActive="active"> Alumni       </a> </div>
		          <div class='nav_item'> <a routerLink="/calendar"    routerLinkActive="active"> Events       </a> </div>
		          <div class='nav_item'> <a routerLink="/forStudents" routerLinkActive="active"> For Students </a> 
		            <div class='sub_menu'>      
		              <div class='sub_menu_item'> <a routerLink="/alumni" routerLinkActive='active'> Rosanna's Teaching Schedule </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/forStudents/hcalendar" routerLinkActive='active'> Horacio's Teaching Schedule </a> </div>
		              <div class='sub_menu_item'> <a routerLink="/alumni" routerLinkActive='active'> Important Resources </a> </div>
                      <div class='sub_menu_item'> <a routerLink="/alumni" routerLinkActive='active'> Standard Fingerings </a> </div>
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