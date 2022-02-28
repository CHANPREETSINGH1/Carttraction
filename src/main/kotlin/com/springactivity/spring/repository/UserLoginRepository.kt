package com.springactivity.spring.repository

import com.springactivity.spring.model.UserLogin
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface UserLoginRepository: MongoRepository<UserLogin,Long> {
}