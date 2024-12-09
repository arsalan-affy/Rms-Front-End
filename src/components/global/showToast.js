// // showToast.js
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import toast, { Toaster } from 'react-hot-toast';

// export const showToast = (type, message) => {
//   switch (type) {
//     case "success":
//       toast.success(message);
//       break;
//     case "error":
//       toast.error(message);
//       break;
//     case "warn":
//       toast.warn(message);
//       break;
//     default:
//       toast.info(message);
//   }
// };

// showToast.js
import toast from "react-hot-toast";

export const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warn": // Note: Hot Toast doesn't have a 'warn' method
      toast(message, {
        icon: "⚠️",
        style: { background: "#FFA500", color: "#fff" },
      });
      break;
    default:
      toast(message);
  }
};
