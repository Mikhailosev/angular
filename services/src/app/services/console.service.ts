import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class ConsoleService{
    consoleLog(log:string){
        console.log(log);
    }
}