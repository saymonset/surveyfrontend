import { Injectable } from "@angular/core";
@Injectable()
export class UploadFileResponseDTO {
  private fileName: string;
  private fileDownloadUri: string;
  private fileType: string;
  private size: number;
  private status: string;
  private message: string;
  private filePath: string;
}
