import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // the equivalent of http(s)://<baseUrl>:port/
    return 'Hello World!';
  }
}
