import { ReactNode } from "react";

interface ToastProps {
  children: string;
}
function Toast({ children }: ToastProps) {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="..." className="rounded mr-2" alt="..." />
        <strong className="mr-auto">Bootstrap</strong>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{children}</div>
    </div>
  );
}

export default Toast;
