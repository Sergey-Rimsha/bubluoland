export interface IUserData {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IRegistrationData {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}
