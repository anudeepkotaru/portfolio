# My Portfolio React Application

This is a personal portfolio website built using React.js and Tailwind CSS. It showcases my skills, projects, and experiences. The application is designed to be responsive and includes dark mode functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design:** The website is fully responsive and works on all screen sizes.
- **Dark Mode:** Users can toggle between light and dark modes.
- **Projects Showcase:** Highlight of my projects with descriptions, technologies used, and links to live demos or repositories.
- **About Me Section:** Overview of my skills, experiences, and education.
- **Contact Form:** Users can get in touch with me through the contact form.
- **Interactive UI:** Smooth transitions and hover effects for an enhanced user experience.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **GitHub Pages:** Used for deploying the application.
- **GitHub:** Version control and collaboration.

## Deployment

This project is deployed on GitHub Pages. To deploy your own version:

1. **Ensure your project is ready for deployment:**
   Make sure your `package.json` has the `homepage` field set to:
   ```json
   "homepage": "https://<your-github-username>.github.io/<repository-name>"
   ```

2. **Install the `gh-pages` package as a dev dependency:**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Add the following scripts to your `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy your project:**
   ```bash
   npm run deploy
   ```

Your application will be live at `https://<your-github-username>.github.io/<repository-name>`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Siva Kumar K**  
[LinkedIn](https://www.linkedin.com/in/siva-kumar-k-6b2474152/)  
[GitHub](https://github.com/SivaKatta1010)  
Email: kattashivakmr@gmail.com
