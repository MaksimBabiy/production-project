export interface User {
  id: string;
  password: string;
  username: string;
  avatar?: string;
}
export interface UserSchema {
  authData?: User;
  _inited?: boolean;
}
