import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { DataSeries } from './dataSeries'
import { SerieService } from './serie.service'

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SerieService) { }
  series!: Array<Series>;
  promedio!: number;

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }


  ngOnInit() {
    this.getSeries();
  }
}
