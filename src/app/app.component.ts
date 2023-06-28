import { Component, ViewEncapsulation } from '@angular/core';
import { LegendItemVisualArgs, Series } from '@progress/kendo-angular-charts';
import {
  Element,
  geometry,
  Group,
  Path,
  Rect as RectShape,
  Text,
} from '@progress/kendo-drawing';
const { Point, Rect, Size } = geometry;

@Component({
  selector: 'my-app',
  template: `
        <kendo-chart
            [ngClass]="{ 'hand-cursor': isOverLegend }"
            (legendItemHover)="isOverLegend = true"
            (legendItemLeave)="isOverLegend = false"
        >
            <kendo-chart-title text="Units sold"></kendo-chart-title>
            <kendo-chart-category-axis>
                <kendo-chart-category-axis-item
                    [categories]="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                    [title]="{ text: 'Months' }"
                >
                </kendo-chart-category-axis-item>
            </kendo-chart-category-axis>
            <kendo-chart-series>
                <kendo-chart-series-item
                    *ngFor="let series of data"
                    [type]="series.type"
                    [name]="series.name"
                    [dashType]="series.dashType"
                    [data]="series.data"
                >
                </kendo-chart-series-item>
            </kendo-chart-series>
            <kendo-chart-legend position="bottom" orientation="horizontal">
                <kendo-chart-legend-item [visual]="labelsVisual" cursor="pointer"> </kendo-chart-legend-item>
            </kendo-chart-legend>
        </kendo-chart>
    `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
            .hand-cursor {
                cursor: pointer;
            }
        `,
  ],
})
export class AppComponent {
  public isOverLegend = false;
  public data: Series[] = [
    {
      name: '2018',
      type: 'line',
      dashType: 'longDashDotDot',
      data: [123, 276, 310, 212, 240, 156, 98],
    },
    {
      name: '2019',
      type: 'line',
      dashType: 'dot',
      data: [165, 210, 287, 144, 190, 167, 212],
    },
    {
      name: '2020',
      type: 'line',
      dashType: 'dashDot',
      data: [56, 140, 195, 46, 123, 78, 95],
    },
  ];

  public labelsVisual(args: LegendItemVisualArgs): Element {
    if (args.series.dashType === 'dashDot') {
      // Create rectangular shape on top of which the label will be drawn
      const rectOptions = {
        stroke: { width: 2, color: '#fff' },
        fill: { color: '#fff' },
      };
      const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
      const rect: RectShape = new RectShape(rectGeometry, rectOptions);

      // Create the lines used to represent the custom legend item
      const pathColor = args.options.markers.border.color;
      const path1 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path2 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      // The paths are constructed by using a chain of commands
      path1.moveTo(0, 7).lineTo(5, 7).close();
      path2.moveTo(10, 7).lineTo(25, 7).close();

      // Create the text associated with the legend item
      const labelText = args.series.name;
      const labelFont = args.options.labels.font;
      const fontColor = args.options.labels.color;
      const textOptions = { font: labelFont, fill: { color: fontColor } };
      const text = new Text(labelText, new Point(27, 0), textOptions);

      // Place all the shapes in a group
      const group = new Group();

      group.append(rect, path1, path2, text);

      // set opacity if the legend item is disabled
      if (!args.active) {
        group.opacity(0.5);
      }

      return group;
    } else if (args.series.dashType === 'longDashDotDot') {
      // Create rectangular shape on top of which the label will be drawn
      const rectOptions = {
        stroke: { width: 2, color: '#fff' },
        fill: { color: '#fff' },
      };
      const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
      const rect: RectShape = new RectShape(rectGeometry, rectOptions);

      // Create the lines used to represent the custom legend item
      const pathColor = args.options.markers.border.color;
      const path1 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path2 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path3 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      // The paths are constructed by using a chain of commands
      path1.moveTo(0, 7).lineTo(5, 7).close();
      path2.moveTo(10, 7).lineTo(15, 7).close();
      path3.moveTo(20, 7).lineTo(40, 7).close();

      // Create the text associated with the legend item
      const labelText = args.series.name;
      const labelFont = args.options.labels.font;
      const fontColor = args.options.labels.color;
      const textOptions = { font: labelFont, fill: { color: fontColor } };
      const text = new Text(labelText, new Point(45, 0), textOptions);

      // Place all the shapes in a group
      const group = new Group();

      group.append(rect, path1, path2, path3, text);

      // set opacity if the legend item is disabled
      if (!args.active) {
        group.opacity(0.5);
      }

      return group;
    } else if (args.series.dashType === 'dot') {
      // Create rectangular shape on top of which the label will be drawn
      const rectOptions = {
        stroke: { width: 2, color: '#fff' },
        fill: { color: '#fff' },
      };
      const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
      const rect: RectShape = new RectShape(rectGeometry, rectOptions);

      // Create the lines used to represent the custom legend item
      const pathColor = args.options.markers.border.color;
      const path1 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path2 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path3 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      const path4 = new Path({
        stroke: {
          color: pathColor,
          width: 3,
        },
      });

      // The paths are constructed by using a chain of commands
      path1.moveTo(0, 7).lineTo(5, 7).close();
      path2.moveTo(10, 7).lineTo(15, 7).close();
      path3.moveTo(20, 7).lineTo(25, 7).close();
      path4.moveTo(30, 7).lineTo(35, 7).close();

      // Create the text associated with the legend item
      const labelText = args.series.name;
      const labelFont = args.options.labels.font;
      const fontColor = args.options.labels.color;
      const textOptions = { font: labelFont, fill: { color: fontColor } };
      const text = new Text(labelText, new Point(45, 0), textOptions);

      // Place all the shapes in a group
      const group = new Group();

      group.append(rect, path1, path2, path3, path4, text);

      // set opacity if the legend item is disabled
      if (!args.active) {
        group.opacity(0.5);
      }

      return group;
    }
    // return the default visualization of the legend items
    return args.createVisual();
  }
}
