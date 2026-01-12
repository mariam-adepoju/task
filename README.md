# SafeDep Package Insights Dashboard

A high-performance, pixel-perfect security analysis dashboard built with **Next.js 16** (App Router + Server Actions) for visualizing **open-source software supply-chain risks**.

---

##  Project Overview

The **SafeDep Package Insights Dashboard** provides a comprehensive view of open-source packages by integrating with **SafeDep APIs**.

It enables developers and security teams to audit packages across multiple ecosystems (NPM, PyPI, Go, etc.) for:

- Vulnerabilities
- Malware indicators
- License compliance
- Project Health

---

##  Key Features

- **Deep Analysis**  
  Fetches real-time package metadata, vulnerability insights, and malware analysis using **Next.js Server Actions** without exposing API Keys to client.

- **Gracefull Error Handling** Robust handling for unavailable data or API errors, ensuring a clean user experience even when partial data is returned.

- **Security Metrics**  
  Visualizes OpenSSF Scorecard metrics, GHSA/CVE identifiers, and severity-based risk indicators.

- **Supply Chain Transparency**  
  Displays ecosystem-specific metadata, version history, and license verification.

- **Type-Safe API Client**  
  End-to-end **TypeScript** types mapping complex **Protobuf JSON** responses into a consolidated UI-ready state.

---

##  Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Data Fetching:** Next.js Server Actions + Connect RPC
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui

---

##  Setup & Installation

### 1. Prerequisites

- Node.js **18.x** or later
- A SafeDep account  
  Sign up at [https://app.safedep.io](https://app.safedep.io)

---

### 2. Registry Configuration
This project uses **Buf** for generated API clients. The following configuration in the ```.npmrc``` file is required to install the ```@buf/``` scoped packages:

```text
@buf:registry=https://buf.build/gen/npm/v1/
legacy-peer-deps=true
```
---

### 3. Environment Variables

Create a `.env.local` file in the project root and add your SafeDep credentials:
```env
SAFEDEP_TENANT_ID=your-team-org.safedep.io
SAFEDEP_API_KEY=your_api_key_here
```
### 4. Installation
**Clone the repository**
```bash
git clone https://github.com/mariam-adepoju/task.git
cd task
```
**Install dependencies**
```bash
npm install
```
**Run the development server**
```bash
npm run dev
```
The application will be available at:
#### http://localhost:3000

##  Example Routes:
The dashboard dynamically generates reports based on the ecosystem, package name, and version provided in the URL:

- **Express(NPM):** http://localhost:3000/p/npm/express/4.10.5
- **Next.js(NPM):** http://localhost:3000/p/npm/next/13.2.4

## Architecture Note
The application follows a Consolidated Data Pattern. Data from the Insights and Malysis services are merged on the server into a unified ConsolidatedPackageData object. This ensures the 

UI components receive a predictable, strictly typed data structure, reducing client-side logic complexity and improving performance.

