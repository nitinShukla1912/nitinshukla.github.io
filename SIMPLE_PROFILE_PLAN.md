# Simple Profile Redesign Plan

## Analysis of Reference Profiles

### Common Patterns from https://mhujoel.github.io/ & https://mingzedong.github.io/

**Design Characteristics:**
1. **Minimalist Layout**: Single column, clean typography, lots of white space
2. **Simple Navigation**: 3-4 links max (About, Publications, CV, Contact)
3. **Hero Section**: Professional headshot (left/center) + brief bio (right/inline)
4. **No Animations**: Static, clean presentation - no fancy effects
5. **Typography Focus**: Clear hierarchy with bold headings, regular body text
6. **Muted Colors**: Black text, subtle grays, minimal accent colors
7. **Selected Publications**: 4-6 key papers (not all 9)
8. **Brief Bio**: 2-3 paragraphs max focusing on current position, education, research interests

**Structure:**
```
├── Header with Name (Large, Bold)
├── Professional Photo (300-400px width)
├── About Section
│   ├── Current Position
│   ├── Education Background
│   └── Research Focus (2-3 sentences)
├── Selected Publications (4-6 papers)
│   └── Each: Title, Authors, Journal, Year, DOI link
└── Footer
    ├── Email
    ├── Social Links (GitHub, Scholar, LinkedIn)
    └── Credits/Copyright
```

## Redesign Strategy

### Phase 1: New Branch & Structure
- Create `simple-profile` branch
- Strip down to minimal components:
  - Remove: Skills section, Projects section, Animations, Background gradients
  - Keep: Hero (simplified), About, Publications (filtered), Contact (minimal)

### Phase 2: Design Simplification
- **Colors**: White background, dark text (#333), one accent color for links (#0066cc)
- **Typography**: System fonts or simple sans-serif (Inter/Roboto)
- **Layout**: Max-width 800px, centered, generous padding
- **No Tailwind complexity**: Use minimal custom CSS

### Phase 3: Content Curation
- **About Section**:
  - Name: Nitin Shukla
  - Position: Senior Research Fellow at Gujarat Biotechnology Research Centre
  - Brief bio: 2 paragraphs (education, AI/ML transition in biology)
  - Research interests: Microbiome genomics, AI in biological data

- **Selected Publications** (Top 5):
  1. Nature Scientific Data 2025 - Wastewater surveillance
  2. Microbiology Spectrum 2024 - Enterobacter species
  3. BMC Genomics 2024 - Genomic surveillance
  4. Frontiers Microbiology 2023 - Klebsiella pneumoniae
  5. Microbiology Spectrum 2022 - Chlorine resistance

- **Contact**:
  - Email: nitinshukla1912@gmail.com
  - GitHub, LinkedIn, Google Scholar links only

### Phase 4: Technical Implementation
1. Simplify component structure
2. Remove framer-motion animations
3. Remove complex Tailwind classes
4. Use vanilla CSS/simple utility classes
5. Single-page scroll (no routing)
6. Add professional photo from attachment

### Phase 5: Deployment
- Test locally
- Update vite.config.js base path if needed
- Deploy to GitHub Pages
- Update README with new design notes

## Key Differences from Current Site

| Current | New Simple Design |
|---------|-------------------|
| 7 sections | 3 sections |
| Animated gradients | Solid white background |
| Glassmorphism effects | Flat design |
| All 9 publications | Top 5 publications |
| Skills with progress bars | Simple text list in About |
| 8 project cards | Projects removed (if needed, brief mention in About) |
| Complex navigation | Simple top nav |
| Framer Motion | No animations |

## Success Criteria
- Page loads instantly (< 1s)
- Clean, professional, academic look
- Easy to read and navigate
- Mobile responsive (but desktop-first)
- All content fits on 2-3 scroll sections
- Professional photo prominently displayed

## Timeline
- Branch creation & setup: 10 min
- Component simplification: 30 min
- Styling updates: 20 min
- Content curation: 15 min
- Testing & deployment: 15 min
**Total: ~90 minutes**
