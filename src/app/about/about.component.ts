import { Component, OnInit } from '@angular/core';
import { ResourceGroups } from './resourcegroups';
import { AboutService } from "./about.service";


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  resourcegroups: ResourceGroups[];
  errorMessage: string;

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.GetResourceGroups();
    this.doNothing();
    console.log('test');
    console.log(this.resourcegroups);
  }

  public GetResourceGroups(): void {
    this.aboutService
      .getResourceGroups()
      .subscribe(resourcegroups => this.resourcegroups = resourcegroups,
      error => this.errorMessage = <any>error);
  }

  public doNothing() {
    var x = "";
  }
}
