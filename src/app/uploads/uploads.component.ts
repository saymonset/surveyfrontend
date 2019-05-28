import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../service/file-upload.service';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  form: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };



  constructor(private formBuilder: FormBuilder, private uploadService: FileUploadService) { }

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
    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }
}
