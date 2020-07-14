import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user: User;
  posts: Post[];

  // constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(params => {
  //     userService.getUser(params.id).subscribe(value => this.user = value);
  //   });
  // }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private commentService: CommentService) {
    // console.log(this.router.getCurrentNavigation().extras.state.user);
    // console.log(history.state.user);
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state.user;
      this.postService.getPostsOfUser(this.user.id).subscribe(allPostsOfUser => {
        this.posts = allPostsOfUser;
        for (const post of allPostsOfUser) {
          commentService.getCommentsOfSinglePost(post.id).subscribe(value1 => console.log(value1));
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
