package com.cityclassified.dto;

import com.cityclassified.enums.BookClassifiedStatus;
import lombok.Data;

import java.util.Date;

@Data
public class BookClassifiedDto {

    private Long id;

    private Date fromDate;
    private Date toDate;
    private Long days;

    private BookClassifiedStatus bookClassifiedStatus;

    private Long classifiedId;
    private Long userId;
}
