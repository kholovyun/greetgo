import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { Observable, from , map ,of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import  IContact  from 'src/interfaces/IContact';
import IPermission from 'src/interfaces/IPermission';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  contacts: any = [];
  scannedResult: any;
  statusScan: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getContacts().subscribe(
      (contacts) => {
        this.contacts = contacts;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getContacts(): Observable<IContact[]> {
    return from(Contacts.requestPermissions()).pipe(
      switchMap((permission: IPermission) => {
        if (!permission || permission.contacts !== 'granted') {
          return of([]);
        }
        
        return from(Contacts.getContacts({projection: { name: true, phones: true } })).pipe(
          map((allContacts: any) => {
            return allContacts.contacts.map((contact: IContact) => ({
              contact: contact
            }));
          })
        );
      })
    );
  }
}
