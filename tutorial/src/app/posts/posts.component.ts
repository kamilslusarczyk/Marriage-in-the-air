import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });

    // var chris = new User({
    //   name: 'Chris',
    //   username: 'sevilayha',
    //   password: 'password' 
    // });

    chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
  }

}
