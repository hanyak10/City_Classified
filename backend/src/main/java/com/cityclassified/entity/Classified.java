package com.cityclassified.entity;

import com.cityclassified.dto.ClassifiedDto;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="classifieds")
public class Classified {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String name;
    private String type;
    private String state;
    private String country;
    private String CityName;
    private String description;
    @Column(columnDefinition = "longblob")
    private byte[] image;

    public ClassifiedDto getClassifiedDto(){
        ClassifiedDto classifiedDto= new ClassifiedDto();
        classifiedDto.setId(id);
        classifiedDto.setCategory(category);
        classifiedDto.setName(name);
        classifiedDto.setType(type);
        classifiedDto.setState(state);
        classifiedDto.setCountry(country);
        classifiedDto.setCityName(CityName);
        classifiedDto.setDescription(description);
        classifiedDto.setReturnedImage(image);
        return classifiedDto;
    }
}
