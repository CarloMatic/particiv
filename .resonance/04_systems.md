# Architecture – PartiCiv Landing Page

## System Overview

```mermaid
graph TD
    A["User (Browser)"] --> B["Next.js Static Site"]
    B --> C["CDN / Static Host"]
    
    subgraph "Pages"
        D["/ (Landing Page)"]
        E["/impressum"]
        F["/datenschutz"]
    end
    
    B --> D
    B --> E
    B --> F
```

## Component Architecture

```mermaid
graph TD
    Layout["RootLayout (html lang='de')"] --> Header
    Layout --> Page["page.tsx (Landing)"]
    Layout --> Footer
    
    Page --> Hero["HeroSection"]
    Page --> Problem["ProblemSection"]
    Page --> Solution["SolutionSection"]
    Page --> Trust["TrustSection"]
    Page --> Audiences["AudienceSection"]
    Page --> Security["SecuritySection"]
    Page --> Team["TeamSection"]
    Page --> Research["ResearchSection"]
    Page --> CTA["CTASection"]
```

## Design Tokens (Planned)
- **Primary**: Deep Blue (#1E3A5F) — Authority, trust, government
- **Accent**: Signal Blue (#2563EB) — CTAs, interactive elements
- **Background**: Cool White (#F8FAFC) — Clean, professional
- **Text**: Near Black (#0F172A) — High readability
- **Typography**: Inter or similar professional sans-serif
