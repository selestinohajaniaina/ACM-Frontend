import { Component, Input } from '@angular/core';
import { TextCursiveComponent } from '../text-cursive/text-cursive.component';
import { Member } from '../../interfaces/member';
import dayjs from 'dayjs';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-member-badge-recto',
  standalone: true,
  imports: [TextCursiveComponent],
  templateUrl: './member-badge-recto.component.html',
  styleUrl: './member-badge-recto.component.css'
})
export class MemberBadgeRectoComponent {
  @Input() member!: Member;
  private URL: string = environment.FILEURL;

  formatDate(date?: Date | string) {
    if (!date) return 'no date';
    return dayjs(date).format('DD / MM / YYYY');
  }

  getfileUrl(fileName: any) {
    return `${this.URL}/${fileName ??= 'user.png'}`;
  }

}
