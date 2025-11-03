# Render Deployment

This guide explains how to deploy the sample Node.js app to Render (a Platform-as-a-Service provider).

- **Fork or import the repository**  
  - Ensure your GitHub repository contains the sample app under `ch1/sample-app`.  

- **Create a new Web Service on Render**  
  - Sign in at [render.com](https://render.com) and click **New Web Service**.  
  - Connect your GitHub account and choose this repository.  

- **Configure build and start commands**  
  - **Build Command:** leave blank for Node.js (Render automatically installs dependencies).  
  - **Start Command:** `node ch1/sample-app/app.js`  

- **Select a region and instance type**  
  - Choose the default region and instance size (free tier is fine for testing).  

- **Deploy**  
  - Click **Create Web Service**. Render will build and deploy your app.  
  - After deployment completes, visit the generated URL to see “Hello, DevOps!” in your browser.
