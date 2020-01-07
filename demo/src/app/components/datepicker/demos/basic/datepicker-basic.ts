import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker-basic.html',
  providers: [NgbDatepickerConfig]
})
export class NgbdDatepickerBasic {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar, config: NgbDatepickerConfig) {
    config.navigation = 'arrows';
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
