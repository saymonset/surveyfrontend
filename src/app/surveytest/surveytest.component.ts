import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendSurveyService } from '../service/send-survey';
import { SurveyDTO } from '../dto/SurveyDTO';
@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
  styleUrls: ['./surveytest.component.css']
})
export class SurveytestComponent implements OnInit {


  error: string;
  surveyDTO : SurveyDTO;
  codigoEncuesta: string = '';
  email : string = '';
  lang : string = '';
  json = {};
  title = "app works!";

  constructor(private route: ActivatedRoute, private sendSurveyService: SendSurveyService) {
 }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.codigoEncuesta = params['codigoEncuesta'];
      this.email = params['email'];
      this.lang =  params['lang'];
    });

    this.sendSurveyService.sentVerify(this.codigoEncuesta, this.email, this.lang ).subscribe(
      (res) => this.surveyDTO = res,
      (err) => this.error = err
    );
  }





  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    //TODO update with your own behavior
    console.log(result);

    this.sendSurveyService.sentResult(result).subscribe(
      (res) => this.surveyDTO = res,
      (err) => this.error = err
    );

    document
      .querySelector('#surveyResult')
      .innerHTML = "result: " + JSON.stringify(result);
  }

}
