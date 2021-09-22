//gl context initialize
const canvas = document.getElementById('gl-canvas');
const gl = canvas.getContext('webgl2');

//clear screen
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

//Shader para possiciones
const vertexShader = `#version 300 es
precision mediump float;

in vec2 position;
in vec3 iColor;
out vec3 oColor;

void main()
{
  gl_Position = vec4(position, 0, 1);
  oColor = iColor;
}
`;

//shader para color
const fragmentShader = `#version 300 es
precision mediump float;

out vec4 fragColor;
in vec3 oColor;

void main()
{
  fragColor = vec4(oColor, 1);
}
`;

const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vs, vertexShader);
gl.shaderSource(fs, fragmentShader);

gl.compileShader(vs);
gl.compileShader(fs);

if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(vs));
}

if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(fs));
}

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error(gl.getProgramInfoLog(program));
}

gl.useProgram(program);

//Drawing basic triangle
const triangleCoords = [
  //x, y
  
     0.6,  -0.1, 
     0.6, -0.2,
    -0.5, -0.2,

    0.6, -0.1,
    -0.5, -0.2,
   -0.5, -0.1,

   -0.6, 0.0,
  -0.5, 0.0,
   -0.6, -0.1,
 
   -0.5, 0.0,
   -0.5, -0.1,
  -0.6, -0.1,

  -0.7, 0.0,
  -0.7, 0.1,
  -0.6, 0.1,
  
  -0.6, 0.0,
  -0.7, 0.0,
  -0.6, 0.1,

  -0.7, 0.4,
  -0.7, 0.1,
  -0.6, 0.4,

  -0.7, 0.1,
  -0.6, 0.1,
  -0.6, 0.4,

  -0.6, 0.4,
  -0.6, 0.5,
  -0.5, 0.4,

  -0.5, 0.4,
  -0.5, 0.5,
  -0.6, 0.5,
 
  -0.4, 0.5,
  -0.5, 0.6,
  -0.5, 0.5,

 -0.4, 0.6,
  -0.4, 0.5,
  -0.5, 0.6, 

  -0.5, 0.5,
  -0.5, 0.6,
  0.5, 0.6, 

 -0.5, 0.5,
  0.5, 0.5,
  0.5, 0.6,

  0.6, 0.5,
  0.6, 0.6,
  0.5, 0.6,

  0.5, 0.5,
  0.6, 0.5,
  0.5, 0.6,

  0.6, 0.4,
  0.7, 0.4,
  0.6, 0.5,

  0.7, 0.5,
  0.7, 0.4,
  0.6, 0.5,
   

  0.8, -0.0,
  0.8, 0.4,
  0.7, 0.4, 

  0.8, -0.0,
  0.7, -0.0,
  0.7, 0.4,

  0.7, -0.1,
  0.6, -0.1,
  0.6, -0.0, 
 
  0.7, -0.0,
  0.7, -0.1,
  0.6, 0.0, 

  -0.3, -0.0,
  0.4, 0.1,
  0.4, 0.0, 
  
  -0.3, -0.0,
  -0.3, 0.1,
  0.4, 0.1, 

  -0.3, -0.0,
  -0.3, 0.1,
  0.4, 0.1,

  -0.3, 0.2,
  -0.4, 0.2,
  -0.4, 0.1,

  -0.3, 0.1,
  -0.3, 0.2,
  -0.4, 0.1,

  0.4, 0.1,
  0.4, 0.2,
  0.5, 0.1,

  0.4, 0.2,
  0.5, 0.2,
  0.5, 0.1,


  0.3, 0.3,
  0.2, 0.4,
  0.3, 0.4,

  0.2, 0.4,
  0.3, 0.3,
  0.2, 0.3, 


  -0.1, 0.4,
  -0.2, 0.3,
  -0.1, 0.3,

  
  -0.2, 0.3,
  -0.1, 0.4,
  -0.2, 0.4,

  -0.0, 0.6,
  -0.0, 0.7,
   0.1, 0.7,

   0.1, 0.6,
   0.0, 0.6,
   0.1, 0.7,

   0.1, 0.7,
   0.0, 0.7,
   0.1, 0.8,

   -0.0, 0.7,
   -0.0, 0.8,
    0.1, 0.8,

    -0.1, 0.7,
    -0.1, 0.8,
     0.1, 0.8,

     -0.1, 0.7,
     -0.0, 0.7,
      0.1, 0.8,

      //Colores 
/*
      0.6,  -0.0, 
      0.6, -0.1,
     -0.5, -0.1,
 
     0.6, -0.0,
     -0.5, -0.1,
    -0.5, -0.0,
*/


];


const vertexColorArray = [
    //RGB
    //1 fila

      0,0,0,
      0,0,0,
      0,0,0,



];

const vertexColorBuffer = gl.createBuffer();;
gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColorArray), gl.STATIC_DRAW);
const attribVertexColor = gl.getAttribLocation(program, 'iColor');
gl.enableVertexAttribArray(attribVertexColor);
gl.vertexAttribPointer(attribVertexColor, 3, gl.FLOAT, gl.FALSE, 0, 0);

//Reservamos memoria en la tarjeta de video (vram)
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoords), gl.STATIC_DRAW);

const attribPosition = gl.getAttribLocation(program,'position');
gl.enableVertexAttribArray(attribPosition);
gl.vertexAttribPointer(attribPosition, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 10000);