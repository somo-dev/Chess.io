import "../styles/Chessboard.css";
import Tile from "./Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizantalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Chessboard = () => {
  const board = [];

  for (let j = horizantalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < verticalAxis.length; i++) {
      const sum = i + j;
      board.push(<Tile number={sum} />);
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default Chessboard;
