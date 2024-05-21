import "./Button.css";
export interface PropsButton {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: PropsButton): JSX.Element => {
	return (
		<button className="button" role="button" onClick={onClick}>
			{text}
		</button>
	);
};
export default Button;
