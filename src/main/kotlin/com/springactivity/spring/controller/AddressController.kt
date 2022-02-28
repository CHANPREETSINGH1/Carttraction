package com.springactivity.spring.controller

import com.springactivity.spring.model.Address
import com.springactivity.spring.repository.AddressRepository
import com.springactivity.spring.service.SequenceGeneratorService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin("http://localhost:3000")
@RestController
class AddressController(
    @Autowired val addressRepository: AddressRepository,
    @Autowired val sequenceGeneratorService: SequenceGeneratorService
) {

    @PostMapping("/address")
    fun addAddress(@RequestBody address: Address): Address {
        address.id = sequenceGeneratorService.generateSequence(Address.SEQUENCE_NAME)
        println(address.id)
        return addressRepository.save(address);
    }

    @GetMapping("/addresses")
    fun getAddresses(): MutableList<Address> {
        return addressRepository.findAll();
    }

    @DeleteMapping("/address/{id}")
    fun deleteAddress(@PathVariable id: Long): String {
        val product = addressRepository.findById(id)
        if (product.isPresent) {
            addressRepository.delete(product.get())
            return "Address is deleted with id " + id
        } else {
            throw  RuntimeException("Product not found for this id")
        }
    }
}