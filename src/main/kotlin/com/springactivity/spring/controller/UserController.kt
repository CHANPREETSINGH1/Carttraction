package com.springactivity.spring.controller

import com.springactivity.spring.model.AuthenticateRequest
import com.springactivity.spring.model.JwtResponse
import com.springactivity.spring.model.User
import com.springactivity.spring.model.UserLogin
import com.springactivity.spring.repository.UserRepository
import com.springactivity.spring.service.CustomUserDetailsService
import com.springactivity.spring.service.SequenceGeneratorService
import com.springactivity.spring.utils.JwtUtility
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@CrossOrigin("http://localhost:3000")
@RestController
class UserController(
    @Autowired val authenticationManager: AuthenticationManager,
    @Autowired val userLogin: UserLogin,
    @Autowired val userRepository: UserRepository,
    @Autowired val customUserDetailsService: CustomUserDetailsService,
    @Autowired val sequenceGeneratorService: SequenceGeneratorService,
    @Autowired val jwtUtility: JwtUtility
) {

    @GetMapping("/hello")
    fun getWorld(): String? {
        return "helloWorld" + SecurityContextHolder.getContext().authentication.name
    }

    @PostMapping("/signup")
    fun processRegister(@Valid @RequestBody user: User): ResponseEntity<User> {
        println(user.email)
        val email = user.email
        val fuser: User? = userRepository?.findByEmail(email)
        if (fuser == null) {
            user.id = sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME)
            println(user.email)
            println(user.password)
            userRepository.save(user)
            return ResponseEntity<User>(HttpStatus.OK)

        }
        return ResponseEntity<User>(HttpStatus.BAD_REQUEST)
    }

    @PostMapping("/login")
    fun listUsers(@Valid @RequestBody authenticateRequest: AuthenticateRequest): ResponseEntity<AuthenticateRequest> {

        val username = authenticateRequest.username
        val password = authenticateRequest.password
        println(username)

        userLogin.username = username
        userLogin.password = password
        println(username)
        try {
            authenticationManager.authenticate(UsernamePasswordAuthenticationToken(username, password))
        } catch (ex: BadCredentialsException) {
//            throw ex
            return ResponseEntity<AuthenticateRequest>(HttpStatus.BAD_REQUEST)
        }
//        val userDetails = customUserDetailsService.loadUserByUsername(username)
//        val token = jwtUtility.generateToken(userDetails)
//        println(userRepository.findAll())
        return ResponseEntity<AuthenticateRequest>(HttpStatus.OK)
    }
}