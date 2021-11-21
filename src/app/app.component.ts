import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Practice';
  dataFromParent = "this is data from parent"
  @ViewChild(ChildComponent) childVC : ChildComponent;

  childData=""
  childDataVC = ""

  fetchDataFromChild(val){
    this.childData = val;
  }
  ngAfterViewInit(){
    this.childDataVC = this.childVC.dataFromChildVC
  }

  constructor(){

  }

}
