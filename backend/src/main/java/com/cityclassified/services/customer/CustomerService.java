package com.cityclassified.services.customer;

import com.cityclassified.dto.BookClassifiedDto;
import com.cityclassified.dto.ClassifiedDto;

import java.util.List;

public interface CustomerService {

    List<ClassifiedDto> getAllClassified();

    boolean bookClassified(BookClassifiedDto bookClassifiedDto);

    ClassifiedDto getClassifiedById(Long classifiedId);
}
