import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DressItemComponent } from '../../shared/components/dress-item/dress-item.component';
import { Dress } from '../../shared/models/dress.model';
import { DressService } from '../../shared/services/dress.service';

/**
 * The DressListComponent is responsible for displaying a list of dress items.
 * It uses the DressService to fetch the list of dresses and displays them using
 * the DressItemComponent. It also utilizes Angular's AsyncPipe and NgFor directive.
 */
@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrl: './dress-list.component.css',
  standalone: true,
  providers: [DressService],
  imports: [NgFor, AsyncPipe, DressItemComponent],
})
export class DressListComponent {
  /**
   * Observable of an array of Dress items.
   * The dresses$ observable is populated by the DressService.
   */
  dresses$: Observable<Dress[]>;

  /**
   * Constructs the DressListComponent and initializes the dresses$ observable
   * by calling the getDresses method of DressService.
   * 
   * @param dressService - The service used to fetch dress data.
   */
  constructor(private dressService: DressService) {
    this.dresses$ = this.dressService.getDresses();
  }
}
