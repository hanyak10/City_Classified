import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  classifieds: any=[];

  constructor(private adminService : AdminService,
    private message: NzMessageService
  ){}

  ngOnInit(){
    this.getAllClassified();
  }
  getAllClassified(){
    this.adminService.getAllClassified().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImage: string; returnedImage: string; }) =>{
        element.processedImage = 'data:image/jpeg;base64,'+element.returnedImage;
        this.classifieds.push(element);
      });
    })
  }

  deleteClassified(id: number){
    console.log(id);
    this.adminService.deleteClassified(id).subscribe((res)=>{
      this.getAllClassified();
      this.message.success("Classified deleted Succesfully", { nzDuration: 3000});
    })
  }

}
