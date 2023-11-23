import Swal from 'sweetalert2';

const defaultConfig = {
  title: 'Sorry',
  timer: 3000,
  timerProgressBar: true,
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'blue',
  icon: 'info',
  // customClass: {
  //   popup: 'colored-toast',
  // },
  width: 'auto',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const showToast = (message) => {
  Toast.fire({
    text: message,
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
  toast: (message) => showToast(message),
};

export default showAlert;
