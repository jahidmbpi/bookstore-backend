class AppError extends Error {
  public StatusCode: number;
  constructor(StatusCode: number, massage: string, stak = "") {
    super(massage);
    this.StatusCode = StatusCode;
    if (stak) {
      this.stack = stak;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
