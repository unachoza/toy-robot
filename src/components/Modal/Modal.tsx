import { MouseEventHandler } from "react";
import ReactMarkdown from "react-markdown";
import close from "../../assets/times-solid-svgrepo-com.svg";
import "./Modal.css";

interface ModalProps {
	toggling: MouseEventHandler<HTMLImageElement>;
	content: string;
}

const Modal = ({ toggling, content }: ModalProps) => {
	return (
		<div className="modal-container show-modal" id="modal" data-testid="modal">
			<div className="modal">
				<img src={close} className="close-icon" onClick={toggling} alt="close icon" data-testid="close-icon" />
				{content?.length < 200 && <div className="modal-header">Report</div>}
				<ReactMarkdown className="modal-content">{content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Modal;
