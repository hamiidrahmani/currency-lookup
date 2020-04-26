import { Request, Response } from 'express';
import { fetchCountries } from './model';
import { SuccessResponseBody, ErrorResponseBody } from '../../interfaces/HttpResponseBody';

const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchCountries();
    const response: SuccessResponseBody = {
      data: { countries },
    };
    return res.status(200).json(response);
  } catch (error) {
    const response: ErrorResponseBody = {
      data: {},
      error: error.message,
    };
    return res.status(500).json(response);
  }
};

export { getCountries };
