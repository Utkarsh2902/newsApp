import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  constructor(private api:ApiService){}
  p:any
resultArticles:any=[]
  ngOnInit(): void {
      this.api.newsHeadlines().subscribe((value)=>{
        console.log(value)
        this.resultArticles=value.articles;
      })
  }

}
