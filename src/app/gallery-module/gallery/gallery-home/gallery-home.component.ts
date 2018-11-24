import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})
export class GalleryHomeComponent implements OnInit {
  title = 'My Gallery';
  image = {
    url: "http://diarioveaonline.com/wp-content/uploads/2018/06/beautiful-hd-wallpapers-free-download-for-desktop-32.jpg",
  };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
  }

}
