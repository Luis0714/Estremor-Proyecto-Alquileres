import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { User } from 'src/app/models/user.model';
import { FileService } from 'src/app/services/file.service';
import { UserService } from 'src/app/services/user.service';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: Partial<User>[] = [];
  formGroup?: FormGroup;
  displayDialog = false;
  carIdToEdit: number = 0;
  loadingTable = false;
  azureStorageBaseUrl = Environment.azureStorageBaseUrl;
  filteredUsers: Partial<User>[] = []; // Lista filtrada para paginado
  pageSize: number = 10; // Tamaño de página
  pageNumber: number = 1; // Número de página actual
  totalUsers: number = 0; // Total de usuarios
  searchName: string = ''; // Filtro por nombre
  searchEmail: string = ''; // Filtro por correo

  @ViewChild('imageFileUpload', { static: false }) imageFileUpload?: FileUpload;
  @ViewChild('documentFileUpload', { static: false }) documentFileUpload?: FileUpload;

  constructor
  (
    private userService: UserService, 
    private formBuilder: FormBuilder, 
    private spinner: NgxSpinnerService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private fileService: FileService
    ) { }

  ngOnInit(): void {
   this.getAllusers();
    this.buildForm();
  }

  private getAllusers(){
    this.loadingTable = true;
    this.userService.getAllUsers().subscribe({
      next: response => {
        this.users = response.data;
        this.loadingTable = false;
      },
      error: () => {
        this.loadingTable = false;
      }
    });
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['Martinez', Validators.required],
      lastName: ['LastName', Validators.required],
      secondLastName:['SecudLastName', Validators.required],
      dateOfBirth: ['', Validators.required],
      numberPhone: ['30203993323', Validators.required],
      document: ['1101878732', Validators.required],
      email: ['luisandremartinez@gmail.com', Validators.required],
      password: ['Hola123*', Validators.required],
      documentTypeId: ['1',Validators.required],
      addressId: ['0',Validators.required],
      rolId: ['1', Validators.required]
    });
  }

  applyFiltersAndPagination() {
    this.filteredUsers = this.users
      .filter(user => user.name?.includes(this.searchName) && user.email?.includes(this.searchEmail));
    this.totalUsers = this.filteredUsers.length;
    this.filteredUsers = this.filteredUsers
      .slice((this.pageNumber - 1) * this.pageSize, (this.pageNumber - 1) * this.pageSize + this.pageSize);
  }

  editCar(user: Partial<User>) {
  //   this.displayDialog = true;
  //   this.carIdToEdit = car.id;

  //   this.formGroup?.controls['brand'].setValue(car.brand);
  //   this.formGroup?.controls['model'].setValue(car.model);
  //   this.formGroup?.controls['year'].setValue(car.year);
  }

  onSubmit() {
    this.spinner.show();
    let data: Partial<User> = {
      ...this.formGroup?.value
    };

    if (this.imageFileUpload?.files.length) {
      data.image = this.imageFileUpload?.files[0];
    }

    // if (this.carIdToEdit) {
    //   this.apiService.updateCar(this.carIdToEdit, request).subscribe({
    //     next: car => {
    //       this.spinner.hide();
    //       var index = this.cars.findIndex(c => c.id == this.carIdToEdit);
    //       if (index >= 0) {
    //         this.cars[index] = car;
    //       }

    //       this.messageService.add({ severity: 'success', detail: 'Car updated' });
    //       this.carIdToEdit = 0;
    //       this.resetVariables();
    //     },
    //     error: () => {
    //       this.spinner.hide();
    //       this.messageService.add({ severity: 'error', detail: 'Error updating car' });
    //     }
    //   });
    // } else {
      this.userService.createUser(data).subscribe({
        next: response => {
          this.spinner.hide();
          this.users.push(response.data);
          this.messageService.add({ severity: 'success', detail: 'User created with exit' });
          this.resetVariables();
        },
        error: () => {
          this.spinner.hide();
          this.messageService.add({ severity: 'error', detail: 'Error adding user' });
        }
      });
    //}
  }

  private resetVariables() {
    this.displayDialog = false;
    this.imageFileUpload?.clear();
    this.documentFileUpload?.clear();
    this.formGroup?.reset();
  }

   deleteCar(user: Partial<User>) {
  //   this.confirmationService.confirm({
  //     message: `Are you sure you want delete the car with the following data?
  //       <br><b>Brand</b>: ${car.brand}<br><b>Model</b>: ${car.model}<br><b>Year</b>: ${car.year}`,
  //     accept: () => {
  //       this.spinner.show();
  //       this.apiService.deleteCar(car.id).subscribe({
  //         complete: () => {
  //           this.spinner.hide();
  //           this.cars = this.cars.filter(c => c.id != car.id);
  //           this.messageService.add({ severity: 'success', detail: 'Car deleted' });
  //         },
  //         error: () => {
  //           this.spinner.hide();
  //           this.messageService.add({ severity: 'error', detail: 'Error deleting car' });
  //         }
  //       });
  //     },
  //   });
  }

  download(documentName: string) {
    this.fileService.download(documentName);
  }

}
