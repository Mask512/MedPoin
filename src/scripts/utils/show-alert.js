import Swal from 'sweetalert2';

const defaultConfig = {
  timer: 2500,
  timerProgressBar: true,
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  // customClass: {
  //   popup: 'colored-toast',
  // },
  width: 'auto',
  showConfirmButton: false,
  ...defaultConfig,
});

const showToast = (message, customConfig) => {
  Toast.fire({
    text: message,
    ...customConfig,
  });
};

const showNotification = (message, icon, customConfig) => {
  const mergedConfig = { ...defaultConfig, icon, ...customConfig };
  Swal.fire({
    text: message,
    ...mergedConfig,
  });
};

const showAlert = {
  config: defaultConfig,
  success: (message, config = {}) => showNotification(message, 'success', config),
  error: (message, config = {}) => showNotification(message, 'error', config),
  toast: (message, config = {}) => showToast(message, config),
};

export default showAlert;
