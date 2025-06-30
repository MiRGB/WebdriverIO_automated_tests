# 🚀 Automated Tests for **helion.pl** using WebdriverIO

This repository contains **automated test scripts** written with WebdriverIO to verify the functionality of the web application [helion.pl](https://helion.pl).

---

## 📊 Allure Test Report (automatically generated)

After running the tests, an **Allure report** is generated automatically.  
You can always check the latest report here:  
🌐 [https://mirgb.github.io/webdriverio-automated-tests/](https://mirgb.github.io/webdriverio-automated-tests/)

---

## ⚙️ Getting Started

### Prerequisites

- Ensure you have **[Node.js](https://nodejs.org/)** installed on your machine.

### Installation

Open your terminal, navigate to the project root, and run:

`npm install`

### Running Tests

Run the complete end-to-end test suite:

`npm run e2e`

Run tests in debug mode:

`npm run debug`

---

## 📋 Project Overview

- **TypeScript** based WebdriverIO framework.
- Supports running tests on **Chrome** browser.
- Integrated with **Allure Reporter** for detailed test reports.
- Test reports are generated **automatically** after test execution.

---

## ⚠️ Important Notice

> ❗ **Disclaimer:**  
> This project is created **solely for educational purposes** and personal learning.  
> It is **NOT** affiliated with, sponsored by, or officially related to **helion.pl**.

---

## 🗂️ Project Structure & Scripts

- `wdio.conf.ts` — Main configuration file for WebdriverIO.
- `test/specs/` — Directory containing test specification files.
- `package.json` — Defines project scripts and dependencies.

### Available scripts:

`"scripts": {`  
`  "e2e": "wdio wdio.conf.ts --suite e2e",`  
`  "debug": "wdio wdio.conf.ts --suite debug"`  
`}`

---

## 📄 License

⚠️ This project is not open source. All rights reserved.  
For review purposes only. See the [LICENSE](./LICENSE) file for full terms.
