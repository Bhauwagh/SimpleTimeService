#SimpleTimeService Deployement Steps:

A minimalist web service that returns the current timestamp and visitor's IP address in JSON format.  
Built with Node.js, Dockerized, and ready to deploy on AWS.

# Tech Stack
- Language: Node.js 
- Containerization: Docker
- Cloud: AWS (ECS, ALB, VPC)

### Require to 
- Docker installed
- Node.js installed (optional for dev testing)

### Build Docker Image
docker build  .

### Run the Container
docker run -p 3000:3000

### Access App
Visit: http://localhost:3000/


  





