import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  private data = [
    { name: 'Risk', value: '25' },
    { name: 'Audit', value: '25' },
    { name: 'Control', value: '50' },
  ];
  // get height(): number { return parseInt(d3.select('#donut').style('height'), 10); }
  // get width(): number { return parseInt(d3.select('#donut').style('width'), 10); }
  height = 250;
  width = 250;
  radius: number;
  // Arcs & pie
  private arc: any; private pie: any; private slices: any;
  private color: any;
  // Drawing containers
  private svg: any; private mainContainer: any;

  constructor() { }

  ngOnInit() {
    this.svg = d3.select('#donut').append('svg');
    this.setSVGDimensions();
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.mainContainer = this.svg.append('g').attr('transform', `translate(${this.radius},${this.radius})`);
    this.pie = d3.pie().sort(null).value((d: any) => d.value);
    this.draw();
  }

  private setSVGDimensions() {
    this.radius = (Math.min(this.width, this.height)) / 2;
    this.svg.attr('width', 2 * this.radius).attr('height', 2 * this.radius);
    this.svg.select('g').attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');
  }

  private draw() {
    this.setArcs();
    this.drawSlices();
  }

  private setArcs() {
    this.arc = d3.arc().outerRadius(this.radius).innerRadius(this.radius * .5);
  }

  private drawSlices() {
    this.slices = this.mainContainer.selectAll('path')
      .remove().exit()
      .data(this.pie(this.data))
      .enter().append('g').append('path')
      .attr('d', this.arc);
    this.slices
      .attr('fill', (d, i) => this.color(i));
  }

}
