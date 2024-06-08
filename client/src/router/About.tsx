import { Badge } from "flowbite-react";

const About = () => {
  return (
    <div className="px-10 pb-5">
      <h1 className="text-red-600">About Pizza Master</h1>

      <Badge color={"warning"} className="mb-2 w-fit text-3xl">
        Table of Contents
      </Badge>
      <ul className=" w-fit list-none space-y-2 rounded-l p-4">
        <li>
          <a
            href="#welcome"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Welcome to Pizza Master
          </a>
        </li>
        <li>
          <a
            href="#overview"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Project Overview
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Key Features
          </a>
        </li>
        <li>
          <a
            href="#how-to-use"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            How to Use Pizza Master
          </a>
        </li>
        <li>
          <a
            href="#admin-privileges"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Admin Privileges
          </a>
        </li>
        <li>
          <a
            href="#join-community"
            className="block text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Join the Community
          </a>
        </li>
      </ul>

      <Badge id="welcome" className="my-8 flex w-fit text-2xl">
        Welcome to Pizza Master!
      </Badge>
      <p>
        I'm excited to introduce Pizza Master, my final project. Pizza Master is
        a website dedicated to sharing and discovering pizza recipes across
        three main categories: dough, sauce, and toppings.
        <span className="font-semibold text-cyan-700">
          {" "}
          Here's an overview of the project and how to use it.
        </span>
      </p>

      <Badge id="overview" className="my-8 flex w-fit text-2xl">
        Project Overview
      </Badge>
      <p>
        <strong>Mission:</strong>
        <br />
        The mission of Pizza Master is to create a vibrant community where pizza
        enthusiasts can explore, share, and enjoy a wide variety of pizza
        recipes. By categorizing recipes into dough, sauce, and toppings, we
        make it easy for users to find exactly what they need to create the
        perfect pizza.
      </p>

      <p>
        <strong>User Roles:</strong>
      </p>
      <ul>
        <li>
          <strong>Regular Users (Role 0):</strong> Can read, create, update, and
          delete their own recipes.{" "}
          <span className="font-semibold text-cyan-700">
            They can also update their profile information and upload a profile
            picture.
          </span>
        </li>
        <li>
          <strong>Admin Users (Role 10):</strong> Have full access to all
          recipes and can update and delete any recipe. Admins also have access
          to CRM pages to manage users and recipes.
        </li>
      </ul>

      <Badge id="features" className="my-8 flex w-fit text-2xl">
        Key Features
      </Badge>
      <p>
        <strong>Image Uploading:</strong>
        <br />
        Users can upload Profile image.
      </p>

      <p>
        <strong>Search Bar:</strong>
        <br />A search bar is available to filter recipes within each category
        page, allowing users to quickly find specific recipes.
      </p>

      <p>
        <strong>Dynamic Protected Route Component:</strong>
        <br />
        This component enhances security by allowing access to certain routes
        only to users with the appropriate role level.
        <span className="font-semibold text-cyan-700">
          {" "}
          This feature supports future scalability because of the ability to set
          the Auth level throw the component prop.
        </span>
      </p>

      <p>
        <strong>Dynamic Favorites System:</strong>
        <br />
        Users can add and remove recipes from their favorites in real-time. The
        favorites system updates on the go, providing a personalized experience.
      </p>

      <Badge id="how-to-use" className="my-8 flex w-fit text-2xl">
        How to Use Pizza Master
      </Badge>
      <p>
        <strong>1. Register and Log In:</strong>
        <br />
        Begin by registering on Pizza Master to create an account. Once
        registered, log in to access all the features.
      </p>

      <p>
        <strong>2. Update Your Profile:</strong>
        <br />
        After logging in, navigate to your profile page to update your
        information and upload a profile picture.
      </p>

      <p>
        <strong>3. Explore Recipes:</strong>
        <br />
        Browse the dough, sauce, and toppings categories to discover various
        pizza recipes. Use the search bar to filter recipes based on your
        preferences.
      </p>

      <p>
        <strong>4. Share Your Recipes:</strong>
        <br />
        As a registered user, you can share your own pizza recipes. Go to the
        "Create Recipe" section and fill in the details to share your creation
        with the community.
      </p>

      <p>
        <strong>5. Manage Your Favorites:</strong>
        <br />
        Add recipes to your favorites by clicking the "Add to Favorites" button
        on any recipe page. View and manage your favorites by navigating to the
        "Favorites" section.
      </p>

      <p>
        <strong>6. Admin Privileges:</strong>
        <br />
        Admin users have additional privileges that go beyond the regular user
        capabilities. Here are the extended features available to admin users:
      </p>

      <Badge id="admin-privileges" className="my-8 flex w-fit text-2xl">
        Admin Privileges
      </Badge>
      <p className="mb-4">
        <strong>1. User Management:</strong>
        <br />
        Admins have access to the CRM pages. Through these pages, admins can:
      </p>
      <ul className="space-y-1">
        <li>
          <strong>View All Users:</strong> Access a list of all registered
          users.
        </li>
        {/* <li>
          <strong>Update User Information:</strong> Modify user profiles,
          including roles and other details.
        </li> */}
        <li>
          <strong>Delete Users:</strong> Remove users from the platform if
          necessary. This feature is essential for maintaining the integrity and
          security of the community.
        </li>
      </ul>

      <p className="my-4">
        <strong>2. Recipe Management:</strong>
        <br />
        Admins can monitor all recipes submitted to the platform. This includes:
      </p>
      <ul className="space-y-1">
        <li>
          <strong>Reading Recipes:</strong> View all Recipes
        </li>
        <li>
          <strong>Editing Recipes:</strong> Make necessary changes to recipes
          for clarity or quality.
        </li>
        <li>
          <strong>Deleting Recipes:</strong> Remove inappropriate or duplicate
          recipes from the platform.
        </li>
      </ul>

      <Badge id="join-community" className="my-8 flex w-fit text-2xl">
        Join the Community
      </Badge>
      <p>
        By registering on Pizza Master, you become part of a community of pizza
        lovers. Share your unique pizza recipes, save your favorites, and engage
        with others who share your passion for pizza. This project not only
        showcases my technical skills but also my ability to create an engaging
        and user-friendly platform.
      </p>

      <Badge color={"warning"} className="my-8 flex w-fit text-2xl">
        Thank you for taking the time to learn about Pizza Master. I look
        forward to your feedback and hope you enjoy exploring and contributing
        to this project. Let’s make some pizzas!
      </Badge>
    </div>
  );
};

export default About;
