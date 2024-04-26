import "../styles/Chessboard.css";
import Tile from "./Tile";

interface Piece {
  image: string;
  x: number;
  y: number;
}

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizantalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "public/assets/pawn_d.png", x: i, y: 6 });
  pieces.push({ image: "public/assets/pawn_l.png", x: i, y: 1 });
}

for (let i = 0; i < 2; i++) {
  const type = i === 0 ? "l" : "d";
  const y = i === 0 ? 0 : 7;

  pieces.push({ image: `public/assets/rook_${type}.png`, x: 0, y });
  pieces.push({ image: `public/assets/rook_${type}.png`, x: 7, y });
  pieces.push({ image: `public/assets/knight_${type}.png`, x: 1, y });
  pieces.push({ image: `public/assets/knight_${type}.png`, x: 6, y });
  pieces.push({ image: `public/assets/bishop_${type}.png`, x: 2, y });
  pieces.push({ image: `public/assets/bishop_${type}.png`, x: 5, y });
  pieces.push({ image: `public/assets/queen_${type}.png`, x: 3, y });
  pieces.push({ image: `public/assets/king_${type}.png`, x: 4, y });
}

const Chessboard = () => {
  const board = [];

  for (let j = horizantalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < verticalAxis.length; i++) {
      const sum = i + j;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`[${i}x${j}]`} number={sum} image={image} />);
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default Chessboard;
