import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import * as fields from '../../config/configFields';
import {Configuration} from '../../interfaces/configuration';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  objectParam;
  object: Configuration;

  form: FormGroup;
  features = [];

  constructor(private activateRouter: ActivatedRoute) {
    this.activateRouter.params.subscribe(value => {
      console.log(value);
      this.objectParam = value.object;
      this.object = fields[this.objectParam];
    });

    // for (const i in this.object) {
    //   this.features.push(i);
    // }
    console.log(this.object);
  }

  ngOnInit() {
  }

  clearForm() {
    this.form.reset();
  }

}
