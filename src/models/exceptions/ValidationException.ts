type ValidationExceptionArgs = {
  message: string;
  errors: any;
};

class ValidationException {
  public message: string;

  public errors: any;

  constructor({ message, errors }: ValidationExceptionArgs) {
    this.message = message;
    this.errors = errors;
  }
}

export { ValidationException, ValidationExceptionArgs };
