# 📁 HRnet

A React and TypeScript-powered web application for managing employee records. Add, view and filter employees with an intuitive and user-friendly interface.

---

## 📚 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Usage](#-usage)
- [Routes](#-routes)
- [How It Works](#️-how-it-works)

---

## 📖 Description

The **Employee Management Application** simplifies employee record manangement. Users can:
- Add new employees.
- View the list of all employees.
- Search or filter based on various criteria.

The app stores data locally, making it lightweight and fast.

---

## 🌟 Features

- Add new employees with details such as name, date of birth, department, address, and more.
- View and filter employees using a dynamic data table.
- Real-time search functionality dor quick access.
- Modal confirmations for improved UX.
- React Context and local storage to persist data.

---

## 🧰 Technologies

This application is built with the following technologies:

- **React**: Frontend library for building UI.
- **TypeScript**: Ensures type safety and robust development.
- **React-Router-DOM**: For client-side rounting.
- **React-Select**: Customisable dropdown menus.
- **React-Datepicker**: User-friendly date selection.
- **React-Data-Table-Component**: Interactive and sortable data tables.
- **Demo-Module-Test-Hrnet**: Display customisable modal.
- **LocalStorage API**: For persisting employee data.

---

## 🚀 Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:
```bash
git clone https://github.com/jordanconot/hrnet-react.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the app in your browser:
http://localhost:yourlocalhost

---

## 💻 Usage

Running the app

- Start the app in development mode:
```bash
npm run dev
```

- Build the app for production:
```bash
npm run build
```

- Preview the production build:
```bash
npm run preview
```

---

## 🌐 Routes

The app has two main routes:

1. Home (`/`):
- Allows users to add new employees.
- Opens a modal confirmation upon successful submission.

2. Employees List (`/employees-list`):
- Displays a sortable and searchable table of all employees.
- Includes a search bar for filtering employees dynamically.

---

## ⚙️ How It Works

**Adding Employees**:

- Employees ared added via the **Home Page**, where a form is provided to input details.
- Validation ensures all required fields are filled out.
- Upon submission, the employee is saved to `localStorage` and displayed in the **Employees List**.

**Viewing Employess**:

- The **Employees List** route displays all employees in a table.
- Users can sort the table by any column or filter employees via a search bar.

**Context and Local Storage**:

- The app uses `React Context` to manage the global state of employees.
- Employees are saved in `localStorage` to persist data between sessions.
