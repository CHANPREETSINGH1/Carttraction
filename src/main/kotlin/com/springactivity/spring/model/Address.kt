package com.springactivity.spring.model


import org.springframework.data.annotation.Id
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document


@Document(collection = "addresses")
class Address {
    @Id
    var id: Long = 0
    lateinit var firstName: String
    lateinit var lastName: String
    lateinit var phone: Number
    lateinit var state: String
    lateinit var village: String
    lateinit var distt: String
    lateinit var country: String
    lateinit var pinCode: Number

    companion object {
        @Transient
        val SEQUENCE_NAME = "users_sequence"
    }
}
