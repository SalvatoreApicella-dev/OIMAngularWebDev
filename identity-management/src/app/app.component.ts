import { Component } from '@angular/core';
import { identity } from './identities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'identity-management';

  Utente : identity[] =
  [{
    Firstname : "Salvatore",
    Lastname : "Apicella",
    AccontName : "Sapicella",
    PersonalNumber : 3333333333,
    Department : "IT",
    EntryDate : new Date('22/11/2023'),
    ExitDate : new Date('22/11/2024')
  },
  {
    Firstname : "Piero",
    Lastname : "Rossi",
    AccontName : "Prossi",
    PersonalNumber : 3333333333,
    Department : "HR",
    EntryDate : new Date('22/04/2023')}
  ];
}
