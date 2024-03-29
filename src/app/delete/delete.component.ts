import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  @Input() item:String |undefined

  // event creation
  @Output() onRemove=new EventEmitter()
  @Output() onDelete=new EventEmitter()
  cancel()
  {
        this.onRemove.emit()
  }
  delete()
  {
      this.onDelete.emit(this.item)
  }
  
}
