import { useEffect, useRef } from "react";
import p5 from "p5";

// const colors = ["#8E2CEA", "#60EB2D", "#E4EB2D"];
const colors = ["#E4EB2D", "#60EB2D", "#8E2CEA"];
const strokeWeights = [5, 3.5, 2];

class Particle {
  effect: Effect;
  x: number;
  y: number;
  history: [{ x: number; y: number }];
  maxLength: number;
  speedModifier: number;
  timer: number;

  constructor(effect: Effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.speedModifier = Math.ceil(Math.random() * 3);
    this.history = [{ x: this.x, y: this.y }];
    this.maxLength = Math.floor(Math.random() * 100 + 10 * this.speedModifier);
    this.timer = this.maxLength * 0.5;
  }

  public draw(p: p5) {
    p.stroke(colors[this.speedModifier - 1]);
    p.strokeWeight(strokeWeights[this.speedModifier - 1]);
    // draw trail
    if (this.history.length > 1) {
      for (let i = 0; i < this.history.length - 1; i++) {
        p.line(
          this.history[i].x,
          this.history[i].y,
          this.history[i + 1].x,
          this.history[i + 1].y
        );
      }
    }
  }

  public update() {
    if (this.timer >= 1) {
      // handle particle movement before it expires
      let col = Math.floor(this.x / this.effect.cellSize) - 1;
      let row = Math.floor(this.y / this.effect.cellSize) - 1;
      let index = row * this.effect.cols + col;
      let angle = this.effect.flowField[index];

      this.x += Math.cos(angle) * this.speedModifier * this.effect.deltaTime;
      this.y += Math.sin(angle) * this.speedModifier * this.effect.deltaTime;

      if (this.history.length > this.maxLength) {
        this.history.shift();
      }
      this.history.push({ x: this.x, y: this.y });
    } else if (this.history.length > 1) {
      // deleting the trail after the particle expires
      this.history.shift();
    } else {
      // reset the particle after it finally expires
      this.reset();
    }
    this.timer--;
  }

  public reset() {
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.history = [{ x: this.x, y: this.y }];
    this.timer = this.maxLength;
  }
}

class Effect {
  width: number;
  height: number;
  particles: Particle[];
  numberOfParticles: number = 150;
  cellSize: number = 10;
  rows: number;
  cols: number;
  flowField: number[];
  curve: number = 5;
  zoom: number = 0.01;
  debug: boolean;
  deltaTime: number;

  constructor(width: number, height: number, debug: boolean = false) {
    this.width = width;
    this.height = height;
    this.particles = [];
    this.rows = 0;
    this.cols = 0;
    this.flowField = [];
    this.debug = debug;
    this.deltaTime = 0;
    this.init();
  }

  private initFlowField() {
    this.rows = Math.ceil(this.height / this.cellSize);
    this.cols = Math.ceil(this.width / this.cellSize);
    this.flowField = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let angle =
          (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
        this.flowField.push(angle);
      }
    }
    console.log(`${this.rows}, ${this.cols}, ${this.flowField.length}`);
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }

  public init() {
    this.initFlowField();
    this.initParticles();
  }

  public render(p: p5) {
    const frameStartTime = p.millis();
    p.background(0);
    if (this.debug) this.drawGrid(p);
    this.particles.forEach((particle: Particle) => {
      particle.update();
      particle.draw(p);
    });
    this.deltaTime = p.millis() - frameStartTime;
  }

  public drawGrid(p: p5) {
    p.stroke(155);
    for (let c = 0; c <= this.cols; c++) {
      let xpos = this.cellSize * c;
      p.line(xpos, 0, xpos, this.height);
    }
    for (let r = 0; r <= this.rows; r++) {
      let ypos = this.cellSize * r;
      p.line(0, ypos, this.width, ypos);
    }
  }

  public resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // this.p.resizeCanvas(this.width, this.height);
    // this.initFlowField();
    console.log();
  }
}

const Flowfield = ({ id }: { id: string }) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<Effect | null>(null);
  const p5Canvas = useRef<p5 | null>(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = new Effect(
        window.innerWidth,
        window.innerHeight,
        false
      );
    }

    if (!p5Canvas.current && canvasRef.current) {
      p5Canvas.current = new p5((p: p5) => {
        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight).parent(
            canvasRef.current!
          );
          p.background(0);
          effectRef.current!.init();
        };
        p.draw = () => {
          effectRef.current!.render(p);
        };
      });
    }
  }, []);

  return <div ref={canvasRef} id={id}></div>;
};

export default Flowfield;
