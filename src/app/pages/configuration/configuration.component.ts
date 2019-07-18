import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as fields from '../../config/configFields';
import { Configuration } from '../../interfaces/configuration';
import { DropdownService } from '../../services/dropdown.service';
import { map } from 'rxjs/operators';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [``]
})
export class ConfigurationComponent implements OnInit {
  objectParam;
  object: Configuration;
  model = {};
  selects = [];
  form: Object;
  features = [];

  optionsSelect: Array<any>;

  constructor(private activateRouter: ActivatedRoute,
              private dropdown: DropdownService,
              private configService: ConfigurationService) {

    this.activateRouter.params.subscribe(value => {
      console.log(value);
      this.objectParam = value.object;
      this.object = fields[this.objectParam];

      if (this.object.select) {
        for (const i of this.object.select) {
          this.dropdown.getData(i.name).subscribe((value1: any[]) => {
            this.selects.push({name: i.name, values: value1.map(value2 => value2)});
          });
        }
      }

      console.log('select', this.selects);
      for (const i in this.object.inputs) {
        const input = this.object.inputs[i].name;
        // console.log('i', this.object.inputs[i].name);
        this.model[`${input}`] = null;
      }
      console.log('model', this.model);
    });
  }

  ngOnInit(): void {
    this.configService.show(this.object.url);
  }

  send(forma: NgForm) {
    this.configService.register(this.object.url, forma.value).subscribe(value => console.log(value));
  }

}
