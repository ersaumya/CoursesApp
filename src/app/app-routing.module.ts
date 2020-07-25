import { CustomPreloading } from './services/custom-preloading';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    //canLoad:[CanLoadAuthGuard]
    data: {
      preload: true,
    },
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "helpdesk-chat",
    component: ChatComponent,
    outlet:'chat'
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //preloadingStrategy: PreloadAllModules,
      preloadingStrategy: CustomPreloading,
    }),
  ],
  exports: [RouterModule],
  providers: [CanLoadAuthGuard, CustomPreloading],
})
export class AppRoutingModule {}
