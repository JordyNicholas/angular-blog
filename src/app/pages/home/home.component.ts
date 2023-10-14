import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input()
  photoCover: string=""

  @Input()
  cardTitle: string=""

  @Input()
  cardDescription: string=""

  private id: string | null = "0"

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.id = result.id
    this.cardTitle = result.title
    this.photoCover = result.photoCover
    this.cardDescription = result.description
  }
}
