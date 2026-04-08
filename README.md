# Michal Hlousek - Staff TPM & Product Ops Portfolio

A professional portfolio website targeting MEWS, showcasing operational excellence and growth architecture expertise.

## Features

- **Hero Section**: Bold "No Playbook" narrative emphasizing system building
- **Mews Alignment Matrix**: 2x2 grid showing alignment with MEWS strategic initiatives
- **Growth Engine**: Technical showcase of AI-native development workflow
- **Operational De-risking**: A/B testing and data-driven decision making
- **The Mewser Mindset**: Interactive carousel of MEWS values
- **DORA Metrics Dashboard**: Interactive visualization of operational excellence
- **Path to Mews**: Timeline showing career evolution
- **CTA Section**: LinkedIn and email contact options

## Tech Stack

- Next.js 14 (App Router)
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
- Light/dark mode toggle in top-right corner
- Responsive design for all screen sizes
- Smooth animations using Framer Motion
- High-contrast colors for accessibility
- Mews-specific keywords and alignment throughout

## Content Strategy

The website follows the "Staff TPM / Product Ops" narrative:

- **Executive Reporting**: Positioned as filter between C-suite vision and squad execution
- **R&D Efficiency**: Trial Squad experience framed as Product Ops excellence
- **Technical Alignment**: Azure DevOps proficiency emphasized for C#/.NET environment
- **Human-Centric**: All content reflects MEWS values (Ambitious, Resilient, Curious, Open, Human)
