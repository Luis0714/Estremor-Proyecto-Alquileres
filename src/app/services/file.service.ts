import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private messageService: MessageService) { }

  download(documentName: string) {
    fetch(`${Environment.azureStorageBaseUrl}/estremoruserscontainer/${documentName}`)
      .then(resp => resp.blob())
      .then(blobobject => {
        const blob = window.URL.createObjectURL(blobobject);
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = blob;
        anchor.download = documentName;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(blob);
      })
      .catch(() => this.messageService.add({ severity: 'error', detail: 'Error downloading the file' }));
  }
}
