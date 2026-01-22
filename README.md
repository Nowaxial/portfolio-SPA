# Portfolio SPA

A modern full-stack portfolio application showcasing projects, skills, experience, and recommendations. Built with ASP.NET Core Web API backend and Astro + React frontend.

## 🏗️ Architecture

### Backend (PortfolioAPI)
- **Framework**: ASP.NET Core 10.0
- **Database**: SQLite with Entity Framework Core
- **API Documentation**: Swagger/OpenAPI
- **CORS**: Configured for local development with Astro frontend

### Frontend (PortfolioFrontend)
- **Framework**: Astro 5.16.12 with React integration
- **UI Library**: Mantine Core v8.3.13
- **Styling**: Tailwind CSS with clsx/tailwind-merge utilities
- **Animations**: Framer Motion
- **Icons**: Tabler Icons
- **Package Manager**: pnpm

## 📁 Project Structure

```
portfolio-SPA/
├── PortfolioAPI/                 # .NET Web API backend
│   ├── Models/                   # Entity models (Project, Skill, Experience, etc.)
│   ├── Data/                     # Database context and initialization
│   ├── Controllers/              # API controllers
│   ├── Program.cs               # Application entry point
│   └── PortfolioAPI.csproj     # .NET project file
└── PortfolioFrontend/           # Astro frontend
    ├── src/
    │   ├── components/          # React components
    │   ├── pages/              # Astro pages
    │   ├── layouts/            # Astro layouts
    │   ├── lib/                # Utility functions (API client)
    │   └── types/              # TypeScript type definitions
    ├── public/                 # Static assets
    └── dist/                   # Build output
```

## 🚀 Getting Started

### Prerequisites
- .NET 10.0 SDK
- Node.js (latest LTS)
- pnpm package manager

### Backend Setup
```bash
cd PortfolioAPI
dotnet restore
dotnet run
```
The API will be available at `https://localhost:7000` with Swagger UI at `/swagger`.

### Frontend Setup
```bash
cd PortfolioFrontend
pnpm install
pnpm dev
```
The frontend will be available at `http://localhost:4321`.

## 📊 Data Models

### Core Entities
- **Project**: Portfolio projects with tech stack, GitHub/live URLs
- **Skill**: Technical skills with categories and icons
- **Experience**: Work experience with company, position, dates
- **Education**: Academic background
- **Recommendation**: Professional recommendations/testimonials
- **Certificate**: Professional certifications

### API Endpoints
- `/api/projects` - Project management
- `/api/skills` - Skills CRUD
- `/api/experience` - Experience data
- `/api/education` - Education information
- `/api/recommendations` - Recommendations
- `/api/certificates` - Certifications

## 🎨 Frontend Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Theme**: Theme provider with Mantine
- **Component Architecture**: Reusable React components
- **Type Safety**: Full TypeScript implementation
- **Smooth Animations**: Framer Motion transitions
- **Modern UI**: Mantine component library

## 🛠️ Development Commands

### Backend
```bash
dotnet run              # Start development server
dotnet build            # Build project
dotnet ef database update  # Apply database migrations
```

### Frontend
```bash
pnpm dev               # Start development server
pnpm build             # Build for production
pnpm preview           # Preview production build
pnpm astro -- --help   # Astro CLI help
```

## 🔧 Configuration

### Backend
- Database connection in `appsettings.json`
- CORS policy configured for Astro dev server
- Swagger enabled for development environment

### Frontend
- Astro config in `astro.config.mjs`
- TypeScript configuration in `tsconfig.json`
- React integration enabled

## 📝 Notes

- SQLite database auto-seeds with sample data on first run
- CORS configured for local development (localhost:4321)
- Frontend uses API client for backend communication
- All components are fully typed with TypeScript
- Build outputs to `dist/` folder for deployment

## 🚀 Deployment

The application is structured for easy deployment:
- Backend: Can be deployed to any .NET hosting platform
- Frontend: Static site generation with Astro for optimal performance
- Database: SQLite for development, easily migratable to other databases