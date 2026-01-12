# 🎬 Movie Data Manipulation & Testing Project

This project consists of a set of JavaScript functions designed to manipulate and analyze a movie dataset, along with unit tests created to ensure their correct behavior.

It is a practical exercise focused on reinforcing concepts such as **functional programming**, **array manipulation**, **unit testing with Jest**, and **good development practices**.

---

## 🧠 Project Goals

- Practice array methods (`map`, `filter`, `reduce`, `sort`)
- Work with structured data using objects
- Implement pure functions without mutating the original array
- Write and understand **unit tests**
- Validate expected results through automated testing

---


---

## ⚙️ Implemented Functions

### 1️⃣ `getAllDirectors(array)`
Returns an array containing all movie directors.

---

### 2️⃣ `getMoviesFromDirector(array, director)`
Returns all movies directed by a specific director.

---

### 3️⃣ `moviesAverageOfDirector(array, director)`
Calculates the average score of a director’s movies, rounded to **2 decimal places**.

---

### 4️⃣ `orderAlphabetically(array)`
Returns an array with movie titles sorted alphabetically  
(limited to a maximum of 20 items).

---

### 5️⃣ `orderByYear(array)`
Sorts movies by release year in ascending order.  
If two movies share the same year, they are sorted alphabetically by title.

---

### 6️⃣ `moviesAverageByCategory(array, genre)`
Calculates the average score of movies belonging to a specific genre.  
Returns `0` if no movies of that genre exist.

---

### 7️⃣ `hoursToMinutes(array)`
Converts movie duration from string format (`"2h 34min"`) to total minutes (`154`),  
without modifying the original array.

---

### 8️⃣ `bestFilmOfYear(array, year)`
Returns an array containing the highest-rated movie(s) of a given year.

---

## 🧪 Testing

The project uses **Jest** for unit testing.

The tests verify:
- Functions are properly declared
- Correct return types
- Original arrays are not mutated
- Expected results across different scenarios

Examples include:
- Accurate average calculations
- Correct sorting logic
- Edge case handling (empty arrays, missing genres, ties)

---

## 🚀 How to Run the Tests

1. Install dependencies:
```bash
npm install



2. Run the tests

npm test


## 🛠️ Technologies Used

JavaScript (ES6)

Node.js

Jest



