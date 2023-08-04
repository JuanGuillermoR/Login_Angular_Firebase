import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/services/getdata.service';
import { MarvelApiService } from '../../../app/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  characters: any[] = [];

  constructor(
    private GetdataService: GetdataService,
    private marvelApiService: MarvelApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.marvelApiService.getCharacters().subscribe(data => {
      this.characters = data?.data?.results || [];
    });
  }

  onClick() {
    this.GetdataService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}


