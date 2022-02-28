package com.springactivity.spring.service

import com.springactivity.spring.repository.UserRepository
import com.springactivity.spring.model.CustomUserDetails
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class CustomUserDetailsService(@Autowired val userRepo: UserRepository) : UserDetailsService {
//    @Autowired
//    lateinit var usr: User

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
//        println(username)
        val fUser: com.springactivity.spring.model.User? = userRepo.findByEmail(username)
        if (fUser != null) {
            var username = fUser.email
            var password = fUser.password
            return User(username, password, listOf())
        }
        var users = userRepo?.findAll();

//        return CustomUserDetails(fUser)
        throw UsernameNotFoundException("Invalid username")
    }
}