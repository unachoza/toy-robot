import { MouseEventHandler } from "react";
import ReactMarkdown from "react-markdown";
import "./Modal.css";

interface ModalProps {
	toggling: MouseEventHandler<HTMLImageElement>;
	content: string;
}

const Modal = ({ toggling, content }: ModalProps) => {
	return (
		<div className="info-modal-container">
			<div className="modal-container show-modal" id="modal">
				<div className="modal">
					<img
						src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1619580778/icons8-macos-close-32.png"
						className="close-icon"
						onClick={toggling}
						alt="close icon"
					/>
					{content?.length < 200 && <div className="modal-header">Report</div>}
					<ReactMarkdown className="modal-content">{content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Modal;
