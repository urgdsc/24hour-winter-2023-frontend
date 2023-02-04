export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  token: string;
}

export interface UserProxy {
  id: number;
  first_name: string;
  last_name: string;
}

export interface NewUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface Auth {
  message: string;
  token: string;
  user: User;
}
