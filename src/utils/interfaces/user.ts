interface User {
  userId: string;
  username: string;
}

export interface UserLogin {
  user: User;
  access_token: string;
  tokenType: string;
}
