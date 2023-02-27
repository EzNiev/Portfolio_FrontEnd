import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

// Importamos ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#ffffff",
      "backgroundOpacity": 0.3,
      "backgroundStrokeWidth": 0,
      "backgroundPadding": -10,
      "radius": 60,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 8,
      "outerStrokeColor": "#ffffff",
      "outerStrokeLinecap": "butt", 
      "innerStrokeColor": "#ffffff",
      "innerStrokeWidth": 0.5,
      "titleFontSize": "19",
      "subtitleColor": "#444444",
      "animationDuration": 800,
      "showSubtitle": false,
      "clockwise": false, 
      "responsive": true})
  ],
providers: [
  interceptorProvider,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
