package com.cityclassified.services.admin;

import com.cityclassified.dto.ClassifiedDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    boolean postClassified(ClassifiedDto classifiedDto) throws IOException;

    List<ClassifiedDto> getAllClassified();

    void deleteClassified(Long id);

    ClassifiedDto getClassifiedById(Long id);

    boolean updateCLassified(Long classifiedId, ClassifiedDto classifiedDto) throws IOException;
}
