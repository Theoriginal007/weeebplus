// auth.d.ts

declare namespace Auth {
    // Type definition for the user object, you can customize based on your API response
    export interface User {
      id: string;
      email: string;
      name: string;
      role: string;
      token: string;
    }
  
    // Type for authentication status (whether the user is logged in or not)
    export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';
  
    // Type definition for context
    export interface AuthContextType {
      user: User | null;
      status: AuthStatus;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void;
      register: (email: string, password: string, name: string) => Promise<void>;
    }
  }
  
  // Exporting a module declaration so it can be used throughout the application
  export default Auth;
  