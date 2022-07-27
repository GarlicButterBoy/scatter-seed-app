import React, { Component, useEffect, useRef } from "react";
import { View } from "react-native";
import Canvas from "react-native-canvas";


// const CalendarCanvas = (props: any) => {
//   // const {draw, options, ...rest} = props;
//   // const {context, ...moreConfig} = options;
//   // const canvasRef = useCanvas(draw, {context});
//   // return <Canvas ref={canvasRef} {...rest}/>;
//   function draw(ctx: any) {
//     const canvas = ctx.canvas;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "salmon";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "white";
//     ctx.font = "50px sans-serif";
//     ctx.fillText("Resize Me!", canvas.width / 2 - 100, canvas.height / 2, 200);
  
//     requestAnimationFrame(() => draw(ctx));
//   }

//   const canvasRef = useRef();

//   useEffect(() => {
//     const ctx = canvasRef.current.getContext("2d");
//     requestAnimationFrame(() => draw(ctx));

//     const handleResize = (e: any) => {
//       ctx.canvas.height = window.innerHeight;
//       ctx.canvas.width = window.innerWidth;
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return <Canvas ref={canvasRef} />;
// };

function rect(props: any) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}

class PlantCalendar extends Component {
    
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
    //draw "children" components
    rect({ctx, x: 10, y: 10, width: 50, height: 50});
    rect({ctx, x: 110, y: 110, width: 50, height: 50});
  }
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCanvas = function (canvas: any) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 400, 200);
    // canvas.context.height = 500;
    canvas.height = 400;
    canvas.width = 200;
  };
  render() {
    return(
      <View>
        <Canvas
          ref={this.handleCanvas}
          
        />
      </View>
    );
  }
        
}
// export default CalendarCanvas;
export default PlantCalendar;