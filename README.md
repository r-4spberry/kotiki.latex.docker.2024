# Инструментарий создания и анализа математически записей. Команда "Котики", 2024

---

## Project Structure
```plaintext
.
├── client/           # Frontend Vite application
│   ├── Dockerfile
│   └── ...
├── server/           # Backend Flask server
│   ├── Dockerfile
│   └── ...
└── docker-compose.yml
```

---

## Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Running the Project

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Start the services using Docker Compose:
   ```bash
   docker compose up --build
   ```

3. Access the application:
   - **Frontend (Vite)**: `http://localhost:8080`
   - **Backend (Flask API)**: `http://localhost:5000`

---

## Troubleshooting
- Ensure Docker and Docker Compose are installed and running.
- Check that ports `8080` and `5000` are not in use.

---

## License
MIT License
