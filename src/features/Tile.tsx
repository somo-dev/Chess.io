import { FC } from "react";

interface TilePropsType {
  image?: string;
  number: number;
}

const Tile: FC<TilePropsType> = ({ number, image }) => {
  return (
    <div className={number % 2 === 0 ? "dark-tile tile" : "light-tile tile"}>
      {number % 2 === 0 ? (
        <img
          src={image}
          style={{ width: "65px" }}
        />
      ) : (
        <img
          src={image}
          style={{ width: "65px" }}
        />
      )}
    </div>
  );
};

export default Tile;
