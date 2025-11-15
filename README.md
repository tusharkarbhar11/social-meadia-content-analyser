📊 Social Media Content Analyzer

A full-stack web application that analyzes text content (such as social media posts, captions, comments) and provides insights such as sentiment, tone, readability, keyword extraction, and more.
This project includes a Node.js + Express backend and a React frontend.

🚀 Features
🔍 Content Analysis

Sentiment detection (positive / neutral / negative)

Word count & character count

Keyword extraction

Basic toxicity/abusive word detection (if implemented)

Readability level

🎨 Frontend

Built using React

Clean UI for entering text

Displays analysis results visually

Real-time input handling

🖥️ Backend

Built using Node.js + Express

/analyze POST API endpoint

Modular folder structure (routes, utils)

Uses custom analyzeContent() function to process text

📁 Project Structure
social_media_content_analyser/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── analyze.js
│   │   ├── utils/
│   │   │   └── index.js
│   │   └── index.js
│   ├── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│
└── .gitignore

🛠️ Tech Stack
Frontend

React

JSX

Fetch API / Axios

Backend

Node.js

Express.js

⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

📦 2️⃣ Install Dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

▶️ 3️⃣ Run the Project
Start Backend
cd backend
npm start


Backend will run on:

http://localhost:5000

Start Frontend
cd frontend
npm run dev
