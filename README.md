
# FanCode Assessment Project Setup Guide

## Introduction

This project uses Playwright for automation testing. Playwright is a Node.js library for automating web browsers with a single API, supporting Chromium, Firefox, and WebKit.

## Prerequisites

Before setting up and running this project, ensure the following dependencies are installed on your machine:

 - [Node.js (version 12 or higher)](https://nodejs.org/en/download/package-manager)
 - [Playwright - Installed through Node.js packages](https://playwright.dev/docs/intro)

## Setup Instructions
Follow these steps to set up and run the Playwright project:

### 1. Clone the repository
```bash
  git clone https://github.com/iniyavans/FanCode-Assessment.git
  cd FanCode-Assessment
```

### 2. Install Dependencies
Navigate to the project directory and install the required Node.js packages:
```bash
  npm install
```
This command will install all dependencies, including Playwright and any additional libraries listed in the package.json file.

### 3. Install Playwright Browsers
Playwright requires browser binaries to run tests. Install the necessary browser binaries using the following command:
```bash
  npx playwright install
```
This installs Chromium, Firefox, and WebKit browsers.

### 4. Running Tests
Once everything is set up, you can run the test suite by executing:
```bash
  npx playwright test
```
### 5. Environment Variables

Define the base URL in the .env.
```bash
  # .env file
  BASE_URL = 'http://jsonplaceholder.typicode.com'
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
 - [Node.js Documentation](https://nodejs.org/docs/latest/api/)
