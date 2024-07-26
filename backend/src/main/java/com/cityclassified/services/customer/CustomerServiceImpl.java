package com.cityclassified.services.customer;

import com.cityclassified.dto.BookClassifiedDto;
import com.cityclassified.dto.ClassifiedDto;
import com.cityclassified.entity.BookClassified;
import com.cityclassified.entity.Classified;
import com.cityclassified.entity.User;
import com.cityclassified.enums.BookClassifiedStatus;
import com.cityclassified.repository.BookClassifiedRepository;
import com.cityclassified.repository.ClassifiedRepository;
import com.cityclassified.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    private final ClassifiedRepository classifiedRepository;
    private final UserRepository userRepository;
    private final BookClassifiedRepository bookClassifiedRepository;

    @Override
    public List<ClassifiedDto> getAllClassified() {
        return classifiedRepository.findAll().stream().map(Classified::getClassifiedDto).collect(Collectors.toList());
    }

    @Override
    public boolean bookClassified(BookClassifiedDto bookClassifiedDto) {
        Optional<Classified> optionalClassified= classifiedRepository.findById(bookClassifiedDto.getClassifiedId());
        Optional<User> optionalUser =userRepository.findById(bookClassifiedDto.getUserId());
        if(optionalClassified.isPresent() && optionalUser.isPresent()){
            Classified existingClassified = optionalClassified.get();
            BookClassified bookClassified = new BookClassified();
            bookClassified.setUser(optionalUser.get());
            bookClassified.setClassified(existingClassified);
            bookClassified.setBookClassifiedStatus(BookClassifiedStatus.PENDING);
            long diffInMilliSeconds = bookClassifiedDto.getToDate().getTime() - bookClassifiedDto.getFromDate().getTime();
            long days = TimeUnit.MICROSECONDS.toDays(diffInMilliSeconds);
            bookClassified.setDays(days);
            bookClassifiedRepository.save(bookClassified);
            return true;
        }
        return false;
    }

    @Override
    public ClassifiedDto getClassifiedById(Long classifiedId) {
        Optional<Classified> optionalClassified=classifiedRepository.findById(classifiedId);
        return optionalClassified.map(Classified::getClassifiedDto).orElse(null);
    }
}
