import {Injectable} from '@angular/core'
import { ConsoleService } from './console.service';

@Injectable({providedIn:'root'})
export class UserService{
    constructor(private consoleService:ConsoleService){

    }
    users: { name: string }[] = [
        {
          name: 'Francis',
        },
        { name: 'Steve' },
        { name: 'John' },
      ];
      onUserRemoved(toRemove: { position: number }) {
        this.users.splice(toRemove.position, 1);
        this.consoleService.consoleLog('A user was removed')
      }
      onAddUser(user:{name:string}){
        this.users.push(user)
        this.consoleService.consoleLog('userWasAdded')
    
      }
    // consoleSomething(){
    //     console.log('something happened!!')
    // }

}