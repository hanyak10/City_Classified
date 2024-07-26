import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-classified',
  templateUrl: './update-classified.component.html',
  styleUrls: ['./update-classified.component.scss']
})
export class UpdateClassifiedComponent implements OnInit {

  classifiedId!: number;
  existingImage: string | null=null;
  imageChanged:boolean=false;
  updateForm!:FormGroup;
  isSpinning:boolean=false;
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null=null;
  listOfOption: Array<{label: string; value: string}> = [];
  listOfCategory= ["Real States", "Vechiles", "Job","Services", "For Sale", "Community", "Pets","Education", "Health"];
  listOfType= ["Entertainment", "Job", "Sale ads", "Property"];
  listOfState= ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra"," Manipur"," Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh","Uttarakhand"];
  listOfCountry= ["India", "USA", "UK", "China", "Srilanka"];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.classifiedId = +this.activatedRoute.snapshot.params["id"];
    this.updateForm = this.fb.group({
      category: [null, Validators.required],
      name:[null, Validators.required],   
      type: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      CityName: [null, Validators.required],
      description: [null, Validators.required],
    })
    this.getClassifiedById();
  }

  getClassifiedById() {
    this.isSpinning=true;
    this.adminService.getClassifiedById(this.classifiedId).subscribe((res) => {
      //console.log(res);
      this.isSpinning=false;
      const classifiedDto= res;
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
      console.log(classifiedDto);
      console.log(this.existingImage);
      this.updateForm.patchValue(classifiedDto);
    });
  }

  updateClassified() {
    this.isSpinning=true;
      const formData: FormData = new FormData();
      if(this.imageChanged && this.selectedFile){
        formData.append('image', this.selectedFile);
      }
      formData.append('category', this.updateForm.get('category')?.value);
      formData.append('name', this.updateForm.get('name')?.value);
      formData.append('type', this.updateForm.get('type')?.value);
      formData.append('state', this.updateForm.get('state')?.value);
      formData.append('country', this.updateForm.get('country')?.value);
      formData.append('CityName', this.updateForm.get('CityName')?.value);
      formData.append('description', this.updateForm.get('description')?.value);
      console.log(formData);
      this.adminService.updateClassified(this.classifiedId,formData).subscribe((res)=>{
        this.isSpinning=false;
        this.message.success("Classified updated Successfully", {nzDuration: 5000});
        this.router.navigateByUrl("/admin/dashboard");
        console.log(res);
      }, error=> {
        this.message.error("Error while updating classified", {nzDuration: 5000})
      })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.imageChanged=true;
    this.existingImage=null;
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload=() =>{
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
}
