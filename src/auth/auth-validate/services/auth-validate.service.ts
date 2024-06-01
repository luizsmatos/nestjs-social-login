import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthValidateService {
  constructor(private readonly jwtService: JwtService) {}

  async validateLogin(profile: any): Promise<{ accessToken: string }> {
    const payload = {
      sub: profile.id,
      username: profile.username,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
    };
  }
}
