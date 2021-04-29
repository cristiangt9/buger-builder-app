import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = (props: any) => {
  const portalElement = document.getElementById("overlays");
  if (!portalElement) {
    return <></>;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop show={props.show} onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : 0,
          }}
        >
          {props.children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
