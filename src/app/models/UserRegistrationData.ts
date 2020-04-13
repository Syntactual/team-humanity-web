import { Address } from './Address';
export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  picture: File | null;
}
