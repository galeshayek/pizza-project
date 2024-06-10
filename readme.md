# Pizza Master

## Introduction

Welcome to Pizza Master, a website dedicated to sharing and discovering pizza recipes across three main categories: dough, sauce, and toppings. This project showcases my final project. Below you will find a comprehensive overview of the project, including how to use it, its features, and much more.

## Table of Contents

- [Welcome to Pizza Master](#welcome)
- [Project Overview](#overview)
- [Key Features](#features)
- [How to Use Pizza Master](#how-to-use)
- [Admin Privileges](#admin-privileges)
- [Join the Community](#join-community)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Welcome to Pizza Master

I'm excited to introduce Pizza Master, my final project. Pizza Master is a website dedicated to sharing and discovering pizza recipes across three main categories: dough, sauce, and toppings. Here's an overview of the project and how to use it.

## Project Overview

**Mission:**
The mission of Pizza Master is to create a vibrant community where pizza enthusiasts can explore, share, and enjoy a wide variety of pizza recipes. By categorizing recipes into dough, sauce, and toppings, we make it easy for users to find exactly what they need to create the perfect pizza.

**User Roles:**

- **Regular Users (Role 0):** Can read, create, update, and delete their own recipes. They can also update their profile information and upload a profile picture.
- **Admin Users (Role 10):** Have full access to all recipes and can update and delete any recipe. Admins also have access to CRM pages to manage users and recipes.

## Key Features

- **Image Uploading:** Users can upload Profile images.
- **Search Bar:** A search bar is available to filter recipes within each category page, allowing users to quickly find specific recipes.
- **Dynamic Protected Route Component:** Enhances security by allowing access to certain routes only to users with the appropriate role level. This feature supports future scalability because of the ability to set the Auth level through the component prop.
- **Dynamic Favorites System:** Users can add and remove recipes from their favorites in real-time. The favorites system updates on the go, providing a personalized experience.

## How to Use Pizza Master

1. **Register and Log In:** Begin by registering on Pizza Master to create an account. Once registered, log in to access all the features.
2. **Update Your Profile:** After logging in, navigate to your profile page to update your information and upload a profile picture.
3. **Explore Recipes:** Browse the dough, sauce, and toppings categories to discover various pizza recipes. Use the search bar to filter recipes based on your preferences.
4. **Share Your Recipes:** As a registered user, you can share your own pizza recipes. Go to the "Create Recipe" section and fill in the details to share your creation with the community.
5. **Manage Your Favorites:** Add recipes to your favorites by clicking the "Add to Favorites" button on any recipe page. View and manage your favorites by navigating to the "Favorites" section.
6. **Admin Privileges:** Admin users have additional privileges that go beyond the regular user capabilities.

## Admin Privileges

1. **User Management:** Admins have access to the CRM pages. Through these pages, admins can:
   - **View All Users:** Access a list of all registered users.
   - **Delete Users:** Remove users from the platform if necessary. This feature is essential for maintaining the integrity and security of the community.
2. **Recipe Management:** Admins can monitor all recipes submitted to the platform. This includes:
   - **Reading Recipes:** View all recipes.
   - **Editing Recipes:** Make necessary changes to recipes for clarity or quality.
   - **Deleting Recipes:** Remove inappropriate or duplicate recipes from the platform.

## Join the Community

By registering on Pizza Master, you become part of a community of pizza lovers. Share your unique pizza recipes, save your favorites, and engage with others who share your passion for pizza. This project not only showcases my technical skills but also my ability to create an engaging and user-friendly platform.

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/galeshayek/pizza-project.git
   cd pizza-master
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server and you can view the project in your browser at `http://localhost:3000`.
