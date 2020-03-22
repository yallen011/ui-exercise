import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags = this.tagService.getTags();

  constructor(private tagService: TagService) {}

  ngOnInit(): void {}
}
