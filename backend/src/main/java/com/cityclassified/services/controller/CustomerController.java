package com.cityclassified.services.controller;

import com.cityclassified.dto.BookClassifiedDto;
import com.cityclassified.dto.ClassifiedDto;
import com.cityclassified.services.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/classified")
    public ResponseEntity<List<ClassifiedDto>> getAllClassified(){
        List<ClassifiedDto> classifiedDtoList= customerService.getAllClassified();
        return ResponseEntity.ok(classifiedDtoList);
    }

    @PostMapping("/classified/book")
    public ResponseEntity<Void> bookClassified(@RequestBody BookClassifiedDto bookClassifiedDto){
        boolean success=customerService.bookClassified(bookClassifiedDto);
        if(success) return ResponseEntity.status(HttpStatus.CREATED).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/classified/{classifiedId}")
    public ResponseEntity<ClassifiedDto> getClassifiedById(@PathVariable Long classifiedId){
        ClassifiedDto classifiedDto= customerService.getClassifiedById(classifiedId);
        if(classifiedDto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(classifiedDto);
    }
}
