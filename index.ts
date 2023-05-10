import './style.css';

import Konva from 'konva';

// // Create a Konva Rect node
// const rect = new Konva.Rect({
//   x: 50,
//   y: 50,
//   width: 80,
//   height: 40,
//   fill: '#000',
//   cornerRadius: 10
// });

// // Create a Konva Text node
// const text = new Konva.Text({
//   x: 75,
//   y: 65,
//   text: 'Near',
//   fontSize: 12,
//   fill: '#fff',
//   align: 'center',
//   verticalAlign: 'middle',
// });

// // Create a Konva Group node and add the Rect and Text nodes to it
// const group = new Konva.Group();
// group.add(rect);
// group.add(text);

// // Add the Group node to a Konva Layer
// const layer = new Konva.Layer();
// layer.add(group);

// // Add the Layer to a Konva Stage
// const stage = new Konva.Stage({
//   container: 'app', // Replace with the ID of your container element
//   width: 500,
//   height: 500,
// });
// stage.add(layer);

var stage = new Konva.Stage({
  container: 'app',
  width: 500,
  height: 500,
});

var layer = new Konva.Layer();

// tooltip
var tooltip = new Konva.Label({
  x: 50,
  y: 50,
  opacity: 0.75,
});

tooltip.add(
  new Konva.Tag({
    fill: 'black',
    pointerDirection: 'down',
    pointerWidth: 10,
    pointerHeight: 10,
    lineJoin: 'round',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.5,
    cornerRadius: 5,
  })
);

tooltip.add(
  new Konva.Text({
    text: 'Near',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white',
  })
);

layer.add(tooltip);
stage.add(layer);
