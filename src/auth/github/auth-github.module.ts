import { Module } from '@nestjs/common';

import { GitHubStrategy } from './strategies/github.strategy';
import { AuthValidateModule } from '../auth-validate/auth-validate.module';
import { AuthGitHubController } from './auth-github.controller';

@Module({
  imports: [AuthValidateModule],
  controllers: [AuthGitHubController],
  providers: [GitHubStrategy],
})
export class AuthGitHubModule {}
