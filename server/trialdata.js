const cities = [
  {
    id: 'city1',
    url: 'https://images.shiksha.com/mediadata/images/1507098550phptQ33Ej.jpeg',
    title: 'Indian Institute Of Technology',
    state: 'Maharashtra',
    city: 'Bombay',
    AdmissionProcess: `
      - Undergraduate Programs (B.Tech, B.Des): Admission is based on the JEE Advanced exam for B.Tech and UCEED for B.Des.
      - Postgraduate Programs (M.Tech, M.Sc, MBA): Admission is through GATE for M.Tech, JAM for M.Sc, and CAT for MBA.
    `,
    CoursesOffer: `
      - Undergraduate: B.Tech, B.S., B.Des.
      - Postgraduate: M.Tech, M.Sc, M.Des, MBA.
      - Dual Degree: B.Tech+M.Tech.
      - Doctoral: Ph.D. across various disciplines.
    `,
    FeeStructure: `
      - Undergraduate Tuition Fee: Approximately INR 2.24 lakhs per year.
      - Hostel and Mess Charges: Around INR 32,550 per semester.
      - Fee Waivers: Available for SC/ST students and partial waivers for economically weaker sections.
    `,
    Placement: `
      - Highest Domestic Package: INR 1.68 crores per annum.
      - Highest International Package: INR 3.67 crores per annum.
      - Average Package: INR 21.82 lakhs per annum.
      - Placement Rate: Approximately 88.07% for B.Tech students. Computer Science and Engineering has the highest placement rate at 97.71%.
    `,
    Cutoff: `
      - JEE Advanced Cutoff: The cutoff varies each year and across different engineering disciplines. For example, the cutoff for Computer Science generally ranks within the top 100 candidates.
    `,
    detail: `
      'Internationally, IIT Bombay is ranked 149 by the QS World University Rankings 2024 under the Top Global Universities category and 172 in the QS World Rankings 2023. IIT Bombay offers degree and dual degree programmes at the UG, PG, and doctorate levels. The institute offers 80+ courses under 16 departments in the stream of Engineering, Technology, Science, and Management. The applicants are chosen through national-level tests conducted by various authorities such as JEE Advanced, GATE, etc.'
    `
  },
  {
    id: 'city2',
    url: 'https://theknowledgereview.com/wp-content/uploads/2017/11/Visvesvaraya.jpg',
    title: 'Visvesvaraya National Institute Of Technology',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: `
      - Admissions through JEE Main for B.Tech and GATE for M.Tech programs.
    `,
    CoursesOffer: `
      - B.Tech, M.Tech, M.Sc, and Ph.D. programs.
    `,
    FeeStructure: `
      - Approximately INR 1.5 lakh per year for B.Tech programs.
    `,
    Placement: `
      - Average packages around INR 6-7 lakh per annum with top recruiters including L&T, TCS, and IBM.
    `,
    Cutoff: `
      - JEE Main cutoffs range from 150-200 depending on the branch.
    `,
    detail: `
      'Visvesvaraya National Institute of Technology, Nagpur, formally known as Visvesvaraya Regional College of Engineering, is a public technical university located in the city of Nagpur, Maharashtra. Established in 1960, the institute is among 31 National Institutes of Technology in the country.'
    `
  },
  {
    id: 'city3',
    url: 'https://collegekeeda.com/wp-content/uploads/2023/12/COEP-Pune-1.webp',
    title: 'College Of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: `
      - Based on MHT CET and JEE Main scores for undergraduate programs; GATE for postgraduate programs.
    `,
    CoursesOffer: `
      - B.Tech, M.Tech, and Ph.D. programs.
    `,
    FeeStructure: `
      - Approximately INR 1.15 lakh per year for B.Tech programs.
    `,
    Placement: `
      - Average package around INR 7-8 lakh per annum. Major recruiters include TCS, Infosys, and Microsoft.
    `,
    Cutoff: `
      - MHT CET cutoff typically ranges from 90-150 marks depending on the branch.
    `,
    detail: `
      'COEP Pune was established in 1854 and now is known as COEP Technological University. Located in Pune, the unitary public university of the government of Maharashtra through 14 departments offers UG, PG, and PhD courses to students. These courses are provided across Management, Planning, and various other streams. The university is accredited by the NBA and is ranked 73 by NIRF 2023 under the Engineering category.'
    `
  },
  {
    id: 'city4',
    url: 'https://www.bvuniversity.edu.in/coepune/images/chemical-engineering.jpg',
    title: 'Bharati Vidyapeeth Deemed University College Of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: `
      - Based on BVP CET for undergraduate programs; GATE for postgraduate programs.
    `,
    CoursesOffer: `
      - B.Tech, M.Tech, and Ph.D. programs.
    `,
    FeeStructure: `
      - Approximately INR 1.2 lakh per year for B.Tech programs.
    `,
    Placement: `
      - Average package around INR 4-5 lakh per annum with top recruiters including Infosys, Cognizant, and Accenture.
    `,
    Cutoff: `
      - BVP CET cutoff ranges from 100-130 marks.
    `,
    detail: `
      'The College ranked 99th for Engineering by NIRF 2020 and 93rd for Private Engineering by NIRF 2019. It comprises 11 departments to impart education and knowledge in Civil Engineering, Chemical Engineering, Computer Engineering, Information Technology, Electrical Engineering, Electronics Engineering, Mechanical Engineering, Production Engineering, Basic Science and Humanities, E and TC Engineering, and Computer Science and Business Systems.'
    `
  },
  {
    id: 'city5',
    url: 'https://images.collegedunia.com/public/college_data/images/campusimage/141743183015.JPG',
    title: 'University Institute Of Chemical Technology',
    state: 'Maharashtra',
    city: 'Jalgaon',
    AdmissionProcess: `
      - ICT Mumbai BTech Admission 2023: ICT Mumbai BTech Admission 2023 is based on JEE Main, MHT-CET score followed by a Centralized Admission Process (CAP) conducted by the State Common Entrance Test Cell (SCETC) Mumbai. Admissions to 70% of the seats will be done through the Centralized Admission Process (CAP) and the remaining 30% of seats will be filled by the institute itself. Candidates seeking admission to BTech must have passed 10+2 with Physics, Chemistry, Mathematics/ Biology, and English as one of the subjects.
    `,
    CoursesOffer: `
      - UG, PG, and Ph.D. courses in the field of Chemical Technology.
    `,
    FeeStructure: `
      - The fees structure of ICT Mumbai is divided into multiple components like tuition fees, development fees, exam fees, hostel fees, etc. The tuition fee for the BTech program is INR 85,350 per year. The total fee for MTech and Ph.D. is INR 76,650 and INR 1,00,950 per year, respectively.
    `,
    Placement: `
      - The ICT Mumbai placement cell has released the placement data for the BTech, MTech, and Ph.D. courses for the batch 2022-23. As per the ICT Mumbai placement report, the highest package offered was INR 21 LPA and the average package stood at INR 7 LPA. Some of the top recruiters are Godrej, Asian Paints, BPCL, RCF, Pepsi, Pidilite, Accenture, HUL, TCS, and TATA Motors.
    `,
    Cutoff: `
      - JEE Main Cutoff: ICT Mumbai Cutoff for the B.Tech course ranges from 154 to 8,412 for the General category. MHT CET Cutoff: ICT Mumbai Cutoff for the B.Tech course ranges from 155 to 1394 for the General category.
    `,
    detail: `
      'The Institute of Chemical Technology (ICT) is a public deemed university specialized in training and research in chemical engineering, chemical technology, and pharmacy. It is focused on training in various branches of chemical engineering, chemical technology, and pharmacy. It is considered as one of the best post-secondary institutes in India.'
    `
  },
  {
    id: 'city6',
    url: 'https://images.shiksha.com/mediadata/images/1496991793php8FsSW0.jpeg',
    title: 'Kasegaon Education Societys Rajarambapu Institute Of Technology',
    state: 'Maharashtra',
    city: 'Islampur',
    AdmissionProcess: 'Rajarambapu Institute of Technology offers a Full Time BE/BTech course of 4 years duration. Available in 10 specialisations, students can get into this course on the basis of a valid score in JEE Main exam.',
    CoursesOffer: 'Rajarambapu Institute of Technology offers a Full Time BE/BTech course of 4 years duration.',
    FeeStructure: 'The fee for the BE/BTech program is approximately INR 1.2 lakh per annum.',
    Placement: 'The average placement package is around INR 3-4 lakh per annum, with top recruiters including Tata Consultancy Services, Infosys, and Wipro. The highest package offered recently was INR 12 lakh per annum.',
    Cutoff: 'The cutoff for admission varies each year but typically requires a competitive JEE Main score. For 2023, the cutoff for popular branches like Computer Science and Mechanical Engineering was around the 75th percentile.',
    detail: 'Kasegaon Education Societys Rajarambapu Institute Of Technology is an unaided private institute located in Islampur, Maharashtra. It operates under the parent organization Kasegaon Education Society. The institute started its first course in 1992 and is open to both men and women. It is known for its strong academic programs and focus on practical, industry-relevant education.'
  },
  {
    id: 'city7',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/VJTI_Quadrangle.jpg/640px-VJTI_Quadrangle.jpg',
    title: 'Veermata Jijabai Technological Institute',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions at VJTI are done purely on the basis of merit of MHT CET for Engineering Courses through CAP allotment by State CET Cell, Maharashtra State.',
    CoursesOffer: 'VJTI offers four year undergraduate courses in Computer Engineering, Information Technology, Electronics & Telecommunication Engineering, Electronics Engineering, Electrical Engineering, Civil Engineering, Mechanical Engineering, Production Engineering and Textile Engineering',
    FeeStructure: 'The VJTI Mumbai Fees start from Rs 3.3 Lakhs for BTech courses, 1.8 Lakhs for the MTech courses, and Rs 33 K for the Diploma courses. the students who are planning to take admission must appear in the examination like JEE and MHT CET 2024.',
    Placement: 'The B. Tech placement in 2018-19 was 96.3%, in 2019-20 was 77.9% and in 2020-21 was 72.9% in a total of 300+ industries, and 100+ drives were conducted virtually for outgoing batch 2019-20 and 2020-21 in the lockdown period only.',
    Cutoff: 'VJTI, MHT CET Cutoff 2023 for GOPENS Category is listed below. The overall cutoff percentile for MHT CET is 94.58 - 99.94 for round 1.',
    detail: 'VJTI Mumbai has pioneered India’s Engineering education research and training ecosystem. In 1997 VJTI changed its name to Veermata Jijabai Technological Institute to honor mother of Chhatrapati Shivaji Maharaj. The institute offers programs in engineering and technology at the diploma degree post-graduate and doctoral levels. VJTI is known for its high quality teaching collaborative research industry connect and strong alumni network.'
  },
  {
    id: 'city8',
    url: 'https://images.shiksha.com/mediadata/images/1488181886phptzvSEq.jpeg',
    title: 'K. K. Wagh Institute Of Engineering Education & Research',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Karmaveer Kakasaheb Wagh Institute of Engineering Education & Research, Nashik is a private college that provides admissions at undergraduate, postgraduate and doctoral levels. KKWIEER Nashik courses include BE Artificial Intelligence and Data Science, BE Electrical Engineering, BE Computer Engineering, MCA, MBA, ME Structural Engineering and many more. Candidates are required to meet the Karmaveer Kakasaheb Wagh Institute of Engineering Education & Research, Nashik eligibility criteria to get admissions.',
    CoursesOffer: 'Course: B.Tech, MBA, B.Tech {Lateral}, M.Tech',
    FeeStructure: 'Fees: ₹1.38 Lakhs (1st Yr Fees), ₹90,225 (1st Yr Fees), ₹1.38 Lakhs (1st Yr Fees), ₹70,225 (1st Yr Fees)',
    Placement: '24 LPA Placements: KK Wagh Institute boasts a robust placement record, with an average placement package of 4.5 LPA and the highest package touching 24 LPA.',
    Cutoff: 'KKWIEER, MAHCET Cutoff 2023 for EWS Category is listed below. The overall cutoff percentile for MAHCET is 54.03 for round 1.',
    detail: 'Karmaveer Kakasaheb Wagh Institute of Engineering Education & Research Nashik is the oldest engineering college in Nashik. It is a self-financed privately managed college recognized by AICTE adjudged in "A" grade by the Govt. of Maharashtra and affiliated to Pune University.'
  },
  {
    id: 'city9',
    url: 'https://images.shiksha.com/mediadata/images/1549007832phptIW2kY.png',
    title: 'Shri Ramdeobaba College of Engineering and Management',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: 'Registration by candidate on CET Cell website. Document verification and confirmation at facilitation Centre (FC) Declaration of Merit list by State CET Cell. Declaration of Institute level admission schedule on college website/News paper.',
    Coursesoffer: 'Major specialisations at Shri Ramdeobaba College of Engineering and Management are Computer Science Engineering, Electrical Engineering, Electronics & Communication Engineering, Electronics Engineering, Industrial Engineering, Information Technology, Mechanical Engineering, Civil Engineering, Robotics Engineering',
    FeeStructure: 'The total tuition fee for RCOEM B.E. in Computer Science and Engineering is INR 608696. Apart from the tuition fee, there is a one-time admission fee of - INR 5500, and a hostel fee of amount INR 322000 that students are required to pay. The course offers admission to 180 students.',
    Placement: 'According to the placement data for the year 2021–22 at Shri Ramdeobaba College of Engineering and Management, 1674 employment offers were extended to students (up until December 2021). At RCOEM Nagpur postings 2021–22, the maximum package available was Rs. 25,00,000 per year.',
    Cutoff: 'Shri Ramdeobaba College of Engg. & Management MHT CET Year Wise Comparison 2023, 2022, 2021. Considering the last three years\' MHT CET cutoff, Shri Ramdeobaba College of Engineering and Management cutoff 2023 for B.E. in Information Technology closed at 96.59, while it closed at 96.82 in 2022 and 97.67 in 2021.',
    detail: 'Shri Ramdeobaba College of Engineering and Management (RCOEM) is a private engineering college in Nagpur, Maharashtra. Established in 1984, it offers undergraduate and postgraduate programs in engineering and management. The college is known for its high academic standards, experienced faculty, and excellent infrastructure. RCOEM aims to produce competent professionals who can contribute effectively to the industry and society.'
  },
  {
    id: 'city10',
    url: 'https://images.shiksha.com/mediadata/images/1488262780phpgEXYz4.jpeg',
    title: 'Shri Guru Gobind Singhji Institute Of Engineering And Technology',
    state: 'Maharashtra',
    city: 'Nanded',
    AdmissionProcess: 'Admission to the B.Tech programs is based on the MHT-CET or JEE Main scores. For M.Tech programs, admissions are based on GATE scores. The institute also follows the centralized admission process (CAP) conducted by the Directorate of Technical Education (DTE), Maharashtra.',
    Coursesoffer: 'The institute offers undergraduate and postgraduate programs including B.Tech in various specializations such as Civil Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, Information Technology, and Mechanical Engineering. M.Tech programs are also available in different specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 80,000 per year. For M.Tech programs, the fee is around INR 85,000 per year.',
    Placement: 'The average placement package is around INR 4-5 lakh per annum, with top recruiters including TCS, Infosys, L&T, and Wipro. The highest package offered recently was INR 12 lakh per annum.',
    Cutoff: 'The cutoff for admission varies each year based on the entrance exam scores. For popular branches like Computer Science and Mechanical Engineering, a competitive score in MHT-CET or JEE Main is required. The cutoff for 2023 for the General category was around the 85th percentile for MHT-CET.',
    detail: 'Shri Guru Gobind Singhji Institute Of Engineering And Technology (SGGSIE&T) is an autonomous engineering college located in Nanded, Maharashtra. Established in 1981, the institute is affiliated with Swami Ramanand Teerth Marathwada University. SGGSIE&T is known for its strong academic programs, experienced faculty, and excellent infrastructure. The institute aims to provide quality education and foster research and innovation among its students.'
  },
  {
    id: 'city11',
    url: 'https://images.shiksha.com/mediadata/images/1552039012phpaHJTV6.png',
    title: 'Yeshwantrao Chavan College of Engineering',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: 'Admission is primarily through JEE Main or MHT-CET for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'B.Tech in various engineering disciplines, M.Tech, and PhD programs.',
    FeeStructure: 'The fee for B.Tech programs is approximately INR 1.5 lakh per annum.',
    Placement: 'Average package is around INR 4-5 lakh per annum with major recruiters including TCS, Infosys, and Wipro.',
    Cutoff: 'Varies each year; typically, a high score in MHT-CET or JEE Main is required for top branches.',
    detail: 'Yeshwantrao Chavan College of Engineering (YCCE) Nagpur is an autonomous engineering college affiliated with Rashtrasant Tukadoji Maharaj Nagpur University. Established in 1984, it offers undergraduate and postgraduate programs in various engineering disciplines. YCCE is known for its academic excellence, research initiatives, and strong industry connections. The college provides a conducive learning environment with modern facilities and experienced faculty.'
  },
  {
    id: 'city12',
    url: 'https://geca.ac.in/images/DSC_0008.JPG',
    title: 'Government College Of Engineering',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to the undergraduate B.Tech programs are based on MHT-CET or JEE Main scores. For postgraduate M.Tech programs, admissions are based on GATE scores. The institute follows the Centralized Admission Process (CAP) conducted by the Directorate of Technical Education (DTE), Maharashtra.',
    Coursesoffer: 'The college offers various undergraduate and postgraduate programs including B.Tech in Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics and Telecommunication Engineering, Computer Science and Engineering, Information Technology, and Chemical Engineering. M.Tech programs are also available in multiple specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 85,000 per year. For M.Tech programs, the fee is around INR 90,000 per year. Additional fees for hostel and other facilities may apply.',
    Placement: 'The average placement package is around INR 4-5 lakh per annum, with top recruiters including Tata Motors, Infosys, TCS, Mahindra & Mahindra, and L&T. The highest package offered in recent years was around INR 12 lakh per annum.',
    Cutoff: 'The cutoff varies annually based on entrance exam scores. For B.Tech programs, a competitive score in MHT-CET or JEE Main is required. The cutoffs for popular branches such as Computer Science and Mechanical Engineering are typically high.',
    detail: 'Government College of Engineering, Aurangabad (GECA), established in 1960, is one of the oldest engineering colleges in Maharashtra. It is affiliated with Dr. Babasaheb Ambedkar Marathwada University and is recognized for its strong academic curriculum, experienced faculty, and well-equipped infrastructure. GECA aims to provide quality education and promote research and innovation in engineering and technology. The college has a vibrant campus life and offers various extracurricular activities and student clubs.'
  },
  {
    id: 'city13',
    url: 'https://images.collegedunia.com/public/college_data/images/appImage/1505131397cover.jpg?h=260&w=360&mode=crop',
    title: 'Institute of Chemical Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to undergraduate courses like B.Tech and B.Pharmacy is based on MH CET and JEE Main scores. For postgraduate programs like M.Tech, M.Pharmacy, and Ph.D., admissions are based on GATE and GPAT scores as well as internal entrance exams.',
    Coursesoffer: 'The institute offers B.Tech, B.Pharmacy, M.Tech, M.Pharmacy, M.Sc, and Ph.D. programs in various specializations including Chemical Engineering, Pharmaceutical Sciences, Polymer Engineering, Food Engineering, and more.',
    FeeStructure: 'The annual fee for undergraduate programs is approximately INR 85,350. Postgraduate programs have varying fees, generally around INR 70,000 per year.',
    Placement: 'The institute boasts a high placement rate with average packages ranging from INR 6-8 lakh per annum. Top recruiters include companies like Asian Paints, Honeywell, and Roquette.',
    Cutoff: 'Cutoffs vary by course and year, with competitive MH CET and JEE Main scores required for B.Tech admissions.',
    detail: 'The Institute of Chemical Technology (ICT) is a premier public deemed university in Mumbai, Maharashtra. Established in 1933, ICT is renowned for its research and training in chemical engineering, chemical technology, and pharmaceutical sciences. The institute also has campuses in Bhubaneswar, Odisha, and Jalna, Maharashtra. It is known for its academic excellence, research initiatives, and strong industry collaborations.'
},
{
    id: 'city14',
    url: 'https://images.shiksha.com/mediadata/images/1636375452phpjtwO79.jpeg',
    title: 'National Institute of Industrial Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to the PGDIM and PGDISEM programs is based on CAT scores. For the Fellowship and Executive programs, admissions are based on written tests and personal interviews.',
    Coursesoffer: 'NITIE offers postgraduate programs including PGDIM (Post Graduate Diploma in Industrial Management), PGDISEM (Post Graduate Diploma in Industrial Safety and Environmental Management), and Fellow (Doctoral) programs. It also offers various executive education programs.',
    FeeStructure: 'The fee for the PGDIM and PGDISEM programs is approximately INR 13.43 lakh for the entire course. Fees for fellowship and executive programs vary depending on the course duration and structure.',
    Placement: 'NITIE has a stellar placement record with the average package around INR 20-22 lakh per annum. The highest package can go up to INR 46 lakh per annum. Top recruiters include Amazon, Deloitte, P&G, and McKinsey & Company.',
    Cutoff: 'For PGDIM and PGDISEM, the CAT cutoff percentile generally ranges between 97-98. Cutoffs for fellowship programs are based on written tests and interviews.',
    detail: 'The National Institute of Industrial Engineering (NITIE), located in Mumbai, Maharashtra, was established in 1963. It is an esteemed institution that focuses on industrial engineering, management, and safety and environmental management. NITIE is known for its rigorous academic programs, strong industry connections, and impressive placement statistics. The institute aims to develop leaders in industrial management and engineering through its comprehensive curriculum and practical learning approach.'
  },
  {
    id: 'city15',
    url: 'https://images.shiksha.com/mediadata/images/1495458304php9bU94P.png',
    title: 'G. H. Raisoni College of Engineering',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: 'Admission to B.Tech programs is based on JEE Main and MHT-CET scores. For M.Tech programs, admissions are based on GATE scores. The institute also conducts its own entrance exams for some courses.',
    Coursesoffer: 'G. H. Raisoni College of Engineering offers undergraduate and postgraduate programs in various engineering disciplines including B.Tech, M.Tech, and Ph.D. programs.',
    FeeStructure: 'The annual fee for B.Tech programs is approximately INR 1.3 to 1.5 lakh. Fees for M.Tech programs are around INR 1 lakh per annum.',
    Placement: 'The college has a good placement record with average packages around INR 4-5 lakh per annum. Top recruiters include TCS, Infosys, Wipro, and Capgemini.',
    Cutoff: 'Cutoffs vary each year based on the difficulty of entrance exams and the number of applicants. Generally, a good score in JEE Main or MHT-CET is required for B.Tech admissions.',
    detail: 'G. H. Raisoni College of Engineering (GHRCE) is a prestigious engineering college located in Nagpur, Maharashtra. Established in 1996, the college is affiliated with Rashtrasant Tukadoji Maharaj Nagpur University and offers a range of undergraduate and postgraduate programs in engineering. GHRCE is known for its state-of-the-art infrastructure, experienced faculty, and strong focus on research and innovation.'
},
{
    id: 'city16',
    url: 'https://images.shiksha.com/mediadata/images/1494401346php2CpV9P.jpeg',
    title: 'Army Institute of Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admissions are based on JEE Main scores. Only wards of army personnel are eligible to apply. The candidates must also meet the eligibility criteria set by the college.',
    Coursesoffer: 'The institute offers B.Tech programs in various specializations including Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, and Information Technology.',
    FeeStructure: 'The annual fee for B.Tech programs is approximately INR 1.5 to 2 lakh.',
    Placement: 'The placement record is excellent with an average package of around INR 7-8 lakh per annum. Top recruiters include Microsoft, Amazon, Tata Motors, and Infosys.',
    Cutoff: 'The cutoffs are based on JEE Main scores and vary each year depending on the applicant pool and difficulty level of the exam.',
    detail: 'Army Institute of Technology (AIT) Pune is an esteemed engineering college established in 1994 exclusively for the wards of army personnel. The institute is affiliated with Savitribai Phule Pune University and offers quality education in engineering disciplines. AIT is known for its disciplined environment, excellent faculty, and strong placement record. The institute focuses on all-round development of students through a blend of academic and extracurricular activities.'
  },
  {
    id: 'city17',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/MIT-WPU-1.tif/lossless-page1-1200px-MIT-WPU-1.tif.png',
    title: 'Maharashtra Institute of Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission is primarily through JEE Main and MHT-CET for undergraduate programs. For postgraduate programs, GATE scores are considered. The institute also accepts scores from other national-level entrance exams such as CAT and MAT for management courses.',
    Coursesoffer: 'Maharashtra Institute of Technology offers a range of undergraduate and postgraduate programs including B.Tech, M.Tech, MBA, MCA, and Ph.D. programs in various specializations.',
    FeeStructure: 'The fee for B.Tech programs ranges from INR 2 to 3 lakh per annum. For M.Tech programs, the fee is approximately INR 1.5 to 2 lakh per annum. Fees for MBA programs are around INR 3 to 4 lakh per annum.',
    Placement: 'The institute has a strong placement record with an average package of around INR 6-7 lakh per annum. Top recruiters include Tata Motors, Infosys, Cognizant, and L&T.',
    Cutoff: 'Cutoffs vary each year based on the entrance exam scores. Generally, a high score in JEE Main or MHT-CET is required for B.Tech admissions.',
    detail: 'Maharashtra Institute of Technology (MIT) Pune is one of the premier engineering institutes in Maharashtra, established in 1983. It is affiliated with Savitribai Phule Pune University and offers a wide range of undergraduate and postgraduate programs. The institute is known for its excellent academic curriculum, experienced faculty, and state-of-the-art infrastructure. MIT Pune focuses on holistic development of students, promoting research, innovation, and industry collaborations.'
  },
  {
    id: 'city18',
    url: 'https://images.collegedunia.com/public/college_data/images/appImage/25693_X20.jpg',
    title: 'Defence Institute of Advanced Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Based on GATE scores for M.Tech programs and written tests for Ph.D. admissions.',
    Coursesoffer: 'B.Tech and Ph.D. programs.',
    FeeStructure: 'INR 1.3 lakh per year for B.Tech programs.',
    Placement: 'Average packages around INR 9-10 lakh per annum with top defense and aerospace companies recruiting.',
    Cutoff: 'GATE scores above 600 generally required for M.Tech admissions.',
    detail: 'The Defence Institute of Advanced Technology (DIAT) is the premier engineering training institute under the Department of Defence Research & Development, Ministry of Defence, and Government of India. DIAT (DU) specializes in training officers from Defence Research Organizations, IOFS (Indian Ordnance Factories), Defence PSUs (like Hindustan Aeronautics Limited, Bharat Electronics, Bharat Dynamics Limited), ship building agencies (like Garden Reach Shipbuilders & Engineers, Cochin and Goa Shipyards), Mazagon Dock Shipbuilders, armed forces of friendly countries (like Sri Lanka and Afghanistan,), and other central and state governmental agencies.'
  },
  {
    id: 'city19',
    url: 'https://images.shiksha.com/mediadata/images/1670480521phpBHRBwz.jpeg',
    title: 'SVKM`s Narsee Monjee Institute of Management Studies',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to NMIMS is based on entrance exams like NMAT for MBA, NPAT for undergraduate programs, and other relevant entrance tests for various courses. Candidates must apply online and meet the eligibility criteria set by the institute.',
    Coursesoffer: 'NMIMS offers a wide range of programs including MBA, B.Tech, BBA, B.Sc, M.Tech, MCA, and Ph.D. in various specializations.',
    FeeStructure: 'The fee structure varies by program. For example, the MBA program costs around INR 10-12 lakhs per annum, while B.Tech fees range from INR 3-4 lakhs per annum.',
    Placement: 'NMIMS has a strong placement record with top recruiters like Deloitte, EY, KPMG, and TCS. The average salary package for MBA graduates is around INR 17-18 lakhs per annum.',
    Cutoff: 'Cutoffs for entrance exams like NMAT and NPAT are competitive. For NMAT, a score above 210 is typically required for MBA admissions.',
    detail: 'Narsee Monjee is ranked 101-150 by NIRF 2023 under the Engineering category, 21 under the Management category by NIRF 2023, and 11 by NIRF 2023 under the Pharmacy category. NMIMS University is famous for its flagship MBA and BTech courses. Narsee Monjee Institute of Management Studies has a strong industry interface and corporate relationships with over 1,348 companies. SVKM NMIMS follows an Assurance of Learning (AoL) or Outcome-Based Education (OBE). At present, the university has more than 17,000 full-time students and over 750 full-time faculty members.'
},
{
    id: 'city20',
    url: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/20221212_120147-scaled-e1670904222265-1024x463.jpg',
    title: 'Bharatiya Vidya Bhavan`s Sardar Patel Institute of Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET for undergraduate programs and GATE for postgraduate programs. Candidates must meet the eligibility criteria and participate in the centralized admission process.',
    Coursesoffer: 'Sardar Patel Institute of Technology offers B.E./B.Tech, M.E./M.Tech, and MCA programs in specializations such as Information Technology, Electronics Engineering, Electronics & Communication Engineering, Computer Science Engineering, and Artificial Intelligence & Machine Learning.',
    FeeStructure: 'The fee for undergraduate programs ranges from INR 1.5-2.5 lakhs per annum, while postgraduate programs cost around INR 1-1.5 lakhs per annum.',
    Placement: 'The institute has a strong placement cell with companies like TCS, Infosys, Accenture, and L&T recruiting students. The average salary package is around INR 5-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET varies each year, with high demand for branches like Computer Science and IT. A score above 150 in MHT-CET is typically required for these branches.',
    detail: 'Sardar Patel Institute of Technology is one of India’s top-rated colleges for B.E. / B.Tech, M.E./M.Tech, MCA programs. The institute was established in 1962 and is located in Mumbai, Maharashtra. As of now, the institute comprises a total of 5 specialization courses Information Technology, Electronics Engineering, Electronics & Communication Engineering, Computer Science Engineering, Artificial Intelligence & Machine Learning while the number of seats available in the current scenario is 696. Additionally, the institute revolves around the Engineering, IT & Software studies stream and offers courses in Full-Time mode. Moreover, it also offers Degree programs, giving students a variety of credentials to choose from. The institute is approved by AICTE and they provides a variety of UG and PG programs at a reasonable fee, ranging from INR 292,172-608,696.'
},
{
    id: 'city21',
    url: 'https://www.collegebatch.com/static/clg-gallery/rashtrasant-tukadoji-maharaj-nagpur-university-nagpur-215482.jpg',
    title: 'The Rashtrasant Tukadoji Maharaj Nagpur University',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: 'Admission to RTMNU is based on merit and entrance exams. Undergraduate admissions are typically based on 12th standard scores and entrance tests like MHT-CET. Postgraduate admissions require relevant bachelor’s degrees and scores from entrance exams like GATE for M.Tech programs.',
    Coursesoffer: 'RTMNU offers a variety of programs including B.A., B.Sc, B.Com, B.Tech, M.A., M.Sc, M.Com, M.Tech, MBA, and Ph.D. across various disciplines.',
    FeeStructure: 'The fee structure varies by program. For example, undergraduate programs range from INR 10,000 to 50,000 per annum, while postgraduate programs range from INR 20,000 to 1 lakh per annum.',
    Placement: 'RTMNU has a dedicated placement cell with companies like Wipro, TCS, Infosys, and L&T visiting the campus. The average salary package is around INR 4-5 lakhs per annum.',
    Cutoff: 'Cutoffs vary depending on the program and entrance exam scores. For example, a high score in MHT-CET is required for engineering programs.',
    detail: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU), formerly Nagpur University, is a public state university located in Nagpur, Maharashtra. It is one of India\'s oldest universities, as well as the second oldest in Maharashtra. It is named after Rashtrasant Tukdoji Maharaj, a spiritual leader, orator, and musician from Vidarbha. The university is a member of the Association of Indian Universities and the Association of Commonwealth Universities.'
  },
  {
    id: 'city22',
    url: 'https://collegekeeda.com/wp-content/uploads/2024/01/Walchand-College-of-Engineering-Sangli.webp',
    title: 'Walchand College of Engineering',
    state: 'Maharashtra',
    city: 'Sangli',
    AdmissionProcess: 'Admission through MHT-CET and JEE Main for B.Tech courses, GATE for M.Tech.',
    Coursesoffer: 'B.Tech, M.Tech, and PhD programs.',
    FeeStructure: 'Approximately INR 1.5 lakh per annum for B.Tech.',
    Placement: 'Average package around INR 5-6 lakh per annum, with major recruiters being Tata Motors, Bajaj Auto, and Infosys.',
    Cutoff: 'MHT-CET cutoffs are usually high for sought-after branches.',
    detail: 'Walchand College of Engineering (WCE) Sangli is an autonomous engineering education institution in Sangli, Maharashtra. Established in 1947, it is one of the oldest engineering colleges in India. WCE offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines. The college is known for its strong academic curriculum, research initiatives, and industry collaborations.'
  },
  {
    id: 'city23',
    url: 'https://images.shiksha.com/mediadata/images/1489993602phpm33Gil.jpeg',
    title: 'Dr. Vishwanath Karad MIT World Peace University',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'MIT-WPU Pune does not offer direct admission to its UG and PG courses. MIT-WPU course admissions for all courses are either done via MIT-WPU CET, which is conducted by the university itself. The university also accepts various state and national-level entrance exams such as PERA CET, JEE Main, CAT, MAT, NEET UG, etc.',
    Coursesoffer: 'B.Tech Civil Engineering, B.Tech Civil Engineering (Smart Infrastructure and Construction), B.Tech Mechanical Engineering, B.Tech Mechanical Engineering (Robotics and Automation), B.Tech Chemical Engineering, B.Tech Bioengineering.',
    FeeStructure: 'MIT-WPU fee of a four-year BTech course at MIT-WPU ranges between INR 10 Lacs – INR 14 lakh. This range is inclusive of the fee for BTech, BTech (Lateral Entry) course and Integrated BTech courses.',
    Placement: 'MIT WPU placements for the batch of 2023 are complete and the MIT WPU highest package offered was Rs 51.36 LPA, while the average package was Rs 7 LPA. A median placement percentage of 80% was recorded at the MIT WPU placements 2023.',
    Cutoff: 'Vishwanath Karad World Peace University, Maharashtra Institute of Technology Pune and MAEER\'s MIT Pune. One needs to take the MHT-CET exam or JEE Main exam. Candidates must secure at least 50% marks (45% for reserved category candidates) in Physics, Chemistry and Mathematics in Class XII.',
    detail: 'MIT College of Engineering (MITCOE) Pune is a prominent engineering college affiliated with Savitribai Phule Pune University. Established in 2001, MITCOE offers undergraduate and postgraduate programs in various engineering disciplines. The college focuses on providing quality education, fostering innovation, and promoting research. It is equipped with modern facilities and has a strong industry network.'
  },
  {
    id: 'city24',
    url: 'https://www.vit.edu/media/k2/items/src/1d11e5ebeed3c42540f69555bbe34fb8.jpg',
    title: 'Bansilal Ramnath Agarwal Charitable Trust`s Vishwakarma Institute of Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission is based on entrance exams such as MHT-CET and JEE Main. Candidates must meet the eligibility criteria and participate in the centralized admission process.',
    Coursesoffer: 'The institute offers undergraduate and postgraduate programs including B.Tech, M.Tech, and Ph.D. in various engineering disciplines.',
    FeeStructure: 'The fee structure varies by program. For B.Tech, the fees are approximately INR 1.6-2 lakhs per annum.',
    Placement: 'The institute has a robust placement cell with top recruiters like Infosys, TCS, and Cognizant. The average salary package is around INR 4-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with competitive scores required for admission to popular branches like Computer Science and Mechanical Engineering.',
    detail: 'Vishwakarma Institute of Technology is an autonomous institute in Pune, Maharashtra, India. Established in 1983, the institute is affiliated with the Savitribai Phule Pune University and run by the Bansilal Ramnath Agarwal Charitable Trust.'
},
{
    id: 'city25',
    url: 'https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/12/28082948/RAIT.jpg',
    title: 'Ramrao Adik Institute of Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to RAIT is based on entrance exams like MHT-CET and JEE Main. Candidates must meet the eligibility criteria and follow the centralized admission process.',
    Coursesoffer: 'RAIT offers undergraduate and postgraduate programs in engineering such as B.Tech and M.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.5-2 lakhs per annum.',
    Placement: 'RAIT has a strong placement record with companies like L&T, Capgemini, and Accenture. The average salary package is around INR 3-5 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with higher cutoffs for popular branches like Computer Science and IT.',
    detail: 'Ramrao Adik Institute of Technology (RAIT) is a premier engineering college located in Mumbai, Maharashtra. Established in 1983, it is affiliated with the University of Mumbai and offers quality education in various engineering disciplines. RAIT is known for its excellent infrastructure, experienced faculty, and strong industry connections.'
},
{
    id: 'city26',
    url: 'https://i.ytimg.com/vi/BEjLcQGDvps/maxresdefault.jpg',
    title: 'Sardar Patel College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to SPCE is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must participate in the centralized admission process.',
    Coursesoffer: 'SPCE offers undergraduate and postgraduate programs including B.Tech and M.Tech in various engineering disciplines.',
    FeeStructure: 'The fee for B.Tech programs is around INR 1-1.5 lakhs per annum, while M.Tech programs cost approximately INR 1-1.2 lakhs per annum.',
    Placement: 'SPCE has a strong placement cell with top recruiters like TCS, L&T, and Infosys. The average salary package is around INR 5-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main is competitive, with higher cutoffs for branches like Computer Science and Electrical Engineering.',
    detail: 'Sardar Patel College of Engineering (SPCE) Mumbai is one of the oldest engineering colleges in India, established in 1962. It is affiliated with the University of Mumbai and offers undergraduate and postgraduate programs in engineering. SPCE is known for its academic excellence, experienced faculty, and strong research focus. The college has a rich legacy of producing skilled engineers who contribute significantly to the industry.'
  },
  {
    id: 'city27',
    url: 'https://www.highereducationdigest.com/wp-content/uploads/2020/04/Img-4-13-550x330.jpg',
    title: 'K. J. Somaiya College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must participate in the centralized admission process.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in engineering, including B.Tech and M.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.5-2 lakhs per annum.',
    Placement: 'K.J. Somaiya has a strong placement cell with top recruiters like Infosys, TCS, and L&T. The average salary package is around INR 4-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with competitive scores required for admission to popular branches like Computer Science and Mechanical Engineering.',
    detail: 'K. J. Somaiya College of Engineering is a prestigious engineering college in Mumbai, Maharashtra. Established in 1983, it is affiliated with Somaiya Vidyavihar University and offers quality education in various engineering disciplines. The college is known for its excellent infrastructure, experienced faculty, and strong industry connections.'
  },
{
    id: 'city28',
    url: 'https://media.licdn.com/dms/image/C5622AQFrA219GytwDw/feedshare-shrink_800/0/1632928942423?e=2147483647&v=beta&t=4_ZYR0G1A15Td6oFIFIzdPxR-SBLgHwylFsBguWMpbQ',
    title: 'Maharshi Karve Stree Shikshan Samstha`s Cummins College of Engineering for Women',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must meet the criteria and participate in the centralized admission process.',
    Coursesoffer: 'The college offers undergraduate programs in engineering, specifically B.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.2-1.5 lakhs per annum.',
    Placement: 'The college has a strong placement cell with recruiters like Infosys, TCS, and Accenture. The average salary package is around INR 3-5 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with competitive scores required for popular branches like Computer Science and Electronics Engineering.',
    detail: 'Cummins College of Engineering for Women, Pune, is a premier engineering college for women, established in 1991. Affiliated with Savitribai Phule Pune University, it is known for its academic excellence, modern infrastructure, and dedicated faculty. The college focuses on empowering women in the field of engineering.'
},
{
    id: 'city29',
    url: 'https://img.jagranjosh.com/images/2024/April/1842024/Pimpri-Chinchwad-College-of-Engineering-Pune-CV1.jpg',
    title: 'Pimpri Chinchwad College of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must participate in the centralized admission process.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in engineering, including B.Tech and M.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.4-1.6 lakhs per annum.',
    Placement: 'Pimpri Chinchwad College of Engineering has a strong placement record with top recruiters like TCS, Infosys, and Capgemini. The average salary package is around INR 3-5 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with higher cutoffs for popular branches like Computer Science and Mechanical Engineering.',
    detail: 'Pimpri Chinchwad College of Engineering (PCCOE) is a prominent engineering college in Pune, Maharashtra. Established in 1999, it is affiliated with Savitribai Phule Pune University and offers quality education in various engineering disciplines. The college is known for its excellent infrastructure, experienced faculty, and strong industry connections.'
},
{
    id: 'city30',
    url: 'https://5.imimg.com/data5/SELLER/Default/2022/8/EZ/KB/EO/144387079/thakur-college-of-engineering-and-technology.jpg',
    title: 'Thakur College of Engineering & Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must participate in the centralized admission process.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in engineering, including B.Tech and M.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.5-1.8 lakhs per annum.',
    Placement: 'Thakur College of Engineering & Technology has a strong placement cell with top recruiters like Infosys, TCS, and L&T. The average salary package is around INR 4-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with competitive scores required for admission to popular branches like Computer Science and Electronics Engineering.',
    detail: 'Thakur College of Engineering & Technology (TCET), a Graded Autonomous Linguistic Minority Institute, was established in AY 2001-02 with a clear objective of providing Quality Technical Education in tune with international standards and contemporary global requirements. The Institute is recognized by All India Council for Technical Education (AICTE) & Government of Maharashtra and is affiliated to the University of Mumbai (UOM). It has been conferred Autonomous Status by University Grant Commission (UGC) for 10 years w.e.f. A.Y. 2019-20 to A.Y. 2028-29.'
},
{
    id: 'city31',
    url: 'https://www.collegebatch.com/static/clg-gallery/dwarkadas-j-sanghvi-college-of-engineering-mumbai-213171.jpg',
    title: 'Shri Vile Parle Kelavani Mandal`s Dwarkadas J. Sanghvi College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission is based on entrance exams like MHT-CET and JEE Main. Eligible candidates must participate in the centralized admission process.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in engineering, including B.Tech and M.Tech in various specializations.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.5-2 lakhs per annum.',
    Placement: 'Dwarkadas J. Sanghvi College of Engineering has a strong placement cell with top recruiters like Infosys, TCS, and L&T. The average salary package is around INR 4-6 lakhs per annum.',
    Cutoff: 'The cutoff for MHT-CET and JEE Main varies each year, with competitive scores required for admission to popular branches like Computer Science and Mechanical Engineering.',
    detail: 'Shri Vile Parle Kelavani Mandal is a Public Charitable Trust registered under the Society’s Registration Act and Bombay Public Trust Act. From its humble beginnings in 1934, when it took over the Rashtriya Shala, a school established in 1921 in the wake of the National Movement, the Mandal today has grown into a big educational complex imparting high-level education to more than 50,000 students. The ethos of the Mandal is marked by patriotic fervor, selfless service and a spirit of indigenous enterprise. These values permeate all the institutions set up by the Mandal and are the guiding principles for all of them. After beginning its journey in the early 1930s SVKM has blossomed into an educational colossus that has attained national recognition in multiple streams of higher education. With a strong guiding philosophy of providing education to all levels of the student community along with creating a feeling of bonding and commitment amongst academic and nonacademic employees. SVKM has mastered the art of being able to transform itself into a close-knit family and at the same time help its students to attain all-round development, be employable and achieve success.'
},
  {
    id: 'city32',
    url: 'https://images.shiksha.com/mediadata/images/1543907048phpUU23Xp.png',
    title: 'Vishwakarma Institute Of Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Vishwakarma Institute of Technology (VIT) offers 26 courses through 10 departments. VIT Pune admission process for all the courses except PhD is governed by the Directorate of Technical Education (DTE). PhD admission is as per the rules & regulations of Savitribai Phule Pune University. VIT Pune admission is entrance-based where the college accepts national and state-level entrance exams for the selection of the candidates. The aspirants are selected through a centralised admission process.',
    Coursesoffer: 'Btech, Mtech, and PhD Courses.',
    FeeStructure: 'VIT Pune fee contains various components, such as tuition fee, hostel fee, and one-time fee. The fee varies depending on the duration and type of the course along with the course specialization selected by the candidates. The tuition fee for all the UG, PG courses of VIT Pune ranges between INR 147,826 to INR 650,432.',
    Placement: 'More than 760 students were placed in over 235 companies that participated in the 2022 placement session. The VIT Pune highest package stood at INR 44 LPA and the average package offered was INR 6.7 LPA. Computer Engineering emerged as the top branch with the highest number of students placed and the highest package received.',
    Cutoff: 'VIT Pune admission 2023 to BTech course has been concluded with the release of Round 3. Candidates seeking admission 2024 to VIT Pune must appear and meet the cutoff marks for JEE Main in order to be finally eligible for the Counselling. This section analyses the last three years\' trends for the top VIT Pune BTech courses including B.Tech. in Computer Engineering and B.Tech. in Artificial Intelligence. VIT Pune cutoff 2023 for BTech CE closed at 14384, while in 2022 it closed at 19223 and in 2021 at 35229. For BTech in AI, VIT Pune cutoff 2023 closed at 19067, while in 2022 it closed at 28914.',
    detail: 'Vishwakarma Institute of Technology is an AICTE-approved private institute for higher education in Pune Maharashtra established in 1983. It offers various courses including Ph.D MCA B.E. / B.Tech M.E./M.Tech in the 2 streams (Engineering IT & Software). Students can occupy their seats out of a total of 1464 seats available and pursue various popular courses with a specialization in Chemical Engineering Electronics Engineering Computer Science Engineering Power Engineering Information Technology Industrial Engineering Mechanical Engineering Artificial Intelligence & Machine Learning Telecommunication Engineering Instrumentation Technology Production Engineering.'
  },
  {
    id: 'city33',
    url: 'https://images.shiksha.com/mediadata/images/1402986669phpOZV1AN.jpeg',
    title: 'Dr. D. Y. Patil Institute of Technology',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: "The admission process involves qualifying the entrance exams like MHT-CET or JEE Main for undergraduate courses. For postgraduate courses, candidates need to qualify GATE or the institute's own entrance exam. There is also a counseling process conducted by the Directorate of Technical Education (DTE), Maharashtra.",
    Coursesoffer: "The institute offers undergraduate courses such as B.Tech in various specializations like Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Information Technology. Postgraduate courses include M.Tech in multiple disciplines and a Master of Business Administration (MBA).",
    FeeStructure: 'The fee structure varies by course and specialization. For undergraduate programs, the annual fees are approximately INR 1,20,000 - INR 1,50,000. For postgraduate programs, the fees range from INR 1,30,000 - INR 1,80,000 per year.',
    Placement: 'The institute has a dedicated placement cell that facilitates the recruitment process. Major recruiters include companies like Infosys, TCS, Cognizant, Wipro, Capgemini, and L&T. The average package offered is around INR 4-5 LPA, with the highest packages reaching up to INR 12-14 LPA.',
    Cutoff: 'The cutoff for various courses varies each year based on the entrance exam scores. For MHT-CET, the cutoff for B.Tech courses generally ranges between 70-90 percentile. For JEE Main, the cutoff ranks range between 40,000 to 70,000.',
    detail: 'Dr. D. Y. Patil Vidyapeeth (DPU), Pune was established in 2003. It is a prominent educational institution known for its technical and management courses. The institute is affiliated with the University of Pune and recognized by the All India Council for Technical Education (AICTE).'
  },
  {
    id: 'city34',
    url: 'https://images.hindustantimes.com/img/2021/06/18/550x309/8k-2copy_1624005943361_1624005952580.jpg',
    title: 'NMIMS College of Engineering (MPST&M)',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'The entrance exam for Mukesh Patel School of Technology Management and Engineering (MPSTME) 2024 is the NMIMS CET. The NMIMS CET is a computer-based test that is conducted by Narsee Monjee Institute of Management Studies (NMIMS) for admission to all its programs, including BTech at MPSTME.',
    Coursesoffer: 'The respective specialisations for both courses are Artificial Intelligence, Civil Engineering, Computer Engineering, Data Science, Electronics & Telecommunication Engineering, Information Technology, Mechanical Engineering, Mechatronics Engineering, Computer Science & Eng. (Cyber Security).',
    FeeStructure: 'NMIMS Mumbai MBA fees is INR 11.95 lakhs per annum, and the NMIMS Mumbai BBA fees is INR 3.2 lakhs per annum. The institute is also known for B.Tech and the fee is around 3.50 lakhs to INR 4 lakhs per annum.',
    Placement: 'The highest package and average package offered during MPSTME MBA(Tech) placements 2023 stood at INR 22.40 LPA and INR 10.55 LPA, respectively.',
    Cutoff: 'NMAT cut off 2024 details are provided in either marks or percentile format by NMIMS and other MBA institutions that accept NMAT scores. NMIMS Mumbai has the highest NMAT cut off percentile to shortlist candidates. Based on previous years’ trends, NMAT cut off 2024 at NMIMS Mumbai is expected to fall within the range of 98-99.',
    detail: 'Mukesh Patel School of Technology Management and Engineering (MPSTME) Mumbai is a constituent school of SVKM\'s NMIMS (Deemed to be University) Mumbai. Established in 2006, the school has evolved into a leading technology and management institution. MPSTME Mumbai offers a range of undergraduate, postgraduate, and doctoral programs in various engineering and technology disciplines. The school focuses on providing quality education, fostering research and innovation, and nurturing industry-ready professionals. It is equipped with state-of-the-art facilities and has a strong emphasis on practical learning and industry collaboration.'
  },
  {
    id: 'city35',
    url: 'https://sibm.edu/assets/images/sandipani.jpg',
    title: 'Symbiosis International University',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission to Symbiosis International University is based on entrance exams like SNAP (Symbiosis National Aptitude Test) for MBA programs and SET (Symbiosis Entrance Test) for undergraduate programs.',
    Coursesoffer: 'Symbiosis International University offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines including Management, Law, Humanities, Engineering, Health Sciences, Media, and Communication.',
    FeeStructure: 'The fee structure at Symbiosis International University varies depending on the program and course level. Detailed fee information can be obtained from the official website or the admissions office.',
    Placement: 'Symbiosis International University has a strong placement record with many top companies visiting the campus for recruitment. The average salary package offered to students varies by program and specialization.',
    Cutoff: 'The cutoff scores for admission to various programs at Symbiosis International University depend on factors like the number of applicants, difficulty level of entrance exams, and seat availability. Prospective students are advised to check the official website for detailed cutoff information.',
    detail: 'Symbiosis International University, Pune, is a private, multi-campus university established in 2002. It is known for its excellent academic programs, diverse student community, and strong emphasis on research and innovation. The university has multiple campuses and offers state-of-the-art facilities and a vibrant campus life.'
},
{
    id: 'city36',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tilak_Maharashtra_Vidyapeeth_Old_Building%2C_Pune.jpg/1200px-Tilak_Maharashtra_Vidyapeeth_Old_Building%2C_Pune.jpg',
    title: 'Tilak Maharashtra Vidyapeeth',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admission to Tilak Maharashtra Vidyapeeth is based on entrance exams and merit, depending on the course. Candidates may need to appear for specific entrance tests conducted by the university or national level exams.',
    Coursesoffer: 'Tilak Maharashtra Vidyapeeth offers undergraduate, postgraduate, and doctoral programs in various fields such as Arts, Commerce, Science, Education, Social Work, and Health Sciences.',
    FeeStructure: 'The fee structure at Tilak Maharashtra Vidyapeeth varies by course and program level. For specific fee details, prospective students should refer to the university’s official website or contact the admissions office.',
    Placement: 'Tilak Maharashtra Vidyapeeth has a placement cell that assists students in securing job opportunities. The placement rate and salary packages vary depending on the program and industry demands.',
    Cutoff: 'The cutoff for various programs at Tilak Maharashtra Vidyapeeth depends on the number of applicants, the difficulty level of entrance exams, and seat availability. For detailed cutoff information, students should check the official website or contact the admissions office.',
    detail: 'Tilak Maharashtra Vidyapeeth, Pune, was established in 1921 and is named after the Indian nationalist leader Lokmanya Bal Gangadhar Tilak. It is recognized for its contributions to education and research, offering a range of programs across different fields. The university focuses on holistic education and has a legacy of promoting Indian culture and values.'
  },
  {
    id: 'city37',
    url: 'https://images.shiksha.com/mediadata/images/1543823229phplNyXgK.png',
    title: 'Sinhgad College of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'The Candidate Should have obtained the score in MHT-CET or JEE (Main) Passed Diploma in Engineering and Technology and obtained at least 50 % marks (at least 45 % marks, in case of Backward class categories and Persons with Disability candidates belonging to Maharashtra State only)',
    Coursesoffer: 'Courses offered by Sinhgad College of Engineering are B.Tech, M.E./M.Tech, MBA/PGDM. These courses are in the stream of Engineering, Business & Management Studies. Sinhgad College of Engineering offers specializations such as B.Tech specializations in Mechanical Engineering, Computer Science Engineering, Telecommunication Engineering, Information Technology, Civil Engineering, Production Engineering, Chemical Engineering, Biotechnology Engineering, Electronics Engineering, M.E./M.Tech specializations in Chemical Engineering, Communications Engineering, Computer Science Engineering, Information Technology, Electrical Engineering, VLSI Design, Environmental Engineering, Mechatronics Engineering, Structural Engineering.',
    FeeStructure: 'FEE STRUCTURE FOR FIRST YEAR ENGG FOR A.Y. 2023-24 ; MAHARASHTRA STUDENTS, OPEN, 107826, 16174, 11170 ; MAHARASHTRA STUDENTS · OBC/EBC, 53913, 16174',
    Placement: 'Placements: Sinhgad College of Engineering has offered placements in 100+ different companies all over the years, with an average package of 5–6 lacs per year. The highest package is around 25 lacs. In 2020-2021, 1500+ students got packages of 4-5 lakhs, while 30+ students got packages above 7 lakhs.',
    Cutoff: 'The overall cutoff rank for Maharashtra JEE Main is 7500 - 41211 for round 1. Courses. 2023. 2022. BE Computer Engineering.',
    detail: 'Sinhgad College of Engineering (SCOE) Pune is a well-known engineering college established in 1996. It is affiliated with Savitribai Phule Pune University and offers undergraduate and postgraduate programs in engineering. SCOE is known for its comprehensive academic programs, experienced faculty, and strong emphasis on research and development. The college has a vibrant campus life and excellent infrastructure.'
  },
  {
    id: 'city38',
    url: 'https://www.highereducationdigest.com/wp-content/uploads/2020/11/DKTE-1-550x330.jpg',
    title: 'D.K.T.E. Society’s Textile and Engineering Institute',
    state: 'Maharashtra',
    city: 'Ichalkaranji',
    AdmissionProcess: 'Admission to D.K.T.E. Society’s Textile and Engineering Institute is based on national or state-level entrance exams like JEE Main and MHT CET for undergraduate programs, and GATE for postgraduate programs.',
    Coursesoffer: 'The institute offers a variety of undergraduate and postgraduate programs in Textile Engineering, Mechanical Engineering, Civil Engineering, Computer Science and Engineering, Electronics Engineering, and Information Technology.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.1 Lakh per year, and for M.Tech programs, it is approximately INR 1.2 Lakh per year.',
    Placement: 'The institute has a strong placement record with companies like Raymond, Reliance Industries, Tata Consultancy Services, Infosys, Wipro, and Accenture visiting the campus for recruitment.',
    Cutoff: 'The cutoff for admission varies each year based on the entrance exam scores and the number of applicants. Detailed cutoff information can be obtained from the official website or the admissions office.',
    detail: 'D.K.T.E. Society’s Textile and Engineering Institute, established in 1982, is known for its excellence in textile and engineering education. It is affiliated with Shivaji University and offers a blend of theoretical and practical learning experiences, state-of-the-art infrastructure, and highly qualified faculty.'
},
{
    id: 'city39',
    url: 'https://images.shiksha.com/mediadata/images/1510571237phpXoPJ9R.jpeg',
    title: 'Government College of Engineering',
    state: 'Maharashtra',
    city: 'Karad',
    AdmissionProcess: 'Admission is through entrance exams like JEE Main and MHT CET for undergraduate courses, and GATE for postgraduate courses.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in Civil Engineering, Mechanical Engineering, Electrical Engineering, Information Technology, and Electronics and Telecommunication Engineering.',
    FeeStructure: 'The fee for B.Tech programs is approximately INR 85,000 per year, and for M.Tech programs, it is around INR 1 Lakh per year.',
    Placement: 'Top companies such as Tata Consultancy Services, Infosys, L&T, Capgemini, and Cognizant visit the campus for recruitment.',
    Cutoff: 'Cutoff ranks vary annually based on entrance exam scores and the number of applicants. Specific cutoff details are available on the official website.',
    detail: 'Government College of Engineering, Karad, established in 1960, is one of the premier engineering institutes in Maharashtra. Affiliated with Shivaji University, it provides quality education and promotes research and innovation in various engineering fields.'
},
{
    id: 'city40',
    url: 'https://www.jjmcoe.ac.in/wp-content/uploads/2021/03/Untitled-1-1024x453-600x300.jpg',
    title: 'Dr. J. J. Magdum College of Engineering',
    state: 'Maharashtra',
    city: 'Kolhapur',
    AdmissionProcess: 'Admissions are based on JEE Main and MHT CET scores for undergraduate programs and GATE scores for postgraduate programs.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics and Telecommunication Engineering, and Computer Science and Engineering.',
    FeeStructure: 'The annual fee for B.Tech programs is around INR 90,000, and for M.Tech programs, it is approximately INR 1 Lakh.',
    Placement: 'Companies like TCS, Wipro, Infosys, Tech Mahindra, and Bajaj Auto are some of the regular recruiters at the campus.',
    Cutoff: 'The cutoff marks vary each year depending on the entrance exam results and the number of applicants. Detailed information is available on the official website.',
    detail: 'Dr. J. J. Magdum College of Engineering, established in 1992, is affiliated with Shivaji University. It is known for its dedicated faculty, modern infrastructure, and a strong focus on practical and research-oriented education.'
},
{
    id: 'city41',
    url: 'https://www.collegebatch.com/static/clg-gallery/dwarkadas-j-sanghvi-college-of-engineering-mumbai-213171.jpg',
    title: 'Dwarkadas J. Sanghvi College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on the JEE Main and MHT CET scores for undergraduate programs, and GATE scores for postgraduate programs.',
    Coursesoffer: 'The college offers undergraduate and postgraduate programs in Information Technology, Computer Engineering, Mechanical Engineering, Chemical Engineering, Electronics and Telecommunication Engineering, and Biomedical Engineering.',
    FeeStructure: 'The annual fee for B.Tech programs is approximately INR 1.9 Lakhs, and for M.Tech programs, it is around INR 1.5 Lakhs.',
    Placement: 'Top recruiters include TCS, Infosys, L&T, Capgemini, JP Morgan, and Accenture.',
    Cutoff: 'Cutoff ranks vary yearly based on the entrance exam performance and the number of applicants. Specific cutoff details are available on the official website.',
    detail: 'Dwarkadas J. Sanghvi College of Engineering, established in 1994, is affiliated with the University of Mumbai. Known for its excellent academic programs, experienced faculty, and strong industry connections, it offers a conducive environment for engineering education.'
  },
  {
    id: 'city42',
    url: 'https://images.collegedunia.com/public/college_data/images/appImage/13313_dmce.png',
    title: 'Datta Meghe College of Engineering',
    state: 'Maharashtra',
    city: 'Airoli',
    AdmissionProcess: 'Admission to Datta Meghe College of Engineering is based on JEE Main and MHT CET scores for undergraduate courses. For postgraduate courses, admissions are based on GATE scores.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Computer Engineering, Information Technology, Electronics and Telecommunication Engineering, and Civil Engineering. Postgraduate programs include M.Tech in Mechanical Engineering and Computer Engineering.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.2 Lakhs per year, and for M.Tech programs, it is around INR 1.5 Lakhs per year.',
    Placement: 'Top recruiters include Tata Consultancy Services, Infosys, Wipro, Capgemini, Accenture, and L&T. The placement rate is consistently high with good salary packages.',
    Cutoff: 'The cutoff varies each year based on the entrance exam scores. Detailed cutoff information can be found on the official website.',
    detail: 'Datta Meghe College of Engineering, established in 1988, is affiliated with the University of Mumbai. Known for its academic excellence and industry-oriented programs, the college provides a robust infrastructure, experienced faculty, and a vibrant campus life.'
},
{
    id: 'city43',
    url: 'https://media.getmyuni.com/azure/college-image/big/government-college-of-engineering-gcoe-amravati.jpg',
    title: 'Government College of Engineering',
    state: 'Maharashtra',
    city: 'Amravati',
    AdmissionProcess: 'Admission is through JEE Main and MHT CET for undergraduate programs, and GATE for postgraduate programs.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Mechanical Engineering, Electrical Engineering, Computer Science and Engineering, and Electronics and Telecommunication Engineering. Postgraduate programs include M.Tech in various specializations.',
    FeeStructure: 'The fee for B.Tech programs is approximately INR 90,000 per year, and for M.Tech programs, it is around INR 1 Lakh per year.',
    Placement: 'Companies like TCS, Infosys, Wipro, L&T, and Tech Mahindra visit the campus for placements. The college has a good placement record with a variety of companies.',
    Cutoff: 'Cutoff ranks vary annually based on entrance exam scores and applicant numbers. Specific details are available on the official website.',
    detail: 'Government College of Engineering, Amravati, established in 1964, is one of the oldest engineering colleges in Maharashtra. Affiliated with Sant Gadge Baba Amravati University, it offers a blend of quality education, research opportunities, and a strong alumni network.'
},
{
    id: 'city44',
    url: 'https://media.glassdoor.com/l/585695/pillai-insitute-of-information-technology-piit-office.jpg',
    title: 'Pillai’s Institute of Information Technology',
    state: 'Maharashtra',
    city: 'Panvel',
    AdmissionProcess: 'Admission to Pillai’s Institute of Information Technology is based on JEE Main and MHT CET scores for undergraduate programs, and GATE scores for postgraduate programs.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Engineering, Information Technology, Electronics and Telecommunication Engineering, Mechanical Engineering, and Civil Engineering. Postgraduate programs include M.Tech in various specializations.',
    FeeStructure: 'The annual fee for B.Tech programs is approximately INR 1.3 Lakhs, and for M.Tech programs, it is around INR 1.6 Lakhs.',
    Placement: 'Top recruiters include Tata Consultancy Services, Capgemini, Infosys, Wipro, Accenture, and Cognizant. The institute has a robust placement cell that facilitates good job opportunities for students.',
    Cutoff: 'The cutoff varies each year depending on entrance exam scores and the number of applicants. Detailed information is available on the official website.',
    detail: 'Pillai’s Institute of Information Technology, established in 1999, is affiliated with the University of Mumbai. The institute is known for its modern infrastructure, experienced faculty, and strong industry connections, providing a conducive environment for technical education and research.'
  },
  {
    id: 'city45',
    url: 'https://www.theassociates.co.in/wp-content/uploads/2021/07/m11.jpg',
    title: 'Rajiv Gandhi Institute of Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Rajiv Gandhi Institute of Technology admission 2024 will be open soon. The institute offers eight UG & PG programmes under multiple specialisations. Rajiv Gandhi Institute of Technology accepts national or state-level entrance exams like JEE Main /MHT CET, and MHTCET MTech /GATE for BTech and MTech admissions respectively. The mode of application for all the courses at Rajiv Gandhi Institute of Technology is online, and admission is entrance exam-based.',
    Coursesoffer: 'Rajiv Gandhi Institute of Technology, Mumbai has courses such as B.Tech, M.E./M.Tech to offer. These courses are in the stream of Engineering. Rajiv Gandhi Institute of Technology, Mumbai has specializations such as B.Tech specializations in Computer Science Engineering, Electronics Engineering, Information Technology, Instrumentation Technology, Mechanical Engineering, M.E./M.Tech specializations in Electronics Engineering, Information Technology, Power Engineering.',
    FeeStructure: 'B.E. / B.Tech(6 courses) - 4.2 L, 10+2: 45%, Exams: JEE Main, MHT CET. M.E./M.Tech(3 courses) - 1.3 L, Graduation: 50%, Exams: GATE, MHTCET MTech.',
    Placement: 'Many companies like Quantifi, LTI, TCS, Infosys, Media.net, Axis Bank, Flexiloans, and CATking, etc., visit the campus to hire students.',
    Cutoff: 'Rajiv Gandhi Institute of Technology, Mumbai B.E. in Computer Engineering cutoff 2023 closed at 61308 for the General All India category students. The Round 1 closing rank for the same was 60660. During the Rajiv Gandhi Institute of Technology, Mumbai cutoff 2022, the Round 1 and the Last Round closing cutoff for B.E. in Computer Engineering were 103254 and 73619 for the same category. Comparing the latest year cutoff with the previous year, Rajiv Gandhi Institute of Technology, Mumbai witnessed a declining trend for the B.E. in Computer Engineering course.',
    detail: 'Rajiv Gandhi Institute of Technology (RGIT) Mumbai is an engineering college affiliated with the University of Mumbai. Established in 1992, it offers undergraduate and postgraduate programs in various engineering disciplines. RGIT is known for its quality education, experienced faculty, and modern infrastructure. The college aims to develop competent engineers through a blend of theoretical and practical learning.'
  },
  {
    id: 'city46',
    url: 'https://www.collegebatch.com/static/clg-gallery/vidyalankar-institute-of-technology-mumbai-258190.jpg',
    title: 'Vidyalankar Institute of Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to Vidyalankar Institute of Technology is based on JEE Main and MHT CET scores for undergraduate programs. For postgraduate programs, admissions are based on GATE scores.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Engineering, Information Technology, Electronics and Telecommunication Engineering, Biomedical Engineering, and Electronics Engineering. Postgraduate programs include M.E. in Computer Engineering and Information Technology.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.5 Lakhs per year, and for M.Tech programs, it is around INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters include Tata Consultancy Services, Infosys, Wipro, Accenture, Capgemini, and L&T. The college has a robust placement cell with a high placement rate and attractive salary packages.',
    Cutoff: 'The cutoff varies each year based on entrance exam scores and seat availability. Detailed cutoff information is available on the official website.',
    detail: 'Vidyalankar Institute of Technology (VIT) Mumbai is a premier engineering college affiliated with the University of Mumbai. Established in 1999, it offers undergraduate and postgraduate programs in various engineering disciplines. VIT is known for its high academic standards, experienced faculty, and modern infrastructure. The college focuses on nurturing competent engineers through a blend of theoretical and practical learning.'
},
{
    id: 'city47',
    url: 'https://images.shiksha.com/mediadata/images/1510316030php1Ynyf3.jpeg',
    title: 'Fr. Conceicao Rodrigues College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admission to Fr. Conceicao Rodrigues College of Engineering is based on JEE Main and MHT CET scores for undergraduate programs. For postgraduate programs, admissions are based on GATE scores.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Information Technology, Electronics and Telecommunication Engineering, Mechanical Engineering, and Production Engineering. Postgraduate programs include M.E. in Mechanical Engineering and Electronics Engineering.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.4 Lakhs per year, and for M.Tech programs, it is around INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters include Infosys, TCS, L&T, Accenture, Capgemini, and Godrej. The college has a strong placement record with good industry connections.',
    Cutoff: 'Cutoff ranks vary annually based on entrance exam scores and the number of applicants. Specific details can be found on the official website.',
    detail: 'Fr. Conceicao Rodrigues College of Engineering (CRCE) Mumbai is an esteemed engineering college affiliated with the University of Mumbai. Established in 1984, it offers undergraduate and postgraduate programs in various engineering disciplines. CRCE is known for its quality education, experienced faculty, and state-of-the-art infrastructure. The college focuses on nurturing competent engineers through a blend of academics and practical exposure.'
  },
  {
    id: 'city48',
    url: 'https://images.shiksha.com/mediadata/images/1652074140php1kO921.jpeg',
    title: 'Jawaharlal Nehru Engineering College',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to Jawaharlal Nehru Engineering College are based on MHT CET and JEE Main scores for undergraduate courses. For postgraduate courses, admissions are based on GATE scores.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Computer Science and Engineering, Electrical Engineering, Electronics and Telecommunication Engineering, Information Technology, Mechanical Engineering, and Production Engineering. Postgraduate programs include M.E. in Computer Science and Engineering, Mechanical Engineering, and Structural Engineering.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 1.2 Lakhs per year, and for M.Tech programs, it is around INR 1.0 Lakh per year.',
    Placement: 'Top recruiters include Tata Consultancy Services, Infosys, Wipro, Accenture, Cognizant, and L&T. The college has a strong placement cell with a good track record of placements.',
    Cutoff: 'The cutoff varies each year based on entrance exam scores and seat availability. Detailed cutoff information is available on the official website.',
    detail: 'Jawaharlal Nehru Engineering College (JNEC) Aurangabad is one of the leading engineering colleges in Maharashtra, affiliated with Dr. Babasaheb Ambedkar Technological University. Established in 1983, the college is known for its high academic standards, experienced faculty, and modern infrastructure. JNEC focuses on providing quality education and fostering research and innovation among students.'
  },
  {
    id: 'city49',
    url: 'https://www.joonsquare.com/usermanage/image/business/m-h-saboo-siddik-college-of-engineering-mumbai-city-13727/m-h-saboo-siddik-college-of-engineering-mumbai-city-m.h.-saboo-siddik-college-002.jpg',
    title: 'M.H Saboo Siddik College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on the scores obtained in MHT CET or JEE Main. Candidates must meet the eligibility criteria set by the Directorate of Technical Education (DTE), Maharashtra.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Computer Engineering, Electronics Engineering, Mechanical Engineering, and Automobile Engineering. Postgraduate programs are also available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.5 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, L&T, Mahindra, Accenture, and Capgemini. The college has an active placement cell that provides training and placement assistance to students.',
    Cutoff: 'The cutoff varies each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'M.H Saboo Siddik College of Engineering, established in 1936, is affiliated with the University of Mumbai and recognized by AICTE. The college is known for its strong emphasis on technical education and research, experienced faculty, and excellent infrastructure.'
  },
  {
    id: 'city50',
    url: 'https://images.collegedunia.com/public/college_data/images/appImage/28795_mit_new.jpg?h=260&w=360&mode=crop',
    title: 'Maharashtra Academy of Engineering',
    state: 'Maharashtra',
    city: 'Alandi',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate courses. GATE scores are required for postgraduate admissions.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Computer Engineering, Electronics and Telecommunication Engineering, Information Technology, and Civil Engineering. Postgraduate programs are also available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters include Infosys, Cognizant, Wipro, TCS, and Capgemini. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs are based on MHT CET and JEE Main scores and vary each year. Detailed information is available on the college website.',
    detail: 'Maharashtra Academy of Engineering (MAE), established in 1999, is affiliated with Savitribai Phule Pune University and approved by AICTE. The college is known for its commitment to quality education, well-equipped laboratories, and a strong focus on research and development.'
  },
  {
    id: 'city51',
    url: 'https://moderncoe.edu.in/images/new_banner1.jpg',
    title: 'P.E.S. Modern College of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. GATE scores are considered for postgraduate admissions.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Electrical Engineering, and Information Technology. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.4 Lakhs per year.',
    Placement: 'Top recruiters include Infosys, TCS, Wipro, Cognizant, and Accenture. The college has a dedicated placement cell that provides training and placement support.',
    Cutoff: 'The cutoff varies each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'P.E.S. Modern College of Engineering, established in 1999, is affiliated with Savitribai Phule Pune University and approved by AICTE. The college is known for its academic excellence, experienced faculty, and modern infrastructure.'
  },
  {
    id: 'city52',
    url: 'https://singheducation.co.in/images/CollegeImages/363489rAJ.jpg',
    title: 'Rajarshi Shahu College of Engineering',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, and Information Technology. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.7 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, Cognizant, and Capgemini. The placement cell provides training and placement assistance to students.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Rajarshi Shahu College of Engineering (RSCOE), established in 2001, is affiliated with Savitribai Phule Pune University and approved by AICTE. The college is known for its academic excellence, experienced faculty, and modern infrastructure.'
  },
  {
    id: 'city53',
    url: 'https://famt.ac.in/wp-content/uploads/2018/03/DSC_0302-1024x681.jpg',
    title: 'Finolex Academy of Management & Technology',
    state: 'Maharashtra',
    city: 'Ratnagiri',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Electronics and Telecommunication Engineering, Chemical Engineering, Computer Engineering, and Information Technology. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Wipro, Infosys, L&T, and Tech Mahindra. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Finolex Academy of Management & Technology (FAMT), established in 1996, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city54',
    url: 'https://images.collegedunia.com/public/college_data/images/campusimage/1631869741MIT_Cover%20Photo.jpg?mode=stretch',
    title: 'Maharashtra Institute of Technology',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. GATE scores are required for postgraduate admissions.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Civil Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, and Electrical Engineering. Postgraduate programs are also available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, Tech Mahindra, and L&T. The placement cell provides training and placement assistance to students.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Maharashtra Institute of Technology (MIT), Aurangabad, established in 2001, is affiliated with Dr. Babasaheb Ambedkar Marathwada University and approved by AICTE. The college is known for its academic excellence, well-equipped laboratories, and experienced faculty.'
  },
  {
    id: 'city55',
    url: 'https://content.jdmagicbox.com/comp/aurangabad-maharashtra/p7/9999px240.x240.101226224524.m3p7/catalogue/g-s-mandal-marthwada-institute-of-technology-aicte-approved-marathwada-v-p-aurangabad-aurangabad-maharashtra-institutes-for-b-arch-9pt6hpotrj.jpg',
    title: 'Marathwada Institute of Technology',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. GATE scores are considered for postgraduate admissions.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Civil Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.3 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Wipro, Infosys, Tech Mahindra, and L&T. The placement cell provides training and placement assistance to students.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Marathwada Institute of Technology (MIT), Aurangabad, established in 1975, is affiliated with Dr. Babasaheb Ambedkar Marathwada University and approved by AICTE. The college is known for its academic excellence, well-equipped laboratories, and experienced faculty.'
  },
  {
    id: 'city56',
    url: 'https://images.shiksha.com/mediadata/images/1558422017phpXpfQwT.jpeg',
    title: 'Shram Sadhana Bombay Trust’s College of Engineering & Technology',
    state: 'Maharashtra',
    city: 'Jalgaon',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. GATE scores are required for postgraduate admissions.',
    Coursesoffer: 'The college offers undergraduate programs in Mechanical Engineering, Civil Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, Tech Mahindra, and L&T. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Shram Sadhana Bombay Trust’s College of Engineering & Technology (SSBT), established in 1983, is affiliated with North Maharashtra University and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city57',
    url: 'https://admissionindia.co.in/wp-content/uploads/2022/12/St.jpg',
    title: 'St. Francis Institute of Technology',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Information Technology, and Electrical Engineering. Postgraduate programs are available in Computer Engineering and Electronics and Telecommunication Engineering.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.6 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Capgemini, L&T, and Accenture. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'St. Francis Institute of Technology (SFIT), established in 1999, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
 },
 {
  id: 'city58',
  url: 'https://images.shiksha.com/mediadata/images/1545136069php2LcHYm.png',
  title: 'Tatyasaheb Kore Institute of Engineering and Technology',
  state: 'Maharashtra',
  city: 'Kolhapur',
  AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
  Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Mechanical Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, Electrical Engineering, and Chemical Engineering. Postgraduate programs are available in select disciplines.',
  FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
  Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Tech Mahindra. The placement cell actively supports students in securing employment.',
  Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
  detail: 'Tatyasaheb Kore Institute of Engineering and Technology (TKIET), established in 1983, is affiliated with Shivaji University and approved by AICTE. The college is known for its academic excellence, well-equipped laboratories, and experienced faculty.'
  },
  {
    id: 'city59',
    url: 'https://images.shiksha.com/mediadata/images/1685450623php7XuFBe.jpeg',
    title: 'Terna Engineering College',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Computer Engineering, Electronics and Telecommunication Engineering, Information Technology, Mechanical Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.5 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Capgemini. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Terna Engineering College (TEC), established in 1991, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city60',
    url: 'https://images.shiksha.com/mediadata/images/1566293742phpRVy7Mk.jpeg',
    title: 'Thadomal Shahani Engineering College',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Information Technology, Biomedical Engineering, and Chemical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.6 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Capgemini. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Thadomal Shahani Engineering College (TSEC), established in 1983, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city61',
    url: 'https://college.abhinavmis.org/websites/polytechnic-website/wp-content/uploads/2021/10/polytechnic-1024x683-1.jpg',
    title: 'Abhinav College of Engineering & Polytechnic',
    state: 'Maharashtra',
    city: 'Pune',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For diploma programs, admissions are based on SSC scores.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Mechanical Engineering, Computer Engineering, and Electronics and Telecommunication Engineering. Diploma programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.0 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Capgemini. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Abhinav College of Engineering & Polytechnic, established in 2009, is affiliated with Savitribai Phule Pune University and approved by AICTE. The college is known for its academic excellence, experienced faculty, and modern infrastructure.'
  },
  {
    id: 'city62',
    url: 'https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1663597652082images.jpeg',
    title: 'PES College of Engineering',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Mechanical Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Tech Mahindra. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'PES College of Engineering, established in 1994, is affiliated with Dr. Babasaheb Ambedkar Marathwada University and approved by AICTE. The college is known for its high academic standards, experienced faculty, and modern infrastructure.'
  },
  {
    id: 'city63',
    url: 'https://i0.wp.com/eng.rizvi.edu.in/wp-content/uploads/2021/08/DSC_6031-1-1.jpg?fit=768%2C512&ssl=1',
    title: 'Rizvi College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Civil Engineering, Computer Engineering, Electronics and Telecommunication Engineering, and Mechanical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.5 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Accenture. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Rizvi College of Engineering, established in 1998, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its quality education, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city64',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Dr._Babasaheb_Ambedkar_Marathwada_University%2C_formerly_Marathwada_University%2C_is_located_in_Aurangabad%2C_Maharashtra%2C_India._It_is_named_after_B._R._Ambedkar%2C_an_Indian_jurist%2C_political_leader%2C.jpg',
    title: 'Dr. Babasaheb Ambedkar Marathwada University',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions for engineering programs are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The university offers undergraduate programs in Civil Engineering, Mechanical Engineering, Computer Science and Engineering, Electronics and Telecommunication Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Tech Mahindra. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Dr. Babasaheb Ambedkar Marathwada University, established in 1958, is a state university offering a wide range of undergraduate and postgraduate programs. It is known for its academic excellence, experienced faculty, and comprehensive research facilities.'
  },
  {
    id: 'city65',
    url: 'https://www.collegebatch.com/static/clg-gallery/atharva-college-of-engineering-mumbai-231560.jpg',
    title: 'Atharva College of Engineering',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are based on MHT CET and JEE Main scores for undergraduate programs. For postgraduate programs, GATE scores are considered.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Information Technology, Mechanical Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.6 Lakhs per year.',
    Placement: 'Top recruiters include TCS, Infosys, Wipro, L&T, and Capgemini. The placement cell actively supports students in securing employment.',
    Cutoff: 'Cutoffs vary each year based on entrance exam scores and seat availability. Detailed cutoff information can be found on the official website.',
    detail: 'Atharva College of Engineering, established in 1999, is affiliated with the University of Mumbai and approved by AICTE. The college is known for its high academic standards, experienced faculty, and state-of-the-art infrastructure.'
  },
  {
    id: 'city66',
    url: 'https://mma.prnewswire.com/media/1162287/NMIMS_Campus.jpg?p=twitter',
    title: 'Mukesh Patel School of Management and Engineering (MPSTME)',
    state: 'Maharashtra',
    city: 'Mumbai',
    AdmissionProcess: 'Admissions are primarily based on NMIMS NPAT entrance exam scores for undergraduate programs and NMAT scores for postgraduate programs. Additionally, candidates need to clear the interview round for final selection.',
    Coursesoffer: 'MPSTME offers undergraduate programs in various disciplines including Computer Engineering, Information Technology, Electronics and Telecommunication Engineering, Mechanical Engineering, and Civil Engineering. Postgraduate programs are available in Management, Engineering, and Technology fields.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 3.5 Lakhs per year.',
    Placement: 'Top recruiters visiting MPSTME include Google, Microsoft, Amazon, Accenture, and Tata Consultancy Services (TCS). The placement cell provides extensive support and training to students to enhance their employability skills.',
    Cutoff: 'Cutoffs for admission vary each year based on the NMIMS NPAT scores and seat availability. Detailed cutoff information is available on the official website of NMIMS.',
    detail: 'Mukesh Patel School of Management and Engineering (MPSTME) is a part of NMIMS (Narsee Monjee Institute of Management Studies), established in 2006. It is known for its interdisciplinary approach to education, industry-oriented curriculum, and strong ties with corporate partners.'
  },

  {
    id: 'city67',
    url: 'https://content.jdmagicbox.com/comp/aurangabad-maharashtra/g3/9999px240.x240.091218164109.y5g3/catalogue/shreeyash-college-of-engineering-and-technology-aurangabad-ho-aurangabad-maharashtra-colleges-5idz7jf.jpg',
    title: 'Shreeyash College of Engineering and Technology',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters visiting Shreeyash College of Engineering and Technology include Infosys, Tech Mahindra, TCS, Wipro, and Capgemini. The college has a dedicated placement cell that organizes various training sessions and workshops to prepare students for placements.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Shreeyash College of Engineering and Technology, established in 2008, is affiliated with Dr. Babasaheb Ambedkar Marathwada University, Aurangabad. The college is known for its focus on research and innovation, providing a conducive environment for overall student development.'
  },

  {
    id: 'city68',
    url: 'https://macet.ac.in/AdminPanel/Admin/Slider_Photo/964667141.jpg',
    title: 'Maulana Azad College of Engineering and Technology',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.5 Lakhs per year.',
    Placement: 'Top recruiters visiting Maulana Azad College of Engineering and Technology include Infosys, TCS, Wipro, L&T, and Tech Mahindra. The college has a dedicated training and placement cell that conducts various activities to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission vary each year based on MHT CET scores and seat availability. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Maulana Azad College of Engineering and Technology, established in 2010, is affiliated with Dr. Babasaheb Ambedkar Marathwada University, Aurangabad. The college is committed to providing quality technical education and fostering innovation and entrepreneurship among students.'
  },

  {
    id: 'city69',
    url: 'https://images.shiksha.com/mediadata/images/1507272742phpiCpSYf.jpeg',
    title: 'Deogiri Institute of Engineering and Management Studies',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.3 Lakhs per year.',
    Placement: 'Top recruiters visiting Deogiri Institute of Engineering and Management Studies include Infosys, TCS, Wipro, L&T, and Capgemini. The institute has a dedicated placement cell that organizes various training programs and mock interviews to prepare students for placements.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the institute admission office.',
    detail: 'Deogiri Institute of Engineering and Management Studies, established in 2009, is affiliated with Dr. Babasaheb Ambedkar Marathwada University, Aurangabad. The institute focuses on holistic development and offers a conducive environment for academic excellence and research.'
  },
  {
    id: 'city70',
    url: 'https://gpabad.ac.in/wp-content/uploads/2021/01/girlshostel.jpg',
    title: 'Government Polytechnic College',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to diploma programs are based on the Maharashtra State Board of Technical Education (MSBTE) entrance exam scores.',
    Coursesoffer: 'The college offers diploma programs in various engineering disciplines including Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering.',
    FeeStructure: 'The fee structure for diploma programs is approximately INR 30,000 per year.',
    Placement: 'Top companies visiting Government Polytechnic College for recruitment include TATA Motors, Bajaj Auto, Mahindra & Mahindra, and Larsen & Toubro. The college provides career guidance and placement assistance to its diploma students.',
    Cutoff: 'Cutoffs for admission depend on the MSBTE entrance exam scores and may vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Government Polytechnic College, established in 1955, is one of the premier polytechnic institutes in Maharashtra. It is affiliated with the Maharashtra State Board of Technical Education (MSBTE) and is known for its quality technical education and industry-oriented curriculum.'
  },
  {
    id: 'city71',
    url: 'https://images.shiksha.com/mediadata/images/1653448704phpVTqORf.jpeg',
    title: 'MGM College of Engineering and Technology',
    state: 'Maharashtra',
    city: 'Aurangabad',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters visiting MGM College of Engineering and Technology include Infosys, TCS, Wipro, L&T, and Capgemini. The college has a dedicated placement cell that organizes various training programs and mock interviews to prepare students for placements.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'MGM College of Engineering and Technology, established in 1984, is affiliated with Dr. Babasaheb Ambedkar Marathwada University, Aurangabad. The college aims to provide quality technical education and groom students into competent professionals.'
  },

  {
    id: 'city72',
    url: 'https://singheducation.co.in/images/CollegeImages/181412NDMVP.jpg',
    title: 'Nashik District Maratha Vidya Prasark Samaj\'s Karmaveer Adv. Baburao Ganaptrao Thakare College of Engineering',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters visiting Karmaveer Adv. Baburao Ganaptrao Thakare College of Engineering include Infosys, TCS, Wipro, L&T, and Tech Mahindra. The college has a dedicated training and placement cell that conducts various activities to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Nashik District Maratha Vidya Prasark Samaj\'s Karmaveer Adv. Baburao Ganaptrao Thakare College of Engineering, commonly known as KBT College of Engineering, is affiliated with Savitribai Phule Pune University. The college is committed to providing quality technical education and nurturing students for their overall development.'
  },

  {
    id: 'city73',
    url: 'https://images.shiksha.com/mediadata/images/1645090094phpVMLYz6.jpeg',
    title: 'Sandip Institute of Engineering and Management',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.3 Lakhs per year.',
    Placement: 'Top recruiters visiting Sandip Institute of Engineering and Management include Infosys, TCS, Wipro, L&T, and Capgemini. The institute has a dedicated placement cell that organizes various training programs and mock interviews to prepare students for placements.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the institute admission office.',
    detail: 'Sandip Institute of Engineering and Management, established in 2008, is affiliated with Savitribai Phule Pune University. The institute focuses on imparting quality education, fostering innovation, and promoting entrepreneurship among students.'
  },

  {
    id: 'city74',
    url: 'https://content3.jdmagicbox.com/comp/nashik/75/0253p253std1175/catalogue/matoshri-college-of-engineering-and-research-centre-eklahara-nashik-engineering-colleges-gk1iqfwhm6.jpg',
    title: 'Matoshri College of Engineering and Research Centre',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters visiting Matoshri College of Engineering and Research Centre include Infosys, TCS, Wipro, L&T, and Capgemini. The college has a dedicated placement cell that organizes various training programs and mock interviews to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Matoshri College of Engineering and Research Centre, established in 1999, is affiliated with Savitribai Phule Pune University. The college is committed to providing quality technical education and fostering a conducive environment for research and innovation.'
  },
  {
    id: 'city75',
    url: 'https://images.shiksha.com/mediadata/images/1490770158phpRnBdO3.jpeg',
    title: 'Symbiosis Institute of Technology',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on the Symbiosis Entrance Test (SET) scores followed by Personal Interaction (PI) and Writing Ability Test (WAT). For postgraduate programs, candidates need to qualify through the Symbiosis National Aptitude Test (SNAP) followed by PI and WAT.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Science and Engineering, Information Technology, Electronics and Telecommunication Engineering, Mechanical Engineering, and Civil Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.Tech programs is approximately INR 2.5 Lakhs per year.',
    Placement: 'Top recruiters visiting Symbiosis Institute of Technology include Google, Microsoft, Amazon, Tata Consultancy Services (TCS), and Infosys. The institute provides extensive placement assistance and conducts various skill development programs to enhance students\' employability.',
    Cutoff: 'Cutoffs for admission depend on SET scores and may vary each year. Detailed cutoff information can be obtained from the institute admission office.',
    detail: 'Symbiosis Institute of Technology, established in 2008, is a constituent of Symbiosis International (Deemed University), Pune. The institute is known for its academic excellence, industry-oriented curriculum, and strong emphasis on research and innovation.'
  },

  {
    id: 'city76',
    url: 'https://cms.sinhgad.edu/media/511888/institute2_527x300.jpg',
    title: 'Nashik\'s N.B. Naavle Sinhgad College of Engineering',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.1 Lakhs per year.',
    Placement: 'Top recruiters visiting N.B. Naavle Sinhgad College of Engineering include Infosys, TCS, Wipro, L&T, and Capgemini. The college has a dedicated training and placement cell that conducts various activities to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Nashik\'s N.B. Naavle Sinhgad College of Engineering, affiliated with Savitribai Phule Pune University, is committed to providing quality technical education and nurturing students for their overall development. Established in 2009, the college focuses on academic excellence and industry exposure.'
  },

  {
    id: 'city77',
    url: 'https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1614723210648IMG_20150907_131849.jpg',
    title: 'Jagadamba College of Engineering and Technology',
    state: 'Maharashtra',
    city: 'Nashik',
    AdmissionProcess: 'Admissions to undergraduate programs are based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters visiting Jagadamba College of Engineering and Technology include Infosys, TCS, Wipro, L&T, and Capgemini. The college has a dedicated placement cell that organizes various training programs and mock interviews to prepare students for placements.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Jagadamba College of Engineering and Technology, established in 2007, is affiliated with Savitribai Phule Pune University. The college aims to provide quality technical education and groom students for successful careers in engineering and technology.'
  },

  {
    id: 'city78',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/WIT_Main_Building.jpg',
    title: 'Walchand Institute of Technology',
    state: 'Maharashtra',
    city: 'Solapur',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The institute offers undergraduate programs in Computer Science and Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.3 Lakhs per year.',
    Placement: 'Top recruiters visiting Walchand Institute of Technology include Tata Motors, Bajaj Auto, Mahindra & Mahindra, and Larsen & Toubro. The institute has a dedicated training and placement cell that conducts various activities to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the institute admission office.',
    detail: 'Walchand Institute of Technology, established in 1983, is affiliated with Solapur University. The institute is known for its academic excellence, state-of-the-art infrastructure, and strong industry connections.'
  },
  {
    id: 'city79',
    url: 'https://bizimages.withfloats.com/actual/60829daefe463d00015bc5fc.jpg',
    title: 'Nuva College of Engineering and Technology',
    state: 'Maharashtra',
    city: 'Nagpur',
    AdmissionProcess: 'Admissions to undergraduate programs are primarily based on MHT CET scores. For postgraduate programs, candidates need to qualify through GATE or MAH-MCA-CET.',
    Coursesoffer: 'The college offers undergraduate programs in Computer Engineering, Electronics and Telecommunication Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering. Postgraduate programs are available in select disciplines.',
    FeeStructure: 'The fee structure for B.E. programs is approximately INR 1.2 Lakhs per year.',
    Placement: 'Top recruiters visiting Nuva College of Engineering and Technology include Infosys, TCS, Wipro, L&T, and Capgemini. The college has a dedicated placement cell that organizes various training programs and mock interviews to enhance the employability of students.',
    Cutoff: 'Cutoffs for admission depend on MHT CET scores and vary each year. Detailed cutoff information can be obtained from the college admission office.',
    detail: 'Nuva College of Engineering and Technology, established in 2010, is affiliated with Rashtrasant Tukadoji Maharaj Nagpur University. The college is committed to providing quality technical education and fostering innovation among its students. Established in 2010, the college offers a conducive learning environment and modern infrastructure to facilitate holistic development.'
  },
];