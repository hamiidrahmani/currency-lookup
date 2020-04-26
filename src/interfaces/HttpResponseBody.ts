interface ResponseBody {
  data: object;
}

interface SuccessResponseBody extends ResponseBody {}

interface ErrorResponseBody extends ResponseBody {
  error: string;
}

export { SuccessResponseBody, ErrorResponseBody };
