# 📝 Blog App – Frontend Task (Next.js 14)

This project is a **blog listing application** built as part of a frontend task.
It follows all given constraints and includes additional UI enhancements.

---

##  Live Demo

👉 [https://blog-app-ek6s.vercel.app/]

---

##  Task Requirements Implemented

### 1. Constraints

* ✅ Built using **Next.js 14 (App Router)**
* ✅ **No Client Components used** (fully server-side rendered)
* ✅ Clean, modular, and reusable code structure

---

### 2. Features

#### 📰 Blog Listing Page

* Displays blogs in a **3-column responsive grid**
* Clean card UI with hover effects
* Clicking a card navigates to blog detail page

#### 📄 Blog Detail Page (Dynamic Route)

* Dynamic routing using:

  ```
  /blog/[slug]
  ```
* Displays:

  * Blog image
  * Title
  * Category
  * Date
  * Full content (HTML rendered)

---

#### 🔢 Pagination

* Custom pagination implemented
* Handles navigation between pages
* Shows current page state

---

#### 📌 Sticky Header

* Header remains fixed while scrolling
* Includes navigation links and CTA

---

### 3. Enhancements 

*  **Gradient hover effects** on blog cards 
*  **Dynamic title color change on hover**
*  Smooth animations and transitions
*  Fully responsive layout
*  Reusable components (Header, BlogCard, Pagination)

---

## 🛠️ Tech Stack

* **Next.js 14 (App Router)**
* **React (Server Components)**
* **CSS (Custom styling)**
* **Fetch API (Server-side data fetching)**

---

## 🌐 API Used

* https://api.slingacademy.com/v1/sample-data/blog-posts

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Visit 👉 http://localhost:3000

---

## 📁 Folder Structure

```bash
app/
│
├── blog/[slug]/page.js     # Dynamic blog page
├── components/
│   ├── BlogCard.js
│   ├── Header.js
│   └── Pagination.js
│
├── globals.css
├── layout.js
└── page.js                # Blog listing page

lib/
└── api.js                 # API calls
```

---

## 📌 Key Highlights 

* Proper use of **Server Components (no client-side logic)**
* Clean and scalable architecture
* Dynamic routing implemented 
* Pagination handled efficiently
* UI enhancements without breaking constraints

---


## 📄 License

This project is open-source under the MIT License.
