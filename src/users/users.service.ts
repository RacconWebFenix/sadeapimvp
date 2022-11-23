import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from './users-roles.enum';

import { User } from './entities/user.entity';

import { randomBytes } from 'crypto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltHash = await bcrypt.genSalt();
    try {
      const data: Prisma.UserCreateInput = {
        ...createUserDto,
        password: await this.hashPassword(createUserDto.password, saltHash),
        confirmationToken: randomBytes(32).toString('hex'),
        role: UserRole.ADMIN,
        salt: saltHash,
      };

      return await this.prisma.user.create({ data });
    } catch (error) {
      if (error.code.toString() === 'P2002') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
