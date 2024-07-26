package com.cityclassified.repository;

import com.cityclassified.entity.BookClassified;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookClassifiedRepository extends JpaRepository<BookClassified, Long> {
}
