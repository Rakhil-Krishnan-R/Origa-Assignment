import { Component, OnInit } from '@angular/core';
import { userInfo } from '../interface/data';
import { DataFetchService } from '../service/data-fetch.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  users: userInfo[];
  user: userInfo;
  public piedata: Object[];
  public legendSettings: Object;
  name: String;
  email: String;
  username: String;

  percentage;
  constructor(private service: DataFetchService) { }

  ngOnInit(): void {
    this.getUsersInfo();
    this.getId(1);
  }
  getUsersInfo() {
    this.service.getData().toPromise().then(res => {
      this.users = res;
      this.percentage = (this.users.length / 100) * 100
    })

  }
  getId(id) {
    this.service.getIdData(id).toPromise().then(res => {
      this.name = res.name;
      this.email = res.email;
      this.username = res.username;
      this.piedata = this.pieChart(res);
    })
    // this.piedata = this.pieChart(this.user);
  }

  pieChart(userInfo) {
    const { lat, lng } = userInfo.address.geo;

    let latLabel: String;
    let lngLabel: String;

    if (lat > 0) {
      latLabel = 'Latitude > 0'
    } else {
      latLabel = 'Latitude < 0'
      console.log(lat)
    }

    const latData = { x: latLabel, y: parseInt(lat) }

    if (lng > 0) {
      lngLabel = 'Longitude > 0'
    } else {
      lngLabel = 'Longitude < 0'
      console.log(lng)

    }
    const lngData = { x: lngLabel, y: parseInt(lng) }



    return [latData, lngData]
  }


}
