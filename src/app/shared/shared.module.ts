import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { ContactResolver } from './resolvers/contact.resolver';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
  ],
  providers: [
  	ContactsService,
      AuthService,
      AuthGuard,
      GuestGuard,
      ContactResolver

  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
