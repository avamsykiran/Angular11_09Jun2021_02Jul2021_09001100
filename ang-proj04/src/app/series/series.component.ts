import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  lb: number;
  ub: number;

  nums?: number[];
  err?: string;
  inProgress: boolean;

  doEven: boolean;
  doSquare: boolean;

  constructor(private seriesService: SeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.inProgress = false;
    this.doEven = false;
    this.doSquare = false;
  }

  ngOnInit(): void {
  }

  startSeries() {
    this.nums = [];
    this.inProgress = true;
    this.err = undefined;

    let obr = null;

    if (this.doEven && this.doSquare)
      obr = this.seriesService.generateEvenSquaredSeries(this.lb, this.ub);
    else if (this.doEven)
      obr = this.seriesService.generateEvenSeries(this.lb, this.ub);
    else if (this.doSquare)
      obr = this.seriesService.generateSquaredSeries(this.lb, this.ub);
    else
      obr = this.seriesService.generateSeries(this.lb, this.ub);
      
    obr.subscribe(
      val => this.nums?.push(val),
      err => { this.err = err; this.inProgress = false; },
      () => this.inProgress = false
    );
  }

}
