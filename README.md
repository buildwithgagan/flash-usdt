# Flash USDt

A fast and modern React application for USDT transactions and management, built with Vite for optimal performance and development experience.

## 🚀 Features

- **Lightning Fast**: Built with Vite for instant hot module replacement and optimized builds
- **Modern UI**: Clean and responsive interface using modern React patterns
- **USDT Integration**: Seamless USDT token management and transactions
- **Real-time Updates**: Live transaction status and balance updates
- **Secure**: Industry-standard security practices for cryptocurrency operations
- **Mobile Responsive**: Optimized for both desktop and mobile devices

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flash-usdt.git
   cd flash-usdt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your configuration:
   ```env
   VITE_API_URL=your_api_endpoint
   VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
   VITE_NETWORK_RPC_URL=your_rpc_url
   ```

## 🚦 Getting Started

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
flash-usdt/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── ui/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🔧 Configuration

### Vite Configuration

The project uses a custom Vite configuration optimized for React development. Key features include:

- Fast refresh for React components
- Path aliases for cleaner imports
- Environment variable handling
- Optimized build output

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key

# Blockchain Configuration
VITE_NETWORK_RPC_URL=https://mainnet.infura.io/v3/your_key
VITE_CHAIN_ID=1

# Wallet Connect
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
```

## 🌐 Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Docker

```dockerfile
# Build stage
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

For coverage reports:

```bash
npm run test:coverage
```

## 📦 Dependencies

### Main Dependencies

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Web3** - Blockchain interaction

### Development Dependencies

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **@vitejs/plugin-react** - React support for Vite

## 🔒 Security

- Never commit sensitive information like private keys
- Use environment variables for configuration
- Validate all user inputs
- Follow blockchain security best practices
- Regular dependency updates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Contact: support@flashusdt.com
- Discord: [Join our community](https://discord.gg/flashusdt)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- The open-source community for continuous inspiration

---

Made with ❤️ by the Flash USDt Team
