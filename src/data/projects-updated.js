const projectsData = [
  {
    title: "A cost-effective targeted Next-Generation Sequencing method and kit for High-Resolution HLA Typing using Adapter-Tagged amplicons",
    description: [
      "Developed a targeted exon sequencing based HLA typing kit covering 11 loci (Class I and II) with an allele resolution of 8-digit.",
      "Integrated SpecHLA pipeline ensures accurate allele calling and automated reporting.",
      "Development of low-cost and high-throughput assay for HLA typing.",
      "This technology will help support population-specific immunogenetic research and transplantation studies in the Gujarat population."
    ],
    links: [],
    image: null,
    year: "2024-Present"
  },
  {
    title: "Establishing environmental surveillance of emerging pathogens and pollutants from Gujarat using multi '-omics' approaches (PhD)",
    description: [
      "Trace the viruses circulating in the human population from the urban wastewater (Sewage).",
      "Decipher viral evolution by mutation profiling and phylodynamics.",
      "Understand demographic distribution of viruses overtime.",
      "Develop an interface for better disease outbreak preparedness."
    ],
    links: [],
    image: null,
    year: "2023-Present"
  },
  {
    title: "Development of Camelid Single Domain Antibody (SdAb)",
    description: [
      "Bio panning data from BP0 to BP5, sequence obtained from MiSeq (250x2) chemistry.",
      "Aligned the data with reference IMGT reference library of Alpaca downloaded from https://www.imgt.org",
      "MIXCR was utilized to align, assemble and export clonotypes obtained from the library.",
      "Statistical analysis and for data visualization used (VDJtools/Immunarch)."
    ],
    links: [],
    image: null,
    year: "2023"
  },
  {
    title: "Dysregulated Non-coding RNA Identification in CAD Patients",
    description: [
      "Using GRCH38.p14 reference genome, mapped Raw sequencing data obtained from NextSeq 2000.",
      "Implemented miRDeep2 workflow for identification of novel miRNAs along with prediction of target genes with (miRbase, miRDB, TargetScan).",
      "Validation using HMDD + qRT-PCR. Gene ontology and pathway enrichment analysis with DAVID."
    ],
    links: [],
    image: null,
    year: "2022-2023"
  },
  {
    title: "TATVAM (Translational Applications for Therapeutic from Veterinary and Allied Microbials)",
    description: [
      "Rumen gut microbiome profiles in Sheep and Goat under different dietary conditions (17% Moringa leaves).",
      "Processed (.bcl) files from NovaSeq 6000 for Diamond BLAST + MEGAN analysis using AnnoTree database.",
      "Visualized phylogenetic trees in MEGAN6 for subsequent statistical analysis on MOCHI."
    ],
    links: [],
    image: null,
    year: "2022"
  },
  {
    title: "Aquaculture (Genomic Selection of Elite Fish Varieties for Seed Improvement)",
    description: [
      "Analyzed Kidney, Brain, Gills tissue data for salinity treated and normal Labeo rohita freshwater fish Bioproject accession number: (PRJNA853878).",
      "Differential expression analysis, PCA, Heatmap for the visualization of Data.",
      "Identification of ncRNA (miRNA and lncRNA) and Target gene prediction using miRbase, miRTarBase, and RNAcentral.",
      "Correlating them with mRNA expressions to understand ce-RNA hypothesis in R using cor() function.",
      "Network analysis in Cytoscape, using various packages (Cytohubba, ClueGo) gene enrichment, ontology, and Kegg pathway analysis.",
      "Alternate Splicing event analysis in the transcriptome data to understand different spliced sites Exon Skipping, A3SS, A5SS, mutually exclusive exons and intron retention.",
      "Codon usage analysis and variant calling to understand SNP effect in adaptation of organisms towards higher salinities."
    ],
    links: [
      { 
        text: "Bioproject PRJNA853878", 
        url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA853878" 
      }
    ],
    image: null,
    year: "2021-2022"
  },
  {
    title: "Detection of SARS-CoV-2 from Human and Wastewater Samples",
    description: [
      "Performed analysis of the SARS CoV-2 sequence data using reference-based mapping against Wuhan-Hu-1 with bwa, bcftools/vcftools for variant calling and generating consensus using bedtools. The lineages were assessed with pangolin and nextclade.",
      "Phylogenetic based analysis, protein modelling of viruses using alphafold, Swiss-model and i-TASSER.",
      "As author submitted 746 Curated covid genomes on GISAID and NCBI SRA under Bioproject accession number: (PRJNA625669).",
      "Built Nextstrain (Real-time tracking of pathogen evolution), for around 10,000 SARS CoV-2 genomes for visualization and tracking mutations with the help of Augur (phylogenetic analysis) and Auspice (interactive visualisations of phylogenomic data).",
      "Prepared automated shell script for understanding the lineage abundances from mixed SARS CoV-2 wastewater samples using Freyja tool (andersen-lab), for both single-end and paired-end sequencing data."
    ],
    links: [
      { 
        text: "Bioproject PRJNA625669", 
        url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA625669" 
      }
    ],
    image: null,
    year: "2020-2021"
  }
];

export default projectsData;