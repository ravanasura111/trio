import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurcompanyComponent } from './components/aboutus/ourcompany/ourcompany.component';
import { OurteamComponent } from './components/aboutus/ourteam/ourteam.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { EngineeringservicesComponent } from './components/engineeringservices/engineeringservices.component';
import { TechnicalinfoComponent } from './components/technicalinfo/technicalinfo.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TrivisiongalleryComponent } from './components/trivisiongallery/trivisiongallery.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolingComponent } from '../app/components/capabilities/tooling/tooling.component';
import { CComponent } from '../app/components/capabilities/cmm/c.component';
import { WindstripComponent } from '../app/components/capabilities/windstrip/wind.component';
import { ColonyComponent } from '../app/components/capabilities/colony/colony.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { CncComponent } from './components/capabilities/cnc/cnc.component';
import { WaterslideComponent } from './components/capabilities/waterslide/waterslide.component';
import { RailtoolingComponent } from './components/projects/railtooling/railtooling.component';
import { RemComponent } from './components/projects/rem/rem.component';
import { KolkaComponent } from './components/projects/kolka/kolka.component';
import { WindtoolComponent } from './components/projects/windtool/windtool.component';
import { LushComponent } from './components/projects/lush/lush.component';
import { TrafficComponent } from './components/projects/traffic/traffic.component';
import { EngineeringComponent } from './components/capabilities/engineering/engineering.component';
import { BridgesComponent } from './components/projects/bridges/bridges.component';
import { PatternComponent } from './components/capabilities/pattern/pattern.component';
import { MouldComponent } from './components/capabilities/mould/mould.component';
import { VaccumComponent } from './components/capabilities/vaccum/vaccum.component';
import { MissionComponent } from './components/aboutus/mission/mission.component';
import { VissionComponent } from './components/aboutus/vission/vission.component';
import { DirectorComponent } from './components/aboutus/director/director.component';
import { CertificateComponent } from './components/aboutus/certificate/certificate.component';
import { ContactComponent } from './components/more/contact/contact.component';
import { AwardsComponent } from './components/more/awards/awards.component';
import { InjectionComponent } from './components/capabilities/injection/injection.component';
import { LrtmComponent } from './components/capabilities/lrtm/lrtm.component';
import { MetalComponent } from './components/capabilities/metal/metal.component';
import { OpenmouldComponent } from './components/capabilities/openmould/openmould.component';
import { PrepeComponent } from './components/capatbilites/prepe/prepe.component';
import { ProtoComponent } from './components/capabilities/proto/proto.component';
import { TriovisionService } from './triovision.service';
import { CurrentjobsComponent } from './components/more/currentjobs/currentjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    OurcompanyComponent,
    OurteamComponent,
    ProjectsComponent,
    CapabilitiesComponent,
    SoftwaresComponent,
    EngineeringservicesComponent,
    TechnicalinfoComponent,
    GalleryComponent,
    NewsComponent,
    ContactusComponent,
    TrivisiongalleryComponent,
    HeaderComponent,
    FooterComponent,
    ToolingComponent,
    CComponent,
    WindstripComponent,
    ColonyComponent,
    NewsfeedComponent,
    CncComponent,
    WaterslideComponent,
    RailtoolingComponent,
    RemComponent,
    KolkaComponent,
    WindtoolComponent,
    LushComponent,
    TrafficComponent,
    EngineeringComponent,
    BridgesComponent,
    PatternComponent,
    MouldComponent,
    VaccumComponent,
    MissionComponent,
    VissionComponent,
    DirectorComponent,
    CertificateComponent,
    ContactComponent,
    AwardsComponent,
    InjectionComponent,
    LrtmComponent,
    MetalComponent,
    OpenmouldComponent,
    PrepeComponent,
    ProtoComponent,
    CurrentjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,YouTubePlayerModule,LightboxModule,HttpClientModule
  ],
  providers: [TriovisionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

