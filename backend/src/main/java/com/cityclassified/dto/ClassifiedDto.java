package com.cityclassified.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ClassifiedDto {
    private Long id;

    private String category;
    private String name;
    private String type;
    private String state;
    private String country;
    private String CityName;
    private String description;
    private MultipartFile image;

    private byte[] returnedImage;
}
