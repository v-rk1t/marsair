# MarsAir

Automated End-to-End and UI Testing Suite for the MarsAir web application.

---

## Repository Structure

```sh
marsair
├── data/                   # Test data
├── fixtures/               # Custom Playwright fixtures
├── locators/               # Element locators
├── pages/                  # Page Object Model
└── tests/                  # Test suites
```

## Getting Started

### 1. Prerequisites

- Node.js (LTS version recommended)
- npm
- Docker (optional, for Docker-based test execution)
- Make (required for Docker commands)

---

### 2. Clone the repository

```sh
git clone https://github.com/v-rk1t/marsair.git
cd marsair
```

### 3.1 Run Tests Locally

Install dependencies and Playwright browsers:

```sh
npm install
npx playwright install
```

Run the test suites:

```nodejs
npm run test
```

Open Playwright UI mode:

```nodejs
npm run ui
```

### 3.2 Run Tests Using Docker

For the first time, build the Docker image:

```sh
make build
```

Once the image is built, run the tests:

```make
make test
```
