package com.springactivity.spring.repository

import com.springactivity.spring.model.Address
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AddressRepository : MongoRepository<Address, Long> {
}