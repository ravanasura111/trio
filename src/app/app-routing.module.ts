import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { CComponent } from '../app/components/capabilities/cmm/c.component';
import { WindstripComponent } from '../app/components/capabilities/windstrip/wind.component';
import { ColonyComponent } from '../app/components/capabilities/colony/colony.component';
import { CncComponent } from '../app/components/capabilities/cnc/cnc.component';
import { WaterslideComponent } from '../app/components/capabilities/waterslide/waterslide.component';
import { RailtoolingComponent } from '../app/components/projects/railtooling/railtooling.component';
import { RemComponent } from '../app/components/projects/rem/rem.component';
import { KolkaComponent } from '../app/components/projects/kolka/kolka.component';
import { WindtoolComponent } from '../app/components/projects/windtool/windtool.component';
import { LushComponent } from '../app/components/projects/lush/lush.component';
import { TrafficComponent } from '../app/components/projects/traffic/traffic.component';
import { EngineeringComponent } from '../app/components/capabilities/engineering/engineering.component';
import { BridgesComponent } from '../app/components/projects/bridges/bridges.component';
import { PatternComponent } from '../app/components/capabilities/pattern/pattern.component';
import { MouldComponent } from '../app/components/capabilities/mould/mould.component';
import { VaccumComponent } from '../app/components/capabilities/vaccum/vaccum.component';
import { MissionComponent } from '../app/components/aboutus/mission/mission.component';
import { VissionComponent } from '../app/components/aboutus/vission/vission.component';
import { DirectorComponent } from '../app/components/aboutus/director/director.component';
import { CertificateComponent } from '../app/components/aboutus/certificate/certificate.component';
import { ContactComponent } from '../app/components/more/contact/contact.component';
import { AwardsComponent } from '../app/components/more/awards/awards.component';
import { InjectionComponent } from '../app/components/capabilities/injection/injection.component';
import { LrtmComponent } from '../app/components/capabilities/lrtm/lrtm.component';
import { MetalComponent } from '../app/components/capabilities/metal/metal.component';
import { OpenmouldComponent } from '../app/components/capabilities/openmould/openmould.component';
import { PrepeComponent } from '../app/components/capatbilites/prepe/prepe.component';
import { ProtoComponent } from '../app/components/capabilities/proto/proto.component';
import { CurrentjobsComponent } from '../app/components/more/currentjobs/currentjobs.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'our', component: OurcompanyComponent},
  {path:'team', component: OurteamComponent},
  {path:'capab', component: CapabilitiesComponent},
  {path:'contact', component: ContactComponent},
  {path:'eng', component: EngineeringservicesComponent},
  {path:'techinfo', component: TechnicalinfoComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'news', component: NewsComponent},
  {path:'contact', component: ContactusComponent},
  {path:'gallery', component: TrivisiongalleryComponent},
  {path:'cmm', component:CComponent },
  {path:'wind', component:WindstripComponent},
  {path:'colo', component:ColonyComponent},
  {path:'cnc', component:CncComponent},
  {path:'water', component:WaterslideComponent},
  {path:'rail', component:RailtoolingComponent},
  {path:'rem', component:RemComponent},
  {path:'kolka', component:KolkaComponent},
  {path:'windtool', component:WindtoolComponent},
  {path:'lush', component:LushComponent},
  {path:'traffic', component:TrafficComponent},
  {path:'engi', component:EngineeringComponent},
  {path:'bridge', component:BridgesComponent},
  {path:'pattern', component:PatternComponent},
  {path:'mould', component:MouldComponent},
  {path:'vacc', component:VaccumComponent},
  {path:'mission', component:MissionComponent},
  {path:'vission', component:VissionComponent},
  {path:'director', component:DirectorComponent},
  {path:'cert', component:CertificateComponent},
  {path:'award', component:AwardsComponent},
  {path:'injection', component:InjectionComponent},
  {path:'lrtm', component:LrtmComponent},
  {path:'metal', component:MetalComponent},
  {path:'omould', component:OpenmouldComponent},
  {path:'prepe', component:PrepeComponent},
  {path:'proto',component:ProtoComponent},
  {path:'currentjobs', component:CurrentjobsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
