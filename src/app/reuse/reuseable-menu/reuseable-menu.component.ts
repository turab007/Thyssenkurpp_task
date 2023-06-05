import { Component, Input, OnInit } from '@angular/core';
import { menuItem } from '../menuItem.model';

@Component({
  selector: 'app-reuseable-menu',
  templateUrl: './reuseable-menu.component.html',
  styleUrls: ['./reuseable-menu.component.css'],
})
export class ReuseableMenuComponent implements OnInit {
  @Input() list: menuItem[];
  activeIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  assignPosition() {
    var items = Array.from(
      document.getElementsByClassName('myIcon') as HTMLCollectionOf<HTMLElement>
    );

    var bars = Array.from(
      document.getElementsByClassName(
        'activeBar'
      ) as HTMLCollectionOf<HTMLElement>
    );

    for (let i = 0, l = items.length; i < l; i++) {
      items[i].style.left =
        (
          50 -
          35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
        ).toFixed(4) + '%';

      items[i].style.top =
        (
          50 +
          35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
        ).toFixed(4) + '%';
    }
  }
  open() {
    document.querySelector('.circle').classList.toggle('open');
    if(this.activeIndex!=-1) {
      this.list[this.activeIndex].active=false;
      this.activeIndex = -1;
    }
    this.assignPosition();
    this.createchart();
  }

  createchart() {
    var canvas = <HTMLCanvasElement>document.getElementById('can');
    var ctx = canvas.getContext('2d');
    var lastend = 0;
    var data = [60, 210, 90];
    var myTotal = 0;
    var myColor = ['#afcc4c', '#95b524', '#c1dd54'];
    var labels = ['B', 'A', 'C'];

    for (var e = 0; e < data.length; e++) {
      myTotal += data[e];
    }

    // make the chart 10 px smaller to fit on canvas
    var off = 10;
    var w = (canvas.width - off) / 2;
    var h = (canvas.height - off) / 2;
    for (var i = 0; i < data.length; i++) {
      ctx.fillStyle = myColor[i];
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w, h);
      var len = (data[i] / myTotal) * 2 * Math.PI;
      var r = h - off / 2;
      ctx.arc(w, h, r, lastend, lastend + len, false);
      ctx.lineTo(w, h);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var mid = lastend + len / 2;
      ctx.fillText(
        labels[i],
        w + Math.cos(mid) * (r / 2),
        h + Math.sin(mid) * (r / 2)
      );
      lastend += Math.PI * 2 * (data[i] / myTotal);
    }
  }

  active(i: number) {
    if (this.activeIndex != -1) {
      this.list[this.activeIndex].active = false;
    }
    this.list[i].active = true;
    this.activeIndex = i;
  }
}
