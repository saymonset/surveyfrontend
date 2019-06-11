import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { SendSurveyService } from '../service/survey.service';
import {isNullOrUndefined} from "util";
import { Observable } from 'rxjs';
import { FilterCHARTDTO } from '../dto/FilterCHARTDTO';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../observables-observer-state/ShareFilterServicioNode';
import { SHARED_FILTER_TERRITORIAL_NODE, ShareFilterTerritorialNode } from '../observables-observer-state/ShareFilterTerritorialNode';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class HomeComponent implements OnInit {
  isLogin = false;
  roles: string[];
  authority: string;
  info: any = {};
  isExistSurveyBd: boolean = false;
  isRoot: boolean = false;
  pathTerritorio: string;
  pathServicio: string;

  constructor(private tokenService: TokenService, private router: Router,
              private sendSurveyService: SendSurveyService,
              @Inject(SHARED_FILTER_SERVICIO_NODE) private servicioNodeEvents: Observable<ShareFilterServicioNode>,
              @Inject(SHARED_FILTER_TERRITORIAL_NODE) private territorialNodeEvents: Observable<ShareFilterTerritorialNode>,
              private modalService: NgbModal) {
    /**Existe ya data cargada para habilitar el boton de mandar encestas*/
    if (sendSurveyService.existSurveyBd(tokenService.getCodeCompany())) {
      this.isExistSurveyBd = true;
      sendSurveyService.setExistSurveyBd(this.isExistSurveyBd);
    }

    territorialNodeEvents.subscribe((update) => {
      //  console.log('Observando territorialNode =' + update.node);
      if (update.treeModelTerritorialDTO.node != undefined) {
        this.pathTerritorio = update.treeModelTerritorialDTO.value;
      }
    });

    servicioNodeEvents.subscribe((update) => {
      // console.log('Observando servicioNodeEvents =' + update.node);
      if (update.treeModelServicioDTO.node != undefined) {
        this.pathServicio = update.treeModelServicioDTO.value;
      }
    });
  }
  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.info = {
        nombreUsuario: this.tokenService.getUserName(),
      };
      this.isRoot = (this.tokenService.getCodeCompany() === isNullOrUndefined || this.tokenService.getCodeCompany() ===  '');
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }



  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    window.location.reload();
    //this.router.navigateByUrl('/login');
    // this.router.navigate(['/login']);
  }
  homesimple(): void {
    this.router.navigateByUrl('/homeSimple');
  }


  closeResult: string;



  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openServ(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
