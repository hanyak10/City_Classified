import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {

  classifieds: any=[];

  constructor(private service: CustomerService){}

  ngOnInit(){
    this.getAllClassified();
  }
  getAllClassified(){
    this.service.getAllClassified().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImage: string; returnedImage: string; }) =>{
        element.processedImage = 'data:image/jpeg;base64,'+element.returnedImage;
        this.classifieds.push(element);
      });
    })
  }

}
