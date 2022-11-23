export class User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string;
  status?: boolean;
  salt?: string;
  confirmationToken?: string;
  recoverToken?: string;
  // createdAt?: Date;
  // updatedAt?: Date;
}
