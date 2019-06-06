import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendSurveyService } from '../service/send-survey';
import { LoaderService } from '../loader.service';
import { TokenService } from '../service/token.service';

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


  constructor(private formBuilder: FormBuilder, private sendSurveyService: SendSurveyService,
              private loaderService: LoaderService, private tokenService: TokenService) {
    this.loaderService.isLoading.subscribe((v) => {
    //  console.log(v);
      this.loading = v;
      if (this.loading){
        this.sendResponse.status = 'progress';
        this.porcent = this.porcent + 1;
      }
    }); }

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
