import { useEffect, useRef } from "react";
import p5 from "p5";

type SketchProps = {
  width?: number;
  height?: number;
  dt?: number; // difference between neighboring vectors
  spacing?: number; // spacing between vectors
  min_line_len?: number;
  max_line_len?: number;
  speed?: number;
  min_alpha?: number;
  max_alpha?: number;
  id?: string | undefined;
};

const Flowfield = ({
  dt = 0.12,
  spacing = 20,
  min_line_len = 0.3,
  max_line_len = 0.8,
  speed = 0.002,
  min_alpha = 100,
  max_alpha = 255,
  id = undefined,
}: SketchProps) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const p5Canvas = useRef<p5 | null>(null);
  var n_cols = Math.floor(window.innerWidth / spacing);
  var n_rows = Math.floor(window.innerHeight / spacing);
  var zoff = 0;

  // define the methods used for making the flow field canvas
  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight).parent(
        canvasRef.current!
      );
    };

    p.draw = () => {
      p.background(0);
      var yoff = 0;
      for (let x = 0; x <= n_cols; x++) {
        var xoff = 0;
        for (let y = 0; y <= n_rows; y++) {
          let r = p.noise(xoff, yoff, zoff);
          let angle = r * p.TWO_PI;
          let vec = p5.Vector.fromAngle(angle);
          let xpos = x * spacing + spacing / 2;
          let ypos = y * spacing + spacing / 2;
          let stroke_alpha = r * (max_alpha - min_alpha) + min_alpha;
          let line_length =
            spacing * (r * (max_line_len - min_line_len) + min_line_len);

          p.stroke(200, r * 155, 255, stroke_alpha);
          p.push();
          p.translate(xpos, ypos);
          p.rotate(vec.heading());
          p.line(0, 0, line_length, 0);
          p.pop();

          xoff += dt;
        }
        yoff += dt;
      }

      zoff += speed;
    };
  };

  const handleResize = () => {
    n_cols = Math.floor(window.innerWidth / spacing);
    n_rows = Math.floor(window.innerHeight / spacing);
    p5Canvas.current?.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  // hook for setup and cleanup of the canvas
  useEffect(() => {
    if (!p5Canvas.current && canvasRef.current) {
      p5Canvas.current = new p5(sketch);
    }

    // Clean up the sketch when the component unmounts
    return () => {
      p5Canvas.current?.remove();
    };
  }, []);

  // hook for window resizing
  useEffect(() => {
    // add window resize event listener
    window.addEventListener("resize", handleResize);

    // remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} id={id}></div>;
};

export default Flowfield;
