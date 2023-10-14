import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const success = (message:string) => {
    toast.success(message);
  };
const error = (message:string) => {
    toast.error(message);
  };
const info = (message:string) => {
    toast.info(message);
  };

export const message={
  success,
  error,
  info,
}
success