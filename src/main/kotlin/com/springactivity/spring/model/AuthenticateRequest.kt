package com.springactivity.spring.model

import org.springframework.stereotype.Component

@Component
class AuthenticateRequest {
    lateinit var username: String
    lateinit var password: String
}