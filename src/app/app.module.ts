import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

/*
* Imports de compoenntes do primeng
*/
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule} from 'primeng/components/tooltip/tooltip';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { MessageModule } from 'primeng/components/message/message';
import { MessagesModule } from 'primeng/components/messages/messages';

/*
* Imports de services
*/
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastyService } from 'ng2-toasty';
import { LoginService } from './login/login.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EsquecerSenhaComponent } from './esquecer-senha/esquecer-senha.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { BoletimComponent } from './boletim/boletim.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EsquecerSenhaComponent,
    MessageErrorComponent,
    BoletimComponent,
    AlterarSenhaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MessageModule,
    AppRoutingModule,

    DataTableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule,
    MessagesModule
  ],
  providers: [
    MessageService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
