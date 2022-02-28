package com.springactivity.spring.configuration

import com.springactivity.spring.service.CustomUserDetailsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.NoOpPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder


@Configuration
@EnableWebSecurity
class WebSecurityConfig(@Autowired val customUserDetailsService: CustomUserDetailsService) :
    WebSecurityConfigurerAdapter() {
    @Bean
    fun passwordEncoder(): PasswordEncoder? {
        return NoOpPasswordEncoder.getInstance()
    }

//    @Bean
//    fun authenticationProvider(): DaoAuthenticationProvider {
//        val authProvider = DaoAuthenticationProvider()
//        authProvider.setUserDetailsService(userDetailsService())
//        authProvider.setPasswordEncoder(passwordEncoder())
//        return authProvider

    @Throws(Exception::class)
    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(customUserDetailsService)
    }

    @Bean
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.csrf()
            .disable()
            .authorizeRequests()
            .antMatchers("/login", "/signup").permitAll()
            .anyRequest().permitAll()
//            .and()
//            .formLogin()
//            .usernameParameter("email")
//            .defaultSuccessUrl("/addresses")
//            .permitAll()
//            .and()
//            .logout().logoutSuccessUrl("/").permitAll()
    }
}