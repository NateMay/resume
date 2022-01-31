import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'algolia',
  templateUrl: './algolia.html',
  styleUrls: ['./algolia.scss']
})
export class AlgoliaComponent implements OnInit {
  config = {
    apiKey: 'a1cc78476d92b73185b46aa3121db228',
    appId: 'OB2L36C5AS',
    indexName: 'dev_dietstats',
    routing: false
  }

  sortItems = [
    { name: 'instant_search', label: 'Most relevant' },
    { name: 'instant_search_price_asc', label: 'Lowest price' },
    { name: 'instant_search_price_desc', label: 'Highest price' }
  ]

  ingredients = [
    {
      name: 'Omelet, Ham, Cheese',
      portion: '275 grams',
      imgSrc:
        'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/52/64/99/0SjpEWURRzKZt1avUq9h_omlet.jpg'
    },
    {
      name: 'Bacon, Pork',
      portion: '3 strips (80g)',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png'
    },
    {
      name: 'Potato, Red',
      portion: '1 medium (3.5" - 4.5")',
      imgSrc:
        'https://images-na.ssl-images-amazon.com/images/I/614ZfThP3kL._SX679_.jpg'
    }
  ]

  days = [29, 30, 31]
    .concat([...Array(30).keys()].map((i) => i + 1))
    .concat([1, 2])
  constructor() {}

  ngOnInit(): void {}
}
