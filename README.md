# 🎙️ The Chat

The Chat is an AI-powered podcast generation platform that transforms stories, articles, and scripts into engaging podcast conversations between two AI personalities. Users can upload a document or paste text, generate a conversational script, preview and edit it, then convert it into a realistic audio podcast using AI-generated voices.

---

## ✨ Features

- 📄 Upload PDF, DOCX, TXT, or paste text directly
- 🤖 Generate engaging two-person podcast scripts using AI
- 🎭 Support for multiple AI personalities
- ✍️ Edit generated scripts before audio generation
- 🎙️ Convert conversations into natural-sounding audio
- 💾 Store podcast metadata and generated scripts
- ⬇️ Download generated podcast episodes

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python 3.12+
- SQLAlchemy
- Alembic
- Pydantic

### Database

- PostgreSQL
- pgAdmin 4

### AI Services

- Large Language Model (OpenAI, Gemini, or similar)
- Text-to-Speech (TTS) API

---

## 📁 Project Structure

```text
the-chat/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── database/
│   │   ├── core/
│   │   └── main.py
│   │
│   ├── alembic/
│   ├── requirements.txt
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/the-chat.git
cd the-chat
```

---

## Backend Setup (FastAPI)

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/the_chat

OPENAI_API_KEY=your_openai_api_key

TTS_API_KEY=your_tts_api_key
```

Run database migrations:

```bash
alembic upgrade head
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Interactive API Documentation:

- Swagger UI → `http://127.0.0.1:8000/docs`
- ReDoc → `http://127.0.0.1:8000/redoc`

---

## PostgreSQL & pgAdmin Setup

1. Install PostgreSQL.
2. Install pgAdmin 4.
3. Create a database named:

```text
the_chat
```

4. Update your `.env` file with the correct PostgreSQL credentials.

---

## Frontend Setup (Next.js)

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

---

## Future Enhancements

- User authentication
- Podcast history
- Multiple AI hosts and personalities
- Voice customization
- Background music and sound effects
- Multi-language support
- Podcast sharing
- Cloud storage integration
- Episode analytics
- RSS feed generation

---

## Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

Built with ❤️ using FastAPI, Next.js, PostgreSQL, and AI to make storytelling conversational.
