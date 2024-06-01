import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GitHubAuthGuard } from './guards/github-auth.guard';
import { Request } from 'express';

import { AuthValidateService } from '../auth-validate/services/auth-validate.service';

@UseGuards(GitHubAuthGuard)
@Controller('auth/github')
export class AuthGitHubController {
  constructor(private readonly authValidateService: AuthValidateService) {}

  @Get('/login')
  async login() {}

  @Get('/callback')
  async callback(@Req() request: Request) {
    const user = request.user as any;
    const validate = await this.authValidateService.validateLogin(user);

    return { accessToken: validate.accessToken };
  }
}
