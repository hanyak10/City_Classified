package com.cityclassified.services.controller;

import com.cityclassified.dto.ClassifiedDto;
import com.cityclassified.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/classifieds")
    public ResponseEntity<?> postClassified(@ModelAttribute ClassifiedDto classifiedDto) throws IOException{
        boolean success = adminService.postClassified(classifiedDto);
        if(success){
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @GetMapping("/classified")
    public ResponseEntity<?> getAllClassified(){
        return ResponseEntity.ok(adminService.getAllClassified());
    }

    @DeleteMapping("/classified/{id}")
    public ResponseEntity<Void> deleteClassified(@PathVariable Long id){
        adminService.deleteClassified(id);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/classified/{id}")
    public ResponseEntity<ClassifiedDto> getClassifiedById(@PathVariable Long id){
        ClassifiedDto classifiedDto = adminService.getClassifiedById(id);
        return ResponseEntity.ok(classifiedDto);
    }

    @PutMapping("/classified/{classifiedId}")
    public ResponseEntity<Void> updateClassified(@PathVariable Long classifiedId, @ModelAttribute ClassifiedDto classifiedDto) throws IOException {
       try {
           boolean success = adminService.updateCLassified(classifiedId, classifiedDto);
           if (success) return ResponseEntity.status(HttpStatus.OK).build();
           return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
       }catch (Exception e){
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
       }
    }
}
