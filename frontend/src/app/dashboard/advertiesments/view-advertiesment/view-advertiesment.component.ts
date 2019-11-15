import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-view-advertiesment',
  templateUrl: './view-advertiesment.component.html',
  styleUrls: ['./view-advertiesment.component.scss']
})
export class ViewAdvertiesmentComponent implements OnInit {
  ads = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.viewAds().subscribe(val => {
      this.ads = JSON.parse(val['_body']);
    })
  }

  deleteAd(ad) {
    this.adService.delete(ad).subscribe(val => {
      this.ads.splice(this.ads.indexOf(ad), 1);
      console.log(val['_body']);
    })
  }

}
