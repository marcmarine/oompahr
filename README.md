<p align="center">
  <picture >
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/marcmarine/oompahr/raw/main/src/assets/logo.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/marcmarine/oompahr/raw/main/src/assets/logo.svg">
    <img alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/marcmarine/oompahr/raw/main/src/assets/logo.svg" width="170px" >
  </picture>
</p>

<h1 align="center">OompaHR</h1>

<h3 align="center">Oompa Loompa Crew Management System</h3>

<span align="center">

[![Deploy to Pages](https://github.com/marcmarine/oompahr/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/marcmarine/oompahr/actions/workflows/deploy.yml)

</span>

<span align="center">

[Overview](#about-the-project) · [Getting Started](#installation--setup) · [Feedback](#feedback)

</span>

A modern web application for managing Willy Wonka's 🍫 chocolate factory crew, built to help the Human Resources department efficiently organize and track Oompa Loompa workers.

> [!NOTE]
> This project has been created for educational and learning purposes.

## About the Project

This **Single Page Application** (SPA) provides a solution for managing the Oompa Loompa workforce at Willy Wonka's chocolate factory. The application features two main views:

- **Workers Home View** - Browse and filter through all Oompa Loompa workers
- **Worker Details View** - View detailed information about individual workers

The application supports filtering by `name` and `profession`, making it easy for HR personnel to find and manage specific workers or groups of workers.

## 🚀 Live Demo

Check out the [live application](https://marcmarine.github.io/oompahr).

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) (Fast all-in-one JavaScript runtime)
- **Build Tool**: [Vite](https://vite.dev)
- **Testing**: [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com) and [Mock Service Worker](https://mswjs.io)
- **Frontend Libraries**: [React](https://react.dev), [React Router](https://reactrouter.com/) and [Redux Toolkit](redux-toolkit.js.org)
- **Styling**: [Pico](https://picocss.com) and [Tailwindcss](https://tailwindcss.com)

## Prerequisites

Before running this application, make sure you have the following installed:

- Git
- [Bun](https://bun.sh/docs/installation) (latest version recommended)

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/marcmarine/oompahr
cd oompahr
```

2. **Install dependencies**

```bash
bun install
```

3. **Start the development server**

```bash
bun run dev
```

4. **Open your browser** Navigate to [http://localhost:5173](http://localhost:5173)

## Testing

Run the test suite to ensure application reliability:

```bash
bun run test
```

## Feedback

Feel free to provide [any comments](https://github.com/marcmarine/oompahr/issues/new). All kinds of contributions are welcome 🎉.
