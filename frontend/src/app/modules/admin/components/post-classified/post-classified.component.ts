import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-classified',
  templateUrl: './post-classified.component.html',
  styleUrl: './post-classified.component.scss'
})
export class PostClassifiedComponent {

  postClassifiedForm!: FormGroup;
  isSpinning:boolean=false;
  selectedFile: File | null=null;
  imagePreview: string | ArrayBuffer | null=null;
  listOfOption: Array<{label: string; value: string}> = [];
  listOfCategory= ["Real States", "Vechiles", "Job","Services", "For Sale", "Community", "Pets","Education", "Health"];
  listOfType= ["Entertainment", "Job", "Sale ads", "Property"];
  listOfState= ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra"," Manipur"," Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh","Uttarakhand"];
  listOfCountry= ["India", "USA", "UK", "China", "Srilanka"];

  constructor(private fb: FormBuilder,
    private adminService : AdminService,
    private message: NzMessageService,
    private router: Router
  ){}

  ngOnInit(){
    this.postClassifiedForm = this.fb.group({
      //image:[null,Validators.required],
      category: [null, Validators.required],
      name:[null, Validators.required],   
      type: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      CityName: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  postClassified(): void {
    if (this.postClassifiedForm.valid && this.selectedFile) {
      console.log(this.postClassifiedForm.value);
      this.isSpinning=true;
      const formData: FormData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('category', this.postClassifiedForm.get('category')?.value);
      formData.append('name', this.postClassifiedForm.get('name')?.value);
      formData.append('type', this.postClassifiedForm.get('type')?.value);
      formData.append('state', this.postClassifiedForm.get('state')?.value);
      formData.append('country', this.postClassifiedForm.get('country')?.value);
      formData.append('CityName', this.postClassifiedForm.get('CityName')?.value);
      formData.append('description', this.postClassifiedForm.get('description')?.value);
      console.log(formData);
      this.adminService.postClassified(formData).subscribe((res)=>{
        this.isSpinning=false;
        this.message.success("Classified posted Successfully", {nzDuration: 5000});
        this.router.navigateByUrl("/admin/dashboard");
        console.log(res);
      }, error=> {
        this.message.error("Error while posting classified", {nzDuration: 5000})
      })
    }
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
