# Michal Hlousek - MEWS Portfolio

A professional portfolio website targeting MEWS, showcasing operational excellence, growth architecture, and AI-native development expertise.

## Features

- **Hero Section**: Prominent personal branding with "Digital Success Lead & Strategic Growth Engineer" positioning, LinkedIn integration
- **Work Experience**: Showcases 8+ years at Gen Digital with Gen Digital logo, highlighting product-led monetization for 100M+ users
- **Core Expertise**: 2x2 grid showing alignment with MEWS strategic initiatives (Product Operations, Online GTM Strategy, AI-Native Development, Cross-Functional Collaboration)
- **Growth Engine**: 2x2 grid showcasing AI-native development workflow with tools like Windsurf/Cascade, ChatGPT, Gemini, Claude, and PowerBI
- **Data-Driven Risk Reduction**: Focus on A/B testing, telemetry systems, forecast modeling, and quality assurance
- **The Mewser Mindset**: Interactive carousel of MEWS Constitution values (Delight Customers, Cultivate Trust, Simplify Complexity, Listen Deeply, Win Together)
- **Position Fit Evaluation**: Detailed analysis of fit for three MEWS roles (Senior Product Operations Specialist, Senior Associate - Market Development, Lead Product Builder) with visual metrics and job description links
- **Path to Mews**: Timeline showing career evolution from Junior to Senior E-Commerce Specialist → Principal Product Growth Generalist → Growth Monetization Lead & PLG
- **Fixed Navigation Bar**: Metro-style menu with section highlighting, mobile responsiveness with burger menu, LinkedIn and email CTAs
- **CTA Section**: LinkedIn and email contact options with AI-Native Development expertise

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Installation

Due to PowerShell execution policy restrictions, you'll need to install dependencies manually. Choose one of the following methods:

### Method 1: Change PowerShell Execution Policy (Recommended)

Open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:

```powershell
npm install
```

### Method 2: Use Command Prompt

Open Command Prompt (cmd) instead of PowerShell and run:

```cmd
npm install
```

### Method 3: Use Node.js Direct

If you have Node.js installed, you can also use:

```cmd
node npm install
```

## Running the Development Server

After installing dependencies:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Building for Production

```bash
npm run build
npm start
```

## Design Notes

- Dark mode by default (Mews dashboard aesthetic)
- MEWS favicon and branding integration
- Responsive design with mobile burger menu
- Smooth animations using Framer Motion
- High-contrast colors for accessibility
- Fixed navigation bar with section highlighting
- MEWS-specific keywords and alignment throughout
- Gen Digital logo integration in Work Experience section

## Content Strategy

The website targets MEWS with a focus on:

- **Position Fit Evaluation**: Detailed analysis of fit for three MEWS roles with weighted metrics (Technical Fit, Soft Skills Fit, Past Experience Fit)
- **Product Operations**: Strongest match - process optimization, cross-functional leadership, strategic influence without authority
- **Market Development**: Excellent fit for strategic operations, data-driven insights, and cross-functional GTM leadership
- **Lead Product Builder**: Second strongest match - AI-native prototyping, product intuition, rapid validation
- **AI-Native Development**: Highlighting expertise with Windsurf, Cascade, ChatGPT, Gemini, Claude for rapid GTM validation
- **Human-Centric**: All content reflects MEWS Constitution values (Delight Customers, Cultivate Trust, Simplify Complexity, Listen Deeply, Win Together)
