import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
import { TreeModelServicioDTO } from '../dto/TreeModelServicioDTO';
import { UserService } from '../service/user.service';
import { map } from 'rxjs/operators';
import {AppSettings} from '../dto/AppSettings';
import { TokenService } from '../service/token.service';
import { TreeRepository } from '../repository/tree.repository';
/*const PROTOCOL = 'http';
const PORT = 8443;*/
@Injectable()
export class TreeService {

  constructor ( private tokenService: TokenService,
  private treeRepository: TreeRepository) {
  }

  getTreeTerritorial(): Observable<TreeModelTerritorialDTO[]> {
    return this.treeRepository.getTreeTerritorial();
  }

  getTreeServicio(): Observable<TreeModelServicioDTO[]> {
    return this.treeRepository.getTreeServicio();

  }


}

