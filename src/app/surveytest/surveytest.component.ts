import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendSurveyService } from '../service/survey.service';
import { SurveyDTO } from '../dto/SurveyDTO';
import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
  styleUrls: ['./surveytest.component.css']
})
export class SurveytestComponent implements OnInit {


  error: string;
  surveyDTO : SurveyDTO;
  codigoEncuesta: string = '';
  codeCompany: string =  '';
  email : string = '';
  lang : string = '';
  json = {};
  title = "app works!";

  constructor(private route: ActivatedRoute, private sendSurveyService: SendSurveyService
    , private tokenService: TokenService) {
 }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.codigoEncuesta = params['codigoEncuesta'];
      this.email = params['email'];
      this.lang =  params['lang'];
      this.codeCompany =  params['codeCompany'];

    });

    this.sendSurveyService.sentVerify(this.codigoEncuesta, this.email, this.lang, this.codeCompany).subscribe(
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

    let resultAll = {result: {}, surveyDTO: {}, origin: {}, codeCompany: {}};

    resultAll.result = result;
    resultAll.origin = JSON.parse(this.surveyDTO.json);
    resultAll.surveyDTO = this.surveyDTO;
    resultAll.codeCompany =  this.codeCompany; //this.tokenService.getCodeCompany();
    this.sendSurveyService.sentResult(resultAll).subscribe(
      (res) => this.surveyDTO = res,
      (err) => this.error = err
    );

    document
      .querySelector('#surveyResult')
      .innerHTML = "result: " + JSON.stringify(result);
  }

}
