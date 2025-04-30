import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.iterface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<Character[]>();


}
