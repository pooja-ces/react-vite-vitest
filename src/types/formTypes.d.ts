export interface FormData {
  name?: string | boolean;
  email: string;
  password: string;
  gender: string | boolean;
  role: string;
  testField: string;
  acceptTerms: boolean;
}

export interface FormSubmitResponse {
  success: boolean;
  message: string;
}
