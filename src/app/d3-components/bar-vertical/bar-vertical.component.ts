import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-bar-vertical',
  templateUrl: './bar-vertical.component.html',
  styleUrls: ['./bar-vertical.component.css']
})
export class BarVerticalComponent implements OnInit {

  private data = [
    { name: 'Entry Meeting', value: 1 },
    { name: 'Exit Meeting', value: 6 },
  ];
  private svg;
  private margin = 80;
  private width = 250 - (this.margin * 2);
  private height = 250 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  createSvg(): void {
    this.svg = d3.select('figure#bar-vertical')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ', 0 )');
  }

  drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleLinear()
    .domain([0, 10])
    .range([0, this.height]);

    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      // .call(d3.axisBottom(x))
      // .selectAll('text')
      // .attr('transform', 'translate(-10,0)rotate(-45)')
      // .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleBand()
    .range([0, this.width + (this.margin * 2)])
    .domain(data.map(d => d.name))
    .padding(0.2);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => y(d.name))
      .attr('height', y.bandwidth())
      .attr('width', (d) =>  y(d.name))
      .attr('fill', d3.scaleOrdinal(d3.schemeCategory10));
  }


}
