# Nitin Shukla Profile Redesign Plan
## Reference: Pranav Gangwar's Profile (https://pgangwar-ucsd.github.io/)

---

## 🎯 Design Analysis: Target Profile (pgangwar-ucsd.github.io)

### Layout Structure
1. **Fixed Navigation Bar** (top) - sticky, clean
   - Name on left
   - Section links: PEOPLE | RESEARCH | CONTACT (right-aligned)

2. **Hero Section**
   - Large professional photo (circular, ~250px)
   - Name (bold, large heading)
   - Title/Position with university link
   - Affiliation

3. **About Section** (scrollable)
   - 2-3 paragraph bio
   - Research interests clearly stated
   - Link to Resume/CV (PDF download)

4. **Recent News Section** (scrollable, bullet list)
   - Timeline of achievements (dated)
   - Latest updates at top

5. **Projects Section** (scrollable, cards)
   - Each project:
     - Title (bold heading)
     - Description (2-3 paragraphs)
     - "Learn More" + "Watch Demo" buttons (optional)
     - Project image/GIF
   - Clean card layout with spacing

6. **Publications Section** (scrollable, list)
   - Authors (comma-separated)
   - Paper title (hyperlinked)
   - Journal/Conference, Year
   - PDF link (optional)

7. **Footer**
   - Minimal with social links

### Design Characteristics
- **Color Scheme**: Clean white background, dark text, subtle blue accents
- **Typography**: Sans-serif, clear hierarchy (h1 > h2 > h3 > body)
- **Scrollable Sections**: Each section fills viewport with smooth scroll
- **Minimal Animations**: Clean transitions
- **Mobile Responsive**: Stacks vertically on mobile

---

## 📋 Nitin's Updated Information (from PDF)

### Personal Info
- **Name**: Nitin Shukla
- **Position**: PhD Student at Gujarat Technology University (GTU), Senior Research Fellow at GBRC
- **Location**: Gandhinagar, Gujarat, India
- **Email**: nitinshukla1912@gmail.com

### Social Links
- **LinkedIn**: https://www.linkedin.com/in/nitin-shukla-53b218189
- **GitHub**: https://github.com/nitinShukla1912
- **Google Scholar**: https://scholar.google.com/citations?user=5bz5rmAAAAAJ&hl=en

### About Bio
PhD student at School of Applied Sciences & Technology, Gujarat Technology University. Also affiliated with GBRC as Senior Research Fellow. Research interests in Genomics and Computational Biology. Uses omics methods to understand epidemiology through various data sources. Received Masters and Bachelors from Parul University with first class and gold medal in MSc (Biotechnology).

### Projects (7 Total)

**Project 7: HLA Typing Kit (Current)**
- Cost-effective targeted NGS method for High-Resolution HLA Typing
- Covers 11 loci (Class I and II) with 8-digit allele resolution
- Integrated SpecHLA pipeline for accurate allele calling
- Focus on Gujarat population immunogenetic research

**Project 6: Environmental Surveillance (PhD)**
- Wastewater-based epidemiology using multi-omics
- Trace viruses in human population from urban wastewater
- Viral evolution through mutation profiling and phylodynamics
- Disease outbreak preparedness interface

**Project 5: Camelid Single Domain Antibody (SdAb)**
- Biopanning data analysis (BP0-BP5)
- MiSeq sequencing with IMGT reference alignment
- MIXCR for clonotype assembly
- VDJtools/Immunarch for visualization

**Project 4: Non-coding RNA in CAD Patients**
- NextSeq 2000 data mapping to GRCH38.p14
- miRDeep2 workflow for novel miRNA identification
- Target gene prediction (miRbase, miRDB, TargetScan)
- Validation with HMDD + qRT-PCR

**Project 3: TATVAM (Veterinary Microbiome)**
- Rumen gut microbiome in Sheep/Goat (Moringa diet)
- NovaSeq 6000 processing with Diamond BLAST + MEGAN
- Phylogenetic analysis with AnnoTree database

**Project 2: Aquaculture Genomics**
- Labeo rohita salinity adaptation study
- ncRNA identification (miRNA, lncRNA)
- Network analysis in Cytoscape
- Alternative splicing event analysis

**Project 1: SARS-CoV-2 Detection**
- Reference-based mapping (Wuhan-Hu-1)
- 746 curated genomes submitted to GISAID/NCBI
- Built Nextstrain for 10,000 genomes
- Freyja tool automation for wastewater samples

