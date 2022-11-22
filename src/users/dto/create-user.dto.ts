import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  role: string;
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
  @IsNotEmpty()
  @IsString()
  salt: string;
  @IsNotEmpty()
  @IsString()
  confirmationToken: string;
  @IsNotEmpty()
  @IsString()
  recoverToken: string;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
}
