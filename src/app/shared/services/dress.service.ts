import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DRESSES } from '../mock-api/mock-dresses';
import { Dress } from '../models/dress.model';

/**
 * @description
 * The DressService class provides methods to fetch dress data.
 */
@Injectable({
  providedIn: 'root',
})
export class DressService {
  /**
   * @description
   * A private property that holds an array of Dress objects.
   * Initialized with mock data from the mock-dresses file.
   */
  private dresses: Dress[] = DRESSES;

  /**
   * @description
   * Retrieves the list of dresses.
   *
   * @returns {Observable<Dress[]>} An Observable emitting the array of dresses.
   */
  getDresses(): Observable<Dress[]> {
    return of(this.dresses);
  }
}
