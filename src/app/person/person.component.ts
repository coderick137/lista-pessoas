import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/person';
import { PersonService } from 'src/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];



  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe({
      next: persons => this.persons = persons,
      error: err => console.log(err)
    })
  }

}
