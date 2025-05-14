import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navbar',
    loadComponent: () =>
      import('./Navbar/navbar/navbar.component').then((m) => m.NavbarComponent),
  },
  {
    path: 'footer',
    loadComponent: () =>
      import('./Footer/footer/footer.component').then((m) => m.FooterComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
