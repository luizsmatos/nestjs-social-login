import { Module } from '@nestjs/common';
import { AuthGitHubModule } from './github/auth-github.module';

@Module({
  imports: [AuthGitHubModule],
})
export class AuthModule {}
