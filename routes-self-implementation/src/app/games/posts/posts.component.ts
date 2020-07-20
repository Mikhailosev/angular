import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  post: { id: number; rating: string };
  related: { id: number; rating: string } = {
    id: 23232,
    rating: 'b',
  };
  ngOnInit(): void {
    const id = 'id';
    const rating = 'rating';
    console.log(this.activatedRoute.snapshot.params.id);
    this.post = {
      id: this.activatedRoute.snapshot.params['id'],
      rating: this.activatedRoute.snapshot.params['rating'],
    };
    console.log(this.post);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post.id = params[id];
      this.post.rating = params[rating];
    });
  }
}
