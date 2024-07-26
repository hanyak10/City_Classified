package com.cityclassified.services.admin;

import com.cityclassified.dto.ClassifiedDto;
import com.cityclassified.entity.Classified;
import com.cityclassified.repository.ClassifiedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final ClassifiedRepository classifiedRepository;

    @Override
    public boolean postClassified(ClassifiedDto classifiedDto) throws IOException {
        try {
            Classified classified = new Classified();
            classified.setName(classifiedDto.getName());
            classified.setCategory(classifiedDto.getCategory());
            classified.setType(classifiedDto.getType());
            classified.setState(classifiedDto.getState());
            classified.setCountry(classifiedDto.getCountry());
            classified.setCityName(classifiedDto.getCityName());
            classified.setDescription(classifiedDto.getDescription());
            classified.setImage(classifiedDto.getImage().getBytes());
            classifiedRepository.save(classified);
            return true;
        }catch (Exception e){
            return false;
        }


    }

    @Override
    public List<ClassifiedDto> getAllClassified() {
        return classifiedRepository.findAll().stream().map(Classified:: getClassifiedDto).collect(Collectors.toList());
    }

    @Override
    public void deleteClassified(Long id) {
        classifiedRepository.deleteById(id);
    }

    @Override
    public ClassifiedDto getClassifiedById(Long id) {
        Optional<Classified> optionalClassified = classifiedRepository.findById(id);
        return optionalClassified.map(Classified:: getClassifiedDto).orElse(null);
    }

    @Override
    public boolean updateCLassified(Long classifiedId, ClassifiedDto classifiedDto) throws IOException {
        Optional<Classified> optionalClassified= classifiedRepository.findById(classifiedId);
        if(optionalClassified.isPresent()){
            Classified existingClassified = optionalClassified.get();
            if(classifiedDto.getImage()!= null)
                existingClassified.setImage(classifiedDto.getImage().getBytes());
            existingClassified.setCategory(classifiedDto.getCategory());
            existingClassified.setName(classifiedDto.getName());
            existingClassified.setType(classifiedDto.getType());
            existingClassified.setState(classifiedDto.getState());
            existingClassified.setCountry(classifiedDto.getCountry());
            existingClassified.setCityName(classifiedDto.getCityName());
            existingClassified.setDescription(classifiedDto.getDescription());
            classifiedRepository.save(existingClassified);
            return true;
        }else {
            return false;
        }
    }
}
