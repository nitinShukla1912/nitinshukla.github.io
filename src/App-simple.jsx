import React from 'react';
import './App-simple.css';

function App() {
  const selectedPublications = [
    {
      title: "A wastewater-based surveillance study for understanding the prevalence of Enterobacter species through community-driven wastewater analysis",
      authors: "Nitin Shukla, Vaishnavi Sangra Lal, Harshal Purohit, et al.",
      journal: "Nature Scientific Data",
      year: "2025",
      doi: "10.1038/s41597-025-04453-6"
    },
    {
      title: "Understanding the prevalence of Enterobacter species and infections through community-driven wastewater surveillance with a machine learning approach",
      authors: "Nitin Shukla, Priyank Chavda, Harshal Purohit, et al.",
      journal: "Microbiology Spectrum",
      year: "2024",
      doi: "10.1128/spectrum.03916-23"
    },
    {
      title: "Genomic surveillance of ESBL/carbapenemase encoding genes from urban wastewater with correlation to infection cases",
      authors: "Vaishnavi Sangra Lal, Nitin Shukla, Harshal Purohit, et al.",
      journal: "BMC Genomics",
      year: "2024",
      doi: "10.1186/s12864-024-11044-y"
    },
    {
      title: "Genomic surveillance unravels the spread of antibiotic resistance in seven major pathogens",
      authors: "Nitin Shukla, Kruti Thanki, Harshal Purohit, et al.",
      journal: "Frontiers in Microbiology",
      year: "2023",
      doi: "10.3389/fmicb.2023.1223428"
    },
    {
      title: "Genomic characterization of chlorine-resistant Klebsiella pneumoniae from wastewater",
      authors: "Nitin Shukla, Atya Kapley, Harshal Purohit",
      journal: "Microbiology Spectrum",
      year: "2022",
      doi: "10.1128/spectrum.02313-22"
    }
  ];

  return (
    <div className="container">
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="profile-section">
            <img 
              src="/images/nitin-profile.png" 
              alt="Nitin Shukla" 
              className="profile-photo"
            />
            <div className="profile-content">
              <h1>Nitin Shukla</h1>
              <p className="position">
                Senior Research Fellow<br/>
                Gujarat Biotechnology Research Centre
              </p>
            </div>
          </div>

          <div className="bio">
            <p>
              I am a Senior Research Fellow at the <a href="https://gbrc.org.in" target="_blank" rel="noopener noreferrer">Gujarat Biotechnology Research Centre</a> in Gandhinagar, India. I completed my M.Sc. in Biotechnology from Gujarat University and my B.Sc. in Microbiology from Saurashtra University.
            </p>
            <p>
              My research focuses on the intersection of microbiology, genomics, and machine learning. I work on wastewater-based surveillance systems, antibiotic resistance genomics, and applying AI/ML approaches to biological data analysis. I am particularly interested in developing computational methods for public health monitoring and understanding microbial communities through metagenomics.
            </p>
            <p>
              I have published research in <em>Nature Scientific Data</em>, <em>Microbiology Spectrum</em>, <em>BMC Genomics</em>, and <em>Frontiers in Microbiology</em>, focusing on genomic surveillance, machine learning applications in epidemiology, and antibiotic resistance characterization.
            </p>
          </div>
        </section>

        <section id="publications">
          <h2>Selected Publications</h2>
          <div className="publications-list">
            {selectedPublications.map((pub, index) => (
              <div key={index} className="publication">
                <h3>{pub.title}</h3>
                <p className="authors">{pub.authors}</p>
                <p className="venue">
                  <em>{pub.journal}</em>, {pub.year}
                  {pub.doi && (
                    <>
                      {' · '}
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        DOI
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="contact-info">
            <a href="mailto:nitinshukla1912@gmail.com">nitinshukla1912@gmail.com</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://scholar.google.com/citations?user=youruser" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://orcid.org/0000-0001-9582-9165" target="_blank" rel="noopener noreferrer">ORCID</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Nitin Shukla</p>
      </footer>
    </div>
  );
}

export default App;
