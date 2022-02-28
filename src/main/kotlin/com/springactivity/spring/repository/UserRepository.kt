package com.springactivity.spring.repository

import com.springactivity.spring.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface UserRepository : MongoRepository<User, Long?> {
    fun findByEmail(email: String?): User?
}