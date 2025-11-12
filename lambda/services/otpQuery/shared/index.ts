const OTP_URL = "http://localhost:8080/otp/routers/default/index/graphql";

export class OTPServerError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'OTPServerError';
    this.status = status;
  }
}

interface OTPResponse {
    data: Record<string, unknown>;
}

const isOTPResponse = (response: unknown): response is OTPResponse => {
  return typeof response === 'object' && response !== null && 'data' in response;
};

export const fetchOTP = async <R>(query: string, variables?: Record<string, unknown>): Promise<R> =>
  await fetch(
    OTP_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables })
    }
  )
  .then(async res => {
    if (!res.ok) {
      throw new OTPServerError(res.status, `HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    if (!isOTPResponse(json)) {
      throw new Error('Invalid response format');
    }
    return json.data as R;
  })
  .catch(error => {
    if (error instanceof OTPServerError) {
      throw error;
    }
    throw new Error(`Unexpected error`);
  });
