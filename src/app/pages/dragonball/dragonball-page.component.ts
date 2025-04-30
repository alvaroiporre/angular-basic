import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(100);

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
    {
      id: 3,
      name: 'Piccolo',
      power: 3000,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500,
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
