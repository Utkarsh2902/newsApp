import { Component,OnInit } from '@angular/core';
import { ApitwoService } from '../service/apitwo.service';
@Component({
  selector: 'app-pastnews',
  templateUrl: './pastnews.component.html',
  styleUrls: ['./pastnews.component.css']
})
export class PastnewsComponent implements OnInit {
  constructor(private api:ApitwoService){}
  p:any
resultArticles:any=[]
  ngOnInit(): void {
      this.api.newsHeadlines().subscribe((value)=>{
        console.log(value)
        this.resultArticles=value.articles;
      })
  }

}
