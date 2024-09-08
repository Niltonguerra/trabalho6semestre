import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class AuthStorePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
