import { Injectable } from '@angular/core';
import { Tag } from './tags';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag[] = [
    {
      name: 'Inbox',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png'
    },
    {
      name: 'Starred',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png'
    },
    {
      name: 'Snoozed',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png'
    },
    {
      name: 'Important',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png'
    },
    {
      name: 'Sent',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png'
    },
    {
      name: 'Drafts',
      iconURL:
        'https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png'
    },
    {
      name: 'Google+',
      svgPrimaryPath: 'M0 0h24v24H0z',
      svgSecondaryPath:
        'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z'
    },
    {
      name: 'Medium',
      svgPrimaryPath: 'M0 0h24v24H0z',
      svgSecondaryPath:
        'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z'
    },
    {
      name: 'Notes',
      svgPrimaryPath: 'M0 0h24v24H0z',
      svgSecondaryPath:
        'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z'
    },
    {
      name: 'Work',
      svgPrimaryPath: 'M0 0h24v24H0z',
      svgSecondaryPath:
        'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z'
    }
  ];

  getTags() {
    return of(this.tags);
  }

  constructor() {}
}
