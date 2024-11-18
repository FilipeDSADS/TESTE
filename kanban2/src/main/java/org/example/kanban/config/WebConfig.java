package org.example.kanban.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/tasks/**") // Altere conforme necessário
                .allowedOrigins("http://localhost:3000") // URL do front-end
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}