import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivateComponent {
  canDeactivate: () => boolean;
}
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateService
  implements CanDeactivate<DeactivateComponent> {
  canDeactivate(
    component: DeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    console.log(currentRoute);
    alert('sorry youre not allowed to leave');
    return false;
  }
}
