import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw, Play, Pause } from "lucide-react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];
const INITIAL_DIR = { x: 1, y: 0 };
const SPEED = 120;

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [dir, setDir] = useState(INITIAL_DIR);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("snake_high_score") || "0", 10);
  });

  const dirRef = useRef(dir);
  dirRef.current = dir;

  const generateFood = useCallback((currentSnake: { x: number; y: number }[]) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const onSnake = currentSnake.some((seg) => seg.x === newFood.x && seg.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    const initialSnake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    setSnake(initialSnake);
    setDir({ x: 1, y: 0 });
    setFood(generateFood(initialSnake));
    setGameOver(false);
    setIsPaused(false);
    setScore(0);
  };

  const changeDirection = useCallback((newDir: { x: number; y: number }) => {
    const current = dirRef.current;
    if (newDir.x !== 0 && current.x !== 0) return;
    if (newDir.y !== 0 && current.y !== 0) return;
    setDir(newDir);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          changeDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
        case "s":
        case "S":
          changeDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          changeDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
        case "d":
        case "D":
          changeDirection({ x: 1, y: 0 });
          break;
        case " ":
          setIsPaused((p) => !p);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection]);

  // Game Loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const timer = setInterval(() => {
      setSnake((prevSnake) => {
        const head = {
          x: prevSnake[0].x + dirRef.current.x,
          y: prevSnake[0].y + dirRef.current.y,
        };

        // Wall collision (teleport / wrap around like Nokia Snake 2)
        if (head.x < 0) head.x = GRID_SIZE - 1;
        if (head.x >= GRID_SIZE) head.x = 0;
        if (head.y < 0) head.y = GRID_SIZE - 1;
        if (head.y >= GRID_SIZE) head.y = 0;

        // Self collision
        const selfCollision = prevSnake.some((seg) => seg.x === head.x && seg.y === head.y);
        if (selfCollision) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => {
            const newScore = s + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem("snake_high_score", newScore.toString());
            }
            return newScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(timer);
  }, [gameOver, isPaused, food, highScore, generateFood]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Moldura de Gameboy/Nokia Retro */}
      <div className="border-card-edge relative flex flex-col items-center rounded-2xl border-4 bg-[#8bac0f] p-4 shadow-[6px_6px_0px_rgba(0,0,0,0.25)] select-none">
        {/* Cabeçalho do Display */}
        <div className="mb-2 flex w-full items-center justify-between font-mono text-xs font-bold text-[#0f380f]">
          <span>SNAKE II 🐍</span>
          <div className="flex gap-4">
            <span>PONTOS: {score}</span>
            <span>RECORDE: {highScore}</span>
          </div>
        </div>

        {/* Grade LCD Nokia (20x20) */}
        <div className="relative border-4 border-[#0f380f] bg-[#9bbc0f] p-1 shadow-inner">
          <div
            className="grid gap-[1px]"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
              width: "280px",
              height: "280px",
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE;
              const y = Math.floor(index / GRID_SIZE);

              const isHead = snake[0].x === x && snake[0].y === y;
              const isBody = snake.some((seg) => seg.x === x && seg.y === y);
              const isFood = food.x === x && food.y === y;

              let cellStyle = "bg-transparent";
              if (isHead) cellStyle = "bg-[#0f380f] rounded-xs";
              else if (isBody) cellStyle = "bg-[#306230] rounded-xs";
              else if (isFood) cellStyle = "bg-[#0f380f] animate-pulse rounded-full";

              return <div key={index} className={`h-full w-full ${cellStyle}`} />;
            })}
          </div>

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#8bac0f]/90 text-center font-mono text-[#0f380f]">
              <span className="text-xl font-extrabold tracking-widest">GAME OVER</span>
              <span className="mt-1 text-xs font-bold">PONTUAÇÃO: {score}</span>
              <button
                onClick={resetGame}
                className="mt-3 flex items-center gap-1.5 rounded border-2 border-[#0f380f] bg-[#306230] px-3 py-1.5 text-xs font-bold text-[#9bbc0f] shadow-sm active:scale-95"
              >
                <RotateCcw size={14} /> JOGAR NOVAMENTE
              </button>
            </div>
          )}
        </div>

        {/* Controles On-Screen para Dispositivos Móveis (D-Pad) */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <button
            onClick={() => changeDirection({ x: 0, y: -1 })}
            aria-label="Cima"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#0f380f] bg-[#306230] text-[#9bbc0f] shadow active:scale-90"
          >
            <ArrowUp size={20} />
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => changeDirection({ x: -1, y: 0 })}
              aria-label="Esquerda"
              className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#0f380f] bg-[#306230] text-[#9bbc0f] shadow active:scale-90"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => setIsPaused((p) => !p)}
              aria-label="Pausar"
              className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#0f380f] bg-[#8bac0f] text-[#0f380f] shadow active:scale-90"
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button
              onClick={() => changeDirection({ x: 1, y: 0 })}
              aria-label="Direita"
              className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#0f380f] bg-[#306230] text-[#9bbc0f] shadow active:scale-90"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <button
            onClick={() => changeDirection({ x: 0, y: 1 })}
            aria-label="Baixo"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#0f380f] bg-[#306230] text-[#9bbc0f] shadow active:scale-90"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
