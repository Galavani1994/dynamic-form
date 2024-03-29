import {Component, OnInit} from '@angular/core';
import {ControlBase} from "./controls/control-base";
import {DataService} from "./data.service";
import {MetaService} from "./meta.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form-app';
  meta: ControlBase[]=[];
  data!: any;

  constructor(private metaService: MetaService, private dataService: DataService) {
    this.refresh();
  }

  ngOnInit() {
    console.log(this.data);
    /*this.refresh();*/
  }

  refresh() {
    this.dataService.getData().subscribe(a => {
      this.data = a;
    });
    this.metaService.getMeta().subscribe(a => {
      this.meta = a;
    });
  }
}
