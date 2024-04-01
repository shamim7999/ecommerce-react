import { Toast, ToastContainer } from "react-bootstrap";

const DefaultToast = ({ show, setShow, title, body, variant }) => {
  return (
    <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1025, position: 'fixed' }}>
      <Toast
        bg={variant}
        onClose={() => setShow(false)}
        show={show}
        delay={2000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default DefaultToast;
