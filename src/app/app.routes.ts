import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { MiAgenda } from './pages/mi-agenda/mi-agenda';
import { Catalogo } from './pages/catalogo/catalogo';
import { Admin } from './pages/admin/admin';
import { AvisosBoard } from './pages/avisos-board/avisos-board';
import { SesionForo } from './pages/sesion-foro/sesion-foro';
import { authGuard } from './core/guards/auth-guard';
import { publicGuard } from './core/guards/auth-guard';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    // Ruta pública
    path: '',
    canActivate: [publicGuard],
    component: Landing,
  },
  {
    // Ruta pública para registro
    path: 'registro',
    canActivate: [publicGuard],
    component: Register,
  },
  {
    // Rutas privadas (protegidas por authGuard, con Navbar del Layout)
    path: 'app',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      { path: 'home', component: Home },
      // EP-03/04: Mis Tutorías (Tutor: HU-09/10/11/12 + Alumno: HU-15/16)
      { path: 'mis-tutorias', component: MiAgenda },
      // EP-04: Catálogo de tutorías (HU-13/14)
      { path: 'catalogo', component: Catalogo },
      { path: 'admin', component: Admin },
      { path: 'avisos', component: AvisosBoard },
      { path: 'sesion/:id/foro', component: SesionForo },
      // Aquí agregarán las rutas de los demás compañeros (admin, etc.)
    ],
  },
  {
    // Redirección si se escribe una URL que no existe
    path: '**',
    redirectTo: '',
  },
];
