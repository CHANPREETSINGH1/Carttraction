package com.springactivity.spring.controller

import com.springactivity.spring.model.Product
import com.springactivity.spring.repository.ProductRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.lang.RuntimeException
import java.util.*

//import java.util.*


@CrossOrigin("http://localhost:3000")
@RestController
class Mycontroller(@Autowired val productRepository: ProductRepository) {

    @GetMapping("/helloworld")
    fun helloWorld(): String {
        return "Hello World"
    }

    @PostMapping("/product")
    fun addProduct(@RequestBody product: Product): Product {
        return productRepository.save(product);
    }

    @GetMapping("/products")
    fun getProducts(): MutableList<Product> {
        return productRepository.findAll();
    }

    @DeleteMapping("/product/{id}")
    fun deleteProduct(@PathVariable id: Int): String {
        val product = productRepository.findById(id)
        if (product.isPresent) {
            productRepository.delete(product.get())
            return "Product is deleted with id " + id
        } else {
            throw  RuntimeException("Product not found for this id")
        }
    }
}