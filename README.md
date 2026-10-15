# 🚀 Three-Tier Web Application Deployment on AWS EC2

A hands-on DevOps project demonstrating the deployment of a web application using **AWS EC2, Nginx, Python, and MongoDB**. Nginx acts as a reverse proxy, routing incoming HTTP requests to the appropriate application service.

## 🏗️ Architecture

```text
                 Users / Web Browser
                         |
                         | HTTP :80
                         v
                  +--------------+
                  |    Nginx     |
                  | Reverse Proxy|
                  +--------------+
                         |
              +----------+----------+
              |                     |
              v                     v
       +--------------+      +--------------+
       |   Frontend   |      | Python API   |
       |   Port 3000  |      |  Port 5000   |
       +--------------+      +--------------+
                                    |
                                    v
                             +--------------+
                             |   MongoDB    |
                             |   Database   |
                             +--------------+
```

*Note: The diagram represents the intended routing design. Adjust the ports and request paths to match your actual application configuration.*

## 🛠️ Technologies Used

- **AWS EC2** — Cloud server hosting
- **Ubuntu Linux** — Server operating system
- **Nginx** — Web server and reverse proxy
- **Python** — Backend application
- **MongoDB** — NoSQL database
- **Git & GitHub** — Version control and source code management

## ⚙️ Implementation Steps

### 1. Launch an EC2 Instance

- Launch an Ubuntu EC2 instance.
- Configure the required security group rules.
- Connect to the instance using SSH.

### 2. Update the System

```bash
sudo apt update
sudo apt upgrade -y
```

### 3. Install Nginx

```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

Verify the service:

```bash
sudo systemctl status nginx
```

### 4. Configure MongoDB

Install MongoDB using the official installation guide for your Ubuntu release.

Start and enable the service:

```bash
sudo systemctl enable mongod
sudo systemctl start mongod
sudo systemctl status mongod
```

### 5. Configure the Application

Install the required dependencies and configure the application environment according to the project requirements.

Example environment variables:

```env
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_generated_secret
```

Generate a secure JWT secret with:

```bash
openssl rand -hex 32
```

**Security:** Keep `.env` out of Git, use a strong secret, and enable database authentication when required.

### 6. Configure Nginx as a Reverse Proxy

Create the site configuration:

```bash
sudo vi /etc/nginx/sites-available/myapp
```

Example configuration for a frontend on port 3000 and API routes on port 5000:

```nginx
server {
    listen 80;
    server_name _;

    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        proxy_pass http://127
