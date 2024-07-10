import hoyeong from "../static/hy";

interface listItem {
  hoyeong: string[];
}

const List: React.FC<listItem> = ({ hoyeong }) => {
  return (
    <ul>
      <li>{hoyeong[0]}</li>
      <li>{hoyeong[2]}</li>
    </ul>
  );
};

export default List;
