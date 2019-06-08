import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendSurveyService } from '../service/survey.service';
import { LoaderService } from '../loader.service';
import { TokenService } from '../service/token.service';
import {COMPLETE_OBSERVER, CompleteObserver} from '../observables-observer-state/completeObserver';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-send-survey',
  templateUrl: './send-survey.component.html',
  styleUrls: ['./send-survey.component.css']
})
export class SendSurveyComponent implements OnInit {
/*  title = 'materialApp';
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;*/
  form: FormGroup;
  error: string;
  sendResponse = { status: '', message: '', filePath: '' };
  loading: boolean;
  porcent:number = 0;
  isCompleteUploadFile: boolean;


  constructor(private formBuilder: FormBuilder, private sendSurveyService: SendSurveyService,
              private loaderService: LoaderService, private tokenService: TokenService,
              @Inject(COMPLETE_OBSERVER) private completeUploadFile: Observable<CompleteObserver>
  ) {
    this.loaderService.isLoading.subscribe((v) => {
    //  console.log(v);
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
    formData.append('file', this.form.get('file').value);
    formData.append('codeCompany', this.tokenService.getCodeCompany());
    this.sendSurveyService.send(formData).subscribe(
      (res) => this.sendResponse = res,
      (err) => this.error = err
    );
  }
}
