package com.springactivity.spring.model

import org.springframework.data.annotation.Id
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.stereotype.Component
import javax.validation.constraints.*

@Component
@Document(collection = "users")
class User {
    @Id
    var id: Long? = 0

    @get:NotNull
    @get:NotEmpty(message = "Name can not be empty")
    var name: String?=null

    @get:NotNull
    @get:Email(message = "Please provide a valid email id")
    var email: String? = null

    @get:NotNull
    @get:Pattern(regexp = "(^$|[0-9]{10})")
    @get:Size(min = 0, max = 10)
    @get:NotEmpty(message = "Please enter phone number")
    var phone: String? = null


    @get:NotEmpty(message = "Password can not be empty")
    @get:NotNull
    var password: String?=null

//    @NotNull
//    @NotEmpty(message = "Enter password")
//    lateinit var cpassword: String

    companion object {
        @Transient
        val SEQUENCE_NAME = "users_sequence"
    }
}
