import { h } from "../../../src/pragma";

interface LikeProps {
  big: boolean;
}

export function LikeComponent({ big = false }: LikeProps) {
  return <span className={`${big ? "text-3xl" : ""}`}>👍</span>;
}
