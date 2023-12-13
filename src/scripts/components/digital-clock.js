class Clock extends HTMLElement {
  connectedCallback() {
    this.render();
    this.startTime();
  }

  render() {
    this.innerHTML = '<div id="clock"></div>';
  }

  startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this._checkTime(m);
    s = this._checkTime(s);
    this.querySelector('#clock').innerHTML = `${h}:${m}:${s}`;
    setTimeout(() => this.startTime(), 1000);
  }

  _checkTime(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
}

customElements.define('digital-clock', Clock);
