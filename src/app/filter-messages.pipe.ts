import { Pipe, PipeTransform } from '@angular/core';
import { Email } from './message-list/email';

@Pipe({
  name: 'filterMsgs'
})
export class FilterMessagesPipe implements PipeTransform {
  transform(messages: Email[], tagName: string): Email[] {
    console.log('selected Tag:', tagName);
    if (!messages || !tagName) {
      return messages;
    }
    return messages.filter(
      message => message.tags.indexOf(tagName.toLowerCase()) !== -1
    );
  }
}
