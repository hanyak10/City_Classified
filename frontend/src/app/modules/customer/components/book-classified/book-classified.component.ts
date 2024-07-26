import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-book-classified',
  templateUrl: './book-classified.component.html',
  styleUrl: './book-classified.component.scss'
})
export class BookClassifiedComponent {

  classifiedId!: number;
  classified: any;
  processedImage: any;
  validateForm!: FormGroup;
  isSpinning= false;
  dateFormat!:"DD-MM-YYYY";

  constructor(private service: CustomerService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ){}

  ngOnInit(){
    this.classifiedId = +this.activatedRoute.snapshot.params["id"];
    this.validateForm=this.fb.group({
      toDate: [null, Validators.required],
      fromDate: [null, Validators.required],
    })
    this.getClassifiedById();

  }
  getClassifiedById(){
    this.service.getClassifiedById(this.classifiedId).subscribe((res)=>{
      console.log(res);
      this.processedImage= 'data:image/jpeg;base64,'+ res.returnedImage;
      this.classified=res;
    })
  }

  bookClassified(data: any){
    console.log(data);
     this.isSpinning= true;
     let bookClassifiedDto={
       toDate: data.toDate,
       fromDate: data.fromDate,
       userId:StorageService.getUserId(),
       classifiedId: this.classifiedId
     }
     this.service.bookClassified(bookClassifiedDto).subscribe((res)=>{
       console.log(res);
      this.message.success("Booking request submitted successfully", { nzDuration: 3000});
      this.router.navigateByUrl("/customer/dashboard");
    }, error=>{
      this.message.error("Something went wrong", { nzDuration: 3000});
    })
  }
}
