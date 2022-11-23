import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
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
  // @IsNotEmpty()
  // @IsString()
  @IsOptional()
  salt: string;
  // @IsNotEmpty()
  // @IsBoolean()
  @IsOptional()
  status: boolean;
  // @IsNotEmpty()
  // @IsString()
  @IsOptional()
  confirmationToken: string;
  // @IsNotEmpty()
  // @IsString()
  @IsOptional()
  recoverToken: string;
  // @IsDate()
  // @IsOptional()
  // createdAt: Date;
  // @IsDate()
  // @IsOptional()
  // updatedAt: Date;
}
