package com.cityclassified.services.auth;

import com.cityclassified.dto.SignupRequest;
import com.cityclassified.dto.UserDto;

public interface AuthService {
    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
