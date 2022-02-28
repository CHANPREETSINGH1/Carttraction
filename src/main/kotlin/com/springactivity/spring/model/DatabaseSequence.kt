package com.springactivity.spring.model

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.annotation.Id

@Document(collection = "database_sequences")
class DatabaseSequence(
    @Id
    var id: String,
    var seq: Long,
)