### Publications (from previous data + updates)
1. Nature Scientific Data 2025 - Wastewater surveillance
2. Microbiology Spectrum 2024 - Enterobacter species + ML
3. BMC Genomics 2024 - ESBL/Carbapenemase surveillance
4. Frontiers Microbiology 2023 - Klebsiella pneumoniae
5. Microbiology Spectrum 2022 - Chlorine resistance
6. [Additional papers from resume]

### Patents
1. **HLA Typing Kit** - Cost-effective targeted NGS method for High-Resolution HLA Typing using Adapter-Tagged amplicons (Submitted)

---

## 📝 Task Breakdown

### Phase 1: Structure & Layout (Priority: HIGH) ✅ COMPLETE
- [x] **Task 1.1**: Create new App component with scrollable sections
- [x] **Task 1.2**: Implement sticky navigation bar (Name left, links right)
- [x] **Task 1.3**: Create Hero section with photo + title
- [x] **Task 1.4**: Create About section with bio + CV link
- [x] **Task 1.5**: Create News section with timeline
- [x] **Task 1.6**: Create Projects section with cards
- [x] **Task 1.7**: Create Publications section with formatted list
- [x] **Task 1.8**: Create Footer with social links

### Phase 2: Styling (Priority: HIGH) ✅ COMPLETE
- [x] **Task 2.1**: Implement clean white/dark color scheme
- [x] **Task 2.2**: Set up typography hierarchy
- [x] **Task 2.3**: Add smooth scroll between sections
- [x] **Task 2.4**: Make sections full-viewport height (scrollable)
- [x] **Task 2.5**: Style project cards with images
- [x] **Task 2.6**: Style publication list with proper formatting
- [x] **Task 2.7**: Ensure mobile responsiveness

### Phase 3: Content Population (Priority: MEDIUM) ✅ COMPLETE
- [x] **Task 3.1**: Update personal info (email, position, location)
- [x] **Task 3.2**: Write detailed About bio (2-3 paragraphs)
- [x] **Task 3.3**: Create News timeline (recent achievements)
- [x] **Task 3.4**: Add all 7 projects with descriptions
- [x] **Task 3.5**: Format all publications properly
- [x] **Task 3.6**: Add Patents section
- [x] **Task 3.7**: Update social links (LinkedIn, GitHub, Scholar)
- [x] **Task 3.8**: Create/add CV PDF for download

### Phase 4: Assets (Priority: MEDIUM)
- [ ] **Task 4.1**: Add professional photo (already have)
- [ ] **Task 4.2**: Create/find project images or icons
- [ ] **Task 4.3**: Design section icons if needed

### Phase 5: Testing & Deployment (Priority: HIGH)
- [ ] **Task 5.1**: Test on desktop (Chrome, Firefox, Safari)
- [ ] **Task 5.2**: Test on mobile
- [ ] **Task 5.3**: Fix any responsive issues
- [ ] **Task 5.4**: Update vite config for deployment
- [ ] **Task 5.5**: Push to GitHub
- [ ] **Task 5.6**: Verify live site

---

## 🔧 Technical Implementation

### Files to Create/Modify
```
src/
├── App.jsx (complete rewrite)
├── App.css (new styling)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── News.jsx
│   ├── Projects.jsx
│   ├── Publications.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   ├── publications.js
│   └── news.js
public/
├── images/
│   ├── nitin-profile.png (already exists)
│   └── projects/ (add project images)
├── cv/
│   └── Nitin_Shukla_CV.pdf
```

### Key CSS Properties
```css
/* Scrollable full-height sections */
section {
  min-height: 100vh;
  padding: 80px 20px;
  scroll-snap-align: start;
}

/* Smooth scroll container */
html {
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
}

/* Sticky navigation */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
```

---

## ⏱️ Estimated Timeline
| Phase | Tasks | Time |
|-------|-------|------|
| Phase 1 | Structure & Layout | 45 min |
| Phase 2 | Styling | 30 min |
| Phase 3 | Content Population | 30 min |
| Phase 4 | Assets | 10 min |
| Phase 5 | Testing & Deploy | 15 min |
| **Total** | | **~2 hours** |

---

## 🎨 Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Background | White | #FFFFFF |
| Primary Text | Dark Gray | #1a1a1a |
| Secondary Text | Gray | #666666 |
| Accent/Links | Blue | #0066cc |
| Section Dividers | Light Gray | #e5e5e5 |
| Card Background | Off-white | #f8f9fa |

---

## ✅ Success Criteria
1. Site matches the professional academic style of reference
2. All 7 projects displayed with descriptions
3. All publications properly formatted
4. Smooth scrolling between sections
5. Mobile responsive
6. Fast loading (<2s)
7. All social links working
8. CV download functional
