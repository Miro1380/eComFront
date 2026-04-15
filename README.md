# Ecom Demo 🛒

A full-stack e-commerce demo application built to demonstrate end-to-end software development skills — from database design and event-driven REST API development to a connected React frontend. This project is intentionally scoped as a proof of concept, with no authentication, to keep the focus on architecture and integration.

## 🌐 Live Demo
Frontend: https://e-com-front-ten.vercel.app/
API: https://ecom-demo-production-f909.up.railway.app
---

## 🔍 What It Does

The application allows users to:

- **Manage Products** — Add products to the database with details like name, description, price, category, and status
- **Manage Customers** — Create customer profiles with relevant demographic information, filter by status
- **Place Orders** — Create orders by linking any existing customer to any existing product, with Kafka event publishing on order placement
- **Track Orders** — Retrieve orders by ID, status, or by customer

---

## 🧱 Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Spring Boot** | REST API framework |
| **Apache Kafka** | Asynchronous event streaming on order placement |
| **Spring Data JPA** | ORM and database interaction |
| **Lombok** | Boilerplate reduction (getters, setters, constructors) |
| **PostgreSQL** | Relational database (hosted on Railway) |
| **Docker** | Local development environment |

### Frontend
| Technology | Purpose |
|---|---|
| **React** | UI framework |
| **Bootstrap** | CSS styling and responsive layout |

### Infrastructure
| Service | Purpose |
|---|---|
| **Railway** | Backend and PostgreSQL hosting |
| **Vercel** | Frontend hosting |

---

## 🏗️ Architecture Overview

```
React Frontend (Vercel)
        │
        │ HTTP / REST
        ▼
Spring Boot API (Railway)
        │
        ├──── PostgreSQL DB (Railway)
        │
        └──── Apache Kafka
               (event streaming for order processing)
```

The frontend communicates with the Spring Boot REST API over HTTP. When an order is placed, the backend publishes an event to a Kafka topic, demonstrating an event-driven architecture pattern commonly used in production e-commerce systems.

---

## 🚀 Running Locally

### Prerequisites

- [Docker](https://www.docker.com/) & Docker Compose
- [Node.js](https://nodejs.org/) (v18+)
- [Java](https://adoptium.net/) (17+)

### 1. Clone the backend and start services with Docker

```bash
git clone <backend-repo-url>
cd demo
docker-compose up -d
```

This spins up PostgreSQL and Kafka locally.

### 2. Run the Spring Boot API

```bash
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`.

### 3. Run the React Frontend

```bash
cd EcomApp
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

---

## 🌐 Environment Variables

### Frontend (`.env`)

```
VITE_API_BASE_URL=http://localhost:8080
```

For production, this is set to the live Railway API URL in Vercel's environment variable settings.

---

## 📡 API Reference

The live API is hosted at `https://ecom-demo-production-f909.up.railway.app`

### Customers

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/customers` | Get all customers |
| `GET` | `/api/customers/{customerId}` | Get customer by ID |
| `GET` | `/api/customers/{customerId}/orders` | Get all orders for a customer |
| `GET` | `/api/customers/status/{status}` | Get customers by status (e.g. `ACTIVE`, `INACTIVE`) |
| `POST` | `/api/customers` | Create a new customer |

### Orders

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/orders` | Get all orders |
| `GET` | `/api/orders/{orderId}` | Get order by ID |
| `GET` | `/api/orders/status/{orderStatus}` | Get orders by status |
| `POST` | `/api/orders` | Place a new order (publishes Kafka event) |
| `PATCH` | `/api/orders/{orderId}/status` | Update order status |

### Products

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/{productId}` | Get product by ID |
| `GET` | `/api/products/category/{category}` | Get products by category |
| `GET` | `/api/products/status/{status}` | Get products by status |
| `POST` | `/api/products` | Create a new product |

---

## 📌 Notes

- This project has **no authentication** by design — it is a proof of concept focused on full-stack integration and architecture
- Kafka is included to demonstrate familiarity with event-driven patterns beyond simple CRUD
- The Docker setup makes local development self-contained with no external dependencies

---

## 👤 Author

Built as a portfolio project to demonstrate full-stack development across frontend, backend, database, and infrastructure layers.
