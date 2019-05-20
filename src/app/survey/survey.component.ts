import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';

import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  template: `<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div></div>`
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  json: object;


  click(result) {
    console.log(result);

  }

  ngOnInit() {
    Survey.Survey.cssType = "bootstrap";
//    Survey.defaultBootstrapCss.navigationButton = "btn btn-blue";
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }

      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete
      .add(result =>
        this.submitSurvey.emit(result.data)
      );
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}

/**
 *    console.log(JSON.stringify($rootScope.survey));
 var model = new Survey.Model(JSON.stringify($rootScope.survey));
 model.onComplete.add(function (surveyresult) {
        var result = {};
        result.result = surveyresult.data;
        result.survey = $rootScope.survey;
        result.surveyid = $rootScope.surveyid;
        result.mazdacode = $rootScope.mazdacode;
        result.clientid = $rootScope.clientid;
        result.name = $rootScope.name;
        result.surname = $rootScope.surname;
        result.email = $rootScope.email;
        result.branch = $rootScope.branch;
        result.segment = $rootScope.segment;
        result.segmentId = $rootScope.segmentId;
        result.cluster = $rootScope.cluster;
        result.criticalmoment = $rootScope.criticalmoment;
        result.lang = $rootScope.lang;
        SurveyService.save(result).then(function (data) {

            for (var prop in $rootScope) {
                if (prop.substring(0, 1) !== '$' && prop.substring(0, 6) !== 'device') {
                    delete $rootScope[prop];
                }
            }
        });
    });
 //$("#surveyElement").Survey({model: model});
 model.render("surveyElement");
 * */
