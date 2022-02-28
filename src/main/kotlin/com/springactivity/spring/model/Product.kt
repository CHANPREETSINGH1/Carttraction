package com.springactivity.spring.model

import org.springframework.data.mongodb.core.mapping.Document
import javax.persistence.Id

@Document(collection = "products")
class Product(
    @Id
    var id: Int,
    var image: Array<String>,
    var name: String,
    var description: String,
    var price: Int
)