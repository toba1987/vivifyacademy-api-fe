import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	ContactsService,
      AuthService,
      AuthGuard,
      GuestGuard

  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
