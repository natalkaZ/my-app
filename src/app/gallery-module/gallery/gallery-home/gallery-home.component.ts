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
    url: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg",
  };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
  }

}
