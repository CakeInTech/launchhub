# LaunchHub

Welcome to **LaunchHub**, a platform designed to help entrepreneurs pitch their startups, connect with others, and discover innovative ideas. This README file will guide you through the project setup, features, and provide due credits to the resources that made this project possible.

## Live Application
Check out the live version of the app here: [LaunchHub](https://launchhub-gamma.vercel.app)

---

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Installation](#installation)
4. [Credits](#credits)
5. [Contributing](#contributing)
6. [License](#license)

---

## Features
- **Post Your Startup**: Share your innovative ideas with the world.
- **Discover Startups**: Browse and search for startups from other users.
- **User Accounts**: Create an account to manage your startups and profile.
- **View Profiles**: Explore other users' profiles and their posts.
- **GitHub Authentication**: Log in easily using your GitHub account.

---

## Getting Started
Follow these steps to set up the project locally.

### Prerequisites
Ensure you have the following installed:
- Node.js (v16.x or later)
- npm (v7.x or later) or yarn
- Git

### Installation
1. **Clone the Repository**:
   ```bash
   git clone git@github.com:CakeInTech/launchhub.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd launchhub
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```
   Or, if using yarn:
   ```bash
   yarn install
   ```

4. **Environment Variables**:
   Create a `.env.local` file in the root directory and add the required environment variables. Example:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_DATASET=your-sanity-dataset
   SANITY_API_TOKEN=your-sanity-api-token
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Or, if using yarn:
   ```bash
   yarn dev
   ```

   Your application will be available at `http://localhost:3000`.

6. **Build for Production** (Optional):
   ```bash
   npm run build
   npm start
   ```
   Or, if using yarn:
   ```bash
   yarn build
   yarn start
   ```

---

## Credits
This project was inspired and guided by [@jsMastery](https://github.com/adrianhajdin), a fantastic YouTube channel for learning modern technologies like Next.js. Special thanks to Adrian for the tutorials, which were instrumental in building LaunchHub.

Additionally, this project utilized **Sanity.io** as the backend for managing and storing content. Sanity's powerful APIs and flexible content schema made it an ideal choice for this project.

This project also provided a hands-on opportunity to dive deep into Next.js and explore its advanced features, including:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Performance optimizations
- Third-party authentication with GitHub

---

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for exploring LaunchHub! 🚀
