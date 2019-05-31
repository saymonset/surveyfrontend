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

/*Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');
*/
/*Survey.Survey.cssType = 'bootstrap';
Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");*/
/*
Survey.defaultBootstrapMaterialCss.navigationButton = 'btn btn-green';
Survey.defaultBootstrapMaterialCss.rating.item = 'btn btn-default my-rating';
Survey.StylesManager.applyTheme('bootstrapmaterial');
*/
// Survey.StylesManager.applyTheme('node_modules/bootstrap/dist/css/bootstrap.css');
/*Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");
Survey
  .StylesManager
  .applyTheme();*/
// Survey.Survey.cssType = 'bootstrap'
Survey
  .StylesManager
  .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  template: `<div><div id='surveyElement'></div></div>`
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  json: object;


  click(result) {
    console.log(result);

  }




  ngOnInit() {

    const surveyModel = new Survey.Model(this.json);
        surveyModel.onComplete
      .add(result =>
        this.submitSurvey.emit(result.data)
      );
    Survey.SurveyNG.render('surveyElement', {
      model: surveyModel

    });
  }
}
