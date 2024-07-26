package com.cityclassified.repository;

import com.cityclassified.entity.Classified;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassifiedRepository extends JpaRepository<Classified, Long> {
}
