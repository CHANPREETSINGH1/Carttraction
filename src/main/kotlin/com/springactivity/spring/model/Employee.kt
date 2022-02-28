package com.springactivity.spring.model

import org.springframework.data.annotation.Id
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Document(collection = "Employee")
class Employee {
    @Id
    var id: Long = 0



    companion object {
        @Transient
        val SEQUENCE_NAME = "users_sequence"
    }
}