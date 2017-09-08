import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { ContactsService } from '../../../shared/services/contacts.service';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  
  private contact: Contact;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
        .subscribe((data: {contact: Contact}) => {
        this.contact = data.contact;
      })
  }
}
