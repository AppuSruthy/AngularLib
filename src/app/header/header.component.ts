import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   nav =  [
    {link:'/signup',name:'Sign Up'},
    {link:'/login',name:'Login'},
    {link:'/books',name:'books'},
    {link:'/authors',name:'Authors'},
    
    {link:'/admin',name:'Add Book'},
{link:'/admin/author',name:'Add Author'},
{link:'/',name:'Logout'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
