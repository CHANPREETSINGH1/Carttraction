package com.springactivity.spring.repository

import com.springactivity.spring.model.Product
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ProductRepository : MongoRepository<Product, Int> {
}