class Timer {
  constructor(callback, delay) {
    this.remaining = delay;
    this.callback = callback;
    this.resume();
  }

  pause() {
    window.clearTimeout(this.id);
    this.remaining -= new Date() - this.start;
  }

  resume() {
    this.start = new Date();
    this.id = window.setTimeout(this.callback, this.remaining);
  };
}
export default Timer;