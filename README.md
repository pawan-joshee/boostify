# Boostify Media

Boostify Media is a fully responsive marketing agency website template built with **Next.js**. This project leverages modern web technologies to deliver a fast, SEO-friendly, and highly customizable template suitable for digital agencies, marketing firms, or creative portfolios.

🔗 [Live Demo](https://boostify-media.web.app/)

## 🚀 Features

- **Next.js 13 (App Router)**: Built with the latest features of Next.js for server-side rendering, static site generation, and API routes.
- **Responsive Design**: Optimized for all devices, providing a seamless experience on desktops, tablets, and mobile devices.
- **Optimized Performance**: Utilizes Next.js's built-in optimizations, including image optimization, font loading, and automatic code splitting.
- **Firebase Hosting**: Easily deployable on Firebase for a fast and secure hosting solution.
- **SEO Optimized**: Pre-configured for SEO with meta tags, Open Graph, and structured data support.
- **Geist Font Integration**: Includes the modern [Geist font](https://vercel.com/font) for a clean and professional look.

## 📂 Project Structure

```plaintext
boostify-media/
├── apphosting.yaml
├── firebaseConfig.js
├── firebase.json
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├──  postcss.config.js
├── postcss.config.mjs
├── public
│   └── images
│       ├── cashfree.png
│       ├── easebuzz.png
│       ├── fallback-image.png
│       ├── instamojo.png
│       ├── payu.png
│       ├── phonepe.png
│       ├── razorpay.png
│       └── stripe.png
├── README.md
├── src
│   └── app
│       ├── about-us
│       │   └── page.tsx
│       ├── checkout
│       │   └── page.tsx
│       ├── contact-us
│       │   └── page.tsx
│       ├── favicon.ico
│       ├── fonts
│       │   ├── GeistMonoVF.woff
│       │   └── GeistVF.woff
│       ├── globals.css
│       ├── Header.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       ├── privacy-policy
│       │   └── page.tsx
│       ├── refund-cancellation
│       │   └── page.tsx
│       ├── services
│       │   └── page.tsx
│       ├── shipping-delivery
│       │   └── page.tsx
│       └── terms-conditions
│           └── page.tsx
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules, SCSS
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **Fonts**: [Geist](https://vercel.com/font)

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/) / [bun](https://bun.sh/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/boostify-media.git
cd boostify-media
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Linting & Code Quality

Ensure your code adheres to best practices with:

```bash
npm run lint -- --fix
```

### Deployment

Deploy the site to Firebase Hosting:

```bash
firebase deploy --only hosting
```

## 🌐 Deployment on Vercel (Optional)

You can also deploy the project on Vercel with ease:

1. Sign up at [Vercel](https://vercel.com/).
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Run the following command to deploy:
   ```bash
   vercel
   ```

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Learn Next.js](https://nextjs.org/learn)

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions, feel free to reach out:

- [Your Name](mailto:pawanjoshi055@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/pawan-pareek/)
- [GitHub](https://github.com/pawan-joshee)
