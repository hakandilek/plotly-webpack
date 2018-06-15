var Plotly = require('plotly.js');

// Generating random data..
a=[]; b=[]; c=[];
for(i=0;i<50;i++)
  {
    var a_ = Math.random(); 
    a.push(a_);
    
    var b_ = Math.random(); 
    b.push(b_);
    
    var c_ = Math.random(); 
    c.push(c_);
  }
// Plotting the mesh
var data=[
    {
      opacity:0.8,
      color:'rgb(300,100,200)',
      type: 'mesh3d',
      x: a,
      y: b,
      z: c,
    }
];

Plotly.plot("gd", data);
