package com.formsubmission.controller;

import com.formsubmission.model.Email;
import com.formsubmission.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmailController {
    @Autowired
    EmailService emailService;

    @CrossOrigin
    @PostMapping(value="/emails", produces = MediaType.APPLICATION_JSON_VALUE)
    public Email createEmail(@RequestBody Email email) {
        return emailService.createEmail(email);
    }

    @RequestMapping(value = "/emails", method = RequestMethod.GET)
    public List<Email> getEmails(@RequestParam String name) {
        System.out.println(name);
        return emailService.getEmails(name);
    }

    @RequestMapping(value = "/emails/{emailId}", method = RequestMethod.DELETE)
    public void deleteEmails(@PathVariable(value = "emailId") Long id) {
        emailService.deleteEmail(id);
    }

}
