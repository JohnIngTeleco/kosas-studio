export function redirectAlert(mensaje, icono, url) {
    let timerInterval;
Swal.fire({
  title: mensaje,
  html: " Esta ventana se cierra en <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  icon: icono,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    window.location.href = url
  }
})
}