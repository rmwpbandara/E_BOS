import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/_service/common.service';
import { UserService } from 'src/app/_service/custom/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private commonsService: CommonService, private auth: UserService) { }

  addAd(form_data: FormData) {
    return this.commonsService.apiPostMulti(form_data, 'advertiesment/add/' + this.auth.getLocalCurrentUserId());
  }

  viewAds() {
    return this.commonsService.apiGet('advertiesment/get/' + this.auth.getLocalCurrentUserId());
  }

  getAds() {
    return this.commonsService.apiGet('advertiesment/all');
  }

  delete(ad) {
    return this.commonsService.apiPost(ad, 'advertiesment/delete');
  }
}
