package com.formsubmission.service;

import com.formsubmission.model.Email;
import com.formsubmission.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailService {
    @Autowired
    EmailRepository emailRepository;

    public Email createEmail(Email email) {
        System.out.println(email.getName());
        return emailRepository.save(email);
    }

    public List<Email> getEmails(String name) {
        System.out.println(name);
        return emailRepository.getEmailsByName(name);
    }

    public void deleteEmail(Long id) {
        emailRepository.deleteById(id);
    }
}
