package com.formsubmission.repository;

import com.formsubmission.model.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmailRepository extends JpaRepository<Email, Long> {
    public List<Email> getEmailsByName(String name);
}
