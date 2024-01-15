import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MedicamentosComponent } from './productos/medicamentos/medicamentos.component';
import { VerProductoComponent } from './productos/ver-producto/ver-producto.component';
import { CrearComponent } from './usuarios/crear/crear.component';
import { InicioSesionComponent } from './usuarios/inicio-sesion/inicio-sesion.component';
import { BuscarComponent } from './productos/buscar/buscar.component';

export const routes: Routes = [{path: '', component: PrincipalComponent}, {path: 'medicamentos', component: MedicamentosComponent}, 
{path: 'verProducto/:ID', component: VerProductoComponent},
{path: 'usuarios/crear', component: CrearComponent},
{path: 'usuarios/iniciar-sesion', component: InicioSesionComponent},
{path: 'buscar/:ID', component: BuscarComponent},
{path: '**', redirectTo: ''},];
//Si a una ruta le pones ":ALGO" en el path, va a tomar ese ALGO como una variable, ojito