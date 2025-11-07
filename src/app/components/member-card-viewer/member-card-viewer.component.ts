import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from '../../interfaces/member';
import { MemberBadgeComponent } from '../member-badge/member-badge.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-card-viewer',
  standalone: true,
  imports: [MemberBadgeComponent, FormsModule],
  templateUrl: './member-card-viewer.component.html',
  styleUrl: './member-card-viewer.component.css'
})
export class MemberCardViewerComponent {
  @Input() member!: Member[];
  @Output('closed') emiterClose = new EventEmitter<boolean>();
  public checkData: { stamp: boolean, signature: boolean } = { stamp: false, signature: false }
  
  close() {
    this.emiterClose.emit(true);
  }

  print() {
    window.print();
  }

}
