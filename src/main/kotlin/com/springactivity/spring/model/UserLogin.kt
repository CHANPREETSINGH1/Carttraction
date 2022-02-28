package com.springactivity.spring.model

import org.springframework.data.annotation.Transient
import org.springframework.stereotype.Component
import javax.validation.constraints.Email
import javax.validation.constraints.NotEmpty

@Component
class UserLogin {
    var id: Long = 0

    @NotEmpty(message = "First name can not be empty")
    @Email(message = "Please provide a valid email id")
    var username: String?=null

    @NotEmpty(message = "Password can not be empty")
    var password: String?=null

    companion object {
        @Transient
        val SEQUENCE_NAME = "users_sequence"
    }
}