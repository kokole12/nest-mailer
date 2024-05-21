import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  sendMail(): void {
    this.mailerService.sendMail({
      to: 'kokoleismail886@gmail.com',
      from: 'kokoleismail@gmail.com',
      subject: 'Testing node mailer nest js',
      text: 'Welcome to nest applications',
      html: '<h1>Welcome to my blog server</h1>',
    });
  }
}
