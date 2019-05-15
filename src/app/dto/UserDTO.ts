import { Injectable } from "@angular/core";
@Injectable()
export class UserDTO {
  public id: number;
  public username: string;
  public password: string;

    clear() {
      this.id = null;
      this.username = this.password =  null;
    }
}
