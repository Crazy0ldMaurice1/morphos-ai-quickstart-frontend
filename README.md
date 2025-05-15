# Morphos AI Quickstart – Frontend

This repository contains the **Next.js (React) client-side application** for the Morphos AI Quickstart project. It provides the user interface (UI) that interacts with the Flask API.

## Features

- Interactive message submission form
- Display of saved messages from the backend
- API communication with CORS support
- Environment-based API configuration

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager (optional but recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/Crazy0ldMaurice1/morphos-ai-quickstart-frontend.git
cd morphos-ai-quickstart-frontend

# Install dependencies
pnpm install

# Configure environment variables
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:5000" > .env.local

# Start the development server
pnpm dev
