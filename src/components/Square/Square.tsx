import "./Square.css";

const Square = ({ index }: any) => {
	return <div className="square">{`${index[0]}, ${index[1]}`}</div>;
};

export default Square;
