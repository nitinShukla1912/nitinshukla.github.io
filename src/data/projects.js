const projectsData = [
  {
    title: "HLA Typing Kit: Cost-effective Targeted Next-Generation Sequencing",
    description: [
      "Developed a targeted exon sequencing-based HLA typing kit covering 11 loci (Class I and II) with an allele resolution of 8-digit. This innovative approach provides high-resolution HLA typing at a fraction of traditional costs.",
      "Integrated SpecHLA pipeline ensures accurate allele calling and automated reporting. The development of this low-cost and high-throughput assay represents a significant advancement in HLA typing methodology.",
      "This technology will help support population-specific immunogenetic research and transplantation studies in the Gujarat population, contributing to personalized medicine and improved transplantation outcomes."
    ],
    links: [],
    image: null,
    status: "Current"
  },
  {
    title: "Environmental Surveillance of Emerging Pathogens (PhD Research)",
    description: [
      "Establishing environmental surveillance of emerging pathogens and pollutants from Gujarat using multi-omics approaches. This comprehensive study traces viruses circulating in the human population from urban wastewater (sewage).",
      "The research focuses on deciphering viral evolution through mutation profiling and phylodynamics, understanding demographic distribution of viruses over time, and developing interfaces for better disease outbreak preparedness.",
      "This work represents a significant contribution to wastewater-based epidemiology, providing critical insights for public health monitoring and early warning systems."
    ],
    links: [],
    image: null,
    status: "Ongoing"
  },
  {
    title: "Camelid Single Domain Antibody (SdAb) Development",
    description: [
      "Comprehensive analysis of biopanning data from BP0 to BP5 rounds, with sequence data obtained from MiSeq (250x2) chemistry. Aligned the data with reference IMGT library of Alpaca downloaded from the international database.",
      "Utilized MIXCR for alignment, assembly, and export of clonotypes obtained from the library. Performed statistical analysis and data visualization using specialized tools including VDJtools and Immunarch.",
      "This project contributes to the development of novel therapeutic antibodies with potential applications in diagnostics and treatment."
    ],
    links: [
      {
        text: "IMGT Database",
        url: "https://www.imgt.org"
      }
    ],
    image: null,
    status: "Completed"
  },
  {
    title: "Dysregulated Non-coding RNA Identification in CAD Patients",
    description: [
      "Using the GRCH38.p14 reference genome, mapped raw sequencing data obtained from NextSeq 2000 platform. Implemented miRDeep2 workflow for identification of novel miRNAs along with prediction of target genes.",
      "Utilized comprehensive databases including miRbase, miRDB, and TargetScan for target prediction. Validation was performed using HMDD database and qRT-PCR techniques.",
      "Conducted gene ontology and pathway enrichment analysis with DAVID to understand the biological significance of identified dysregulated non-coding RNAs in coronary artery disease."
    ],
    links: [],
    image: null,
    status: "Completed"
  },
  {
    title: "TATVAM: Veterinary and Allied Microbials Research",
    description: [
      "Analyzed rumen gut microbiome profiles in sheep and goat under different dietary conditions, specifically with 17% Moringa leaves supplementation. This study aimed to understand the impact of dietary interventions on gut microbiome composition.",
      "Processed raw (.bcl) files from NovaSeq 6000 sequencing platform using Diamond BLAST and MEGAN analysis with AnnoTree database for comprehensive taxonomic classification.",
      "Visualized phylogenetic trees in MEGAN6 software for subsequent statistical analysis on MOCHI platform, providing insights into microbial community structure and function."
    ],
    links: [],
    image: null,
    status: "Completed"
  },
  {
    title: "Aquaculture Genomics: Elite Fish Varieties Selection",
    description: [
      "Analyzed kidney, brain, and gill tissue data for salinity-treated and normal Labeo rohita freshwater fish (Bioproject accession: PRJNA853878). Performed comprehensive differential expression analysis, PCA, and heatmap visualizations.",
      "Identified non-coding RNAs including miRNA and lncRNA, with target gene prediction using miRbase, miRTarBase, and RNAcentral databases. Correlated these with mRNA expressions to understand competing endogenous RNA hypothesis using R programming.",
      "Conducted network analysis in Cytoscape using various packages (Cytohubba, ClueGo) for gene enrichment, ontology, and KEGG pathway analysis. Performed alternative splicing event analysis and codon usage analysis to understand SNP effects in salinity adaptation."
    ],
    links: [],
    image: null,
    status: "Completed"
  },
  {
    title: "SARS-CoV-2 Detection and Genomic Analysis",
    description: [
      "Performed comprehensive analysis of SARS-CoV-2 sequence data using reference-based mapping against Wuhan-Hu-1 with bwa, bcftools/vcftools for variant calling and consensus generation using bedtools. Lineages were assessed with pangolin and nextclade.",
      "Conducted phylogenetic analysis and protein modeling of viruses using AlphaFold, Swiss-model, and i-TASSER. As lead author, submitted 746 curated COVID genomes to GISAID and NCBI SRA (Bioproject: PRJNA625669).",
      "Built Nextstrain platform for real-time tracking of pathogen evolution for approximately 10,000 SARS-CoV-2 genomes with Augur for phylogenetic analysis and Auspice for interactive visualizations. Prepared automated shell scripts for understanding lineage abundances from mixed SARS-CoV-2 wastewater samples using Freyja tool."
    ],
    links: [],
    image: null,
    status: "Completed"
  }
];

export default projectsData;