import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  loadLink() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    console.log(this.activatedRoute);
  }
}
