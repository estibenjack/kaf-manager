# KAFtrack

Say goodbye to messy Excel sheets and hello to **KAFtrack** - your sleek, simple and fun way to track Knowledge Article Feedback (KAF) cases! No more excel sheets. With KAFtrack, you can add, view and update your cases quickly and effortlessly — all in one place.

---

## Features

- Add new KAF entries with detailed requests.
- View KAFs grouped by status: In Progress, Waiting, Completed.
- Update status directly from the table with an inline dropdown.

---

## Technologies Used

- React
- Vite
- CSS Modules for styling
- (Future) Node.js & Express for backend
- (Future) MongoDB/PostgreSQL for database

---

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm package manager

### Installation

1. Clone the repository:

 ```bash
 git clone https://github.com/estibenjack/kaf-manager.git
 cd kaf-manager/frontend
 ```
   
2. Install dependencies:

  ```bash
  npm install
  ```

3. Run the development server:

  ```bash
  npm run dev
  ```

4. Open your browser at `http://localhost:5173` (or as shown in your terminal).

---

## Usage

- Click the **+ Add KAF** button to create a new entry.
- Entries automatically group under their respective status sections.
- Click the status text in any row to edit and change the KAF status.

---

## Folder structure

```
FRONTEND
├── node_modules
├── public
│   └── check-double-solid.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── css
│   │   │   ├── AddKafBtn.module.css
│   │   │   ├── AddKafModal.module.css
│   │   │   ├── Footer.module.css
│   │   │   ├── Header.module.css
│   │   │   └── TicketTable.module.css
│   │   ├── AddKafBtn.jsx
│   │   ├── AddKafModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MainContent.jsx
│   │   └── TicketTable.jsx
│   ├── data
│   │   └── kafs.js
│   ├── pages
│   │   ├── css
│   │   │   └── Dashboard.module.css
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

---

## Stretch Goals

- Add routing with React Router to manage multiple pages/views
- Add statistics (e.g., average turnover time, how many cases completed that week/month, etc.)
- Implement pagination for handling many KAFs (e.g., as completed entries grow)
- Improve responsiveness for all device sizes (mobile, tablet, desktop)
- Add a backend API
- Implement user authentication and authorisation
- Integrate a database

---

## Development Status

🚧 **Active Development** 🚧

KAFtrack is an ongoing project and actively being developed. Features may change, new functionality will be added, and bugs will be fixed regularly.

Stay tuned for updates and feel free to contribute or provide feedback!

