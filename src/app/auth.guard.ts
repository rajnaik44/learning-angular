import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)

  let isloggedin=sessionStorage.getItem('isloggedin');


  if(isloggedin=='false'){
    alert('please login . redirecting to login page');
    _router.navigate(['login'])
    return false
  }
  return true;
};
