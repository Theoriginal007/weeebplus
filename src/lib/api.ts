// src/api.ts
// Define the base URL for your API (e.g., replace with backend's URL)
const BASE_URL = "https://your-api-url.com";

// Function to handle user login
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Check for a successful response
    if (!response.ok) {
      throw new Error("Invalid credentials or server error");
    }

    // Parse and return user data
    const data = await response.json();
    return data; // You can return any user-related data here
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to handle user registration
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();
    return data; // Return newly registered user data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to handle user logout (you can also clear local storage, etc.)
export const logoutUser = () => {
  // Clear any saved user data (from localStorage or context)
  localStorage.removeItem('user');
  // Any other logout actions can go here
};

// Function to check if the user is authenticated (you can customize this)
export const checkAuthStatus = () => {
  const user = localStorage.getItem('user');
  return user ? true : false;
};
