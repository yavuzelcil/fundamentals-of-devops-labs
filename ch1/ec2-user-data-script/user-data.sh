#!/bin/bash
# Update package list and install Node.js, npm, and git
sudo apt-get update -y
sudo apt-get install -y nodejs npm git

# Clone the GitHub repository
git clone https://github.com/yavuzelcil/fundamentals-of-devops-labs.git /home/ubuntu/app

# Navigate to the sample app directory
cd /home/ubuntu/app/ch1/sample-app

# Install dependencies
npm install

# Start the Node.js app
node app.js > /var/log/app.log 2>&1 &
