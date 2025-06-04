FROM openjdk:11-jdk-slim

# Create a directory for the app
WORKDIR /app

# Copy the Spring Boot JAR file into the image
COPY target/*.jar job-vista.jar

# Expose the port your app runs on (default Spring Boot port)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["sh", "-c", "java -jar job-vista.jar"]