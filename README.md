# Fullstack Application with Docker Compose

This project includes a **frontend client** built with Vite and a **backend server** using Flask. Both are containerized using Docker and orchestrated with Docker Compose.

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
   docker-compose up --build
   ```

3. Access the application:
   - **Frontend (Vite)**: `http://localhost:8080`
   - **Backend (Flask API)**: `http://localhost:5000`

---

## Development Tips
- To stop the containers:
  ```bash
  docker-compose down
  ```

- Modify the files in the `client` or `server` directories for live updates (with volumes).


---

## Troubleshooting
- Ensure Docker and Docker Compose are installed and running.
- Check that ports `8080` and `5000` are not in use.

---

## License
MIT License
