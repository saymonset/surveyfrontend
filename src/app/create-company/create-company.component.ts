import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateDataService } from '../service/createData.service';
import { LoaderService } from '../loader.service';
import { TokenService } from '../service/token.service';
import {COMPLETE_OBSERVER, CompleteObserver} from '../observables-observer-state/completeObserver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {


  form: FormGroup;
  error: string;
  sendResponse = { status: '', message: '', filePath: '' };
  loading: boolean;
  porcent:number = 0;
  isCompleteUploadFile: boolean;


  constructor(private formBuilder: FormBuilder, private createDataService: CreateDataService,
              private loaderService: LoaderService, private tokenService: TokenService,
              @Inject(COMPLETE_OBSERVER) private completeUploadFile: Observable<CompleteObserver>
  ) {
    /**Cargando el archivo .. se prende este observer*/
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
      if (this.loading){
        this.sendResponse.status = 'progress';
        this.porcent = this.porcent + 1;
      }
    });


    completeUploadFile.subscribe((update) => {
      if (update.complet) {
        this.isCompleteUploadFile = true;
      }
    });
  }




  ngOnInit() {
    this.form = this.formBuilder.group({
      file: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    this.sendResponse.status = 'progress';
    formData.append('file', this.form.get('file').value);
    formData.append('codeCompany', this.tokenService.getCodeCompany());
    this.createDataService.send(formData).subscribe(
      (res) => this.sendResponse = res,
      (err) => this.error = err
    );
  }

}
