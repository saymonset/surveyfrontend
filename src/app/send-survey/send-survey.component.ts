import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendSurveyService } from '../service/send-survey';
@Component({
  selector: 'app-send-survey',
  templateUrl: './send-survey.component.html',
  styleUrls: ['./send-survey.component.css']
})
export class SendSurveyComponent implements OnInit {

  form: FormGroup;
  error: string;
  sendResponse = { status: '', message: '', filePath: '' };



  constructor(private formBuilder: FormBuilder, private sendSurveyService: SendSurveyService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);
    this.sendSurveyService.send(formData).subscribe(
      (res) => this.sendResponse = res,
      (err) => this.error = err
    );
  }
}
