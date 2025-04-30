import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-super',
  imports: [],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter() {
    if (!this.name() || !this.power || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters.length,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((current) => [...current, newCharacter]);
    // this.characters().push(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
