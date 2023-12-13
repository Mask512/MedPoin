import Swal from 'sweetalert2';

const defaultConfig = {
  timer: 2500,
  timerProgressBar: true,
  customClass: {
    popup: 'sweet-alert',
  },
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  width: 'auto',
  showConfirmButton: false,
  ...defaultConfig,
});

const showToast = (message, customConfig) => {
  Toast.fire({
    text: message,
    icon: 'info',
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
