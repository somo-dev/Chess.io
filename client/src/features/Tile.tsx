import { FC } from "react";

interface TilePropsType {
  image?: string;
  number: number;
}

const Tile: FC<TilePropsType> = ({ number, image }) => {
  return (
    <div className={number % 2 === 0 ? "dark-tile tile" : "light-tile tile"}>
      <img src={image} style={{ width: "60px" }} />
    </div>
  );
};

export default Tile;
