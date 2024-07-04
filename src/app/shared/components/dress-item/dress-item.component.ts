import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dress } from '../../models/dress.model';

/**
 * The DressItemComponent is responsible for displaying an individual dress item.
 * It expects a `dress` input property of type `Dress` and provides utility methods
 * to split the name of the dress into the first word and the remaining words.
 */
@Component({
  selector: 'app-dress-item',
  templateUrl: './dress-item.component.html',
  styleUrls: ['./dress-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DressItemComponent {
  /**
   * The dress item to display.
   * It is an instance of the `Dress` model.
   */
  @Input() dress!: Dress;

  /**
   * Extracts the first word from the given name.
   * 
   * @param name - The full name string.
   * @returns The first word of the name.
   */
  getFirstWord(name: string): string {
    return name.split(' ')[0];
  }

  /**
   * Extracts the remaining words from the given name, after the first word.
   * 
   * @param name - The full name string.
   * @returns The remaining words of the name.
   */
  getRemainingWords(name: string): string {
    return name.substring(name.indexOf(' ') + 1);
  }
}
