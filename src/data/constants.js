
///////////// all tools and blogs images must be of dimension 9:5 w:h  i.e currently used one as dummmy -- 1.PNG  (577*320) --

//-----------------------Main intro------------------------------------------
export const Bio = { 
  name: "ToolBaazar",
  roles: [
    "SEO Tools",
    "Data Scraping Tools",
    "WhatsApp Marketing",
    "Email Marketing Tools",
    "Graphic Design Tools",
    "And Much More",
  ],
  description:
    "At ToolBaazar Hub, we bring you the best and latest in technology to enhance your digital life. Whether you're a professional looking for advanced solutions, a student seeking learning tools, or a tech enthusiast exploring the newest innovations, we've got you covered.",
  linkedin: "https://www.linkedin.com/in/k-m-shahzaib-8b720a315/",
  whatsapp: "https://wa.me/+923279144557",
  //insta: "https://www.instagram.com/asad__376/",
  facebook: "https://www.facebook.com/profile.php?id=61563671710411&mibextid=ZbWKwL",
  walogo: require('../images/walogo.png'),

};


// ----------function  ( not to change)-----------------------------------------------------------------
const cal_numreview= (reviews) => {
  const numReviews = reviews.length;
  
  return  numReviews;
};
const cal_rating= (reviews) => {
  const numReviews = reviews.length;
  if (numReviews === 0) return 0;

  const sumOfStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  const averageRating = sumOfStars / numReviews;

  return Math.round(averageRating);
};


//-----------------------------------------ADD TOOLS here-------------------------------
export const projects = [
    //----------------------tool 21---------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 21,
        title: "Mega SEO Tools Bundle",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://toolbaazar.com/components/cardinfo/cardinfo/20",
        image: require('../images/bulk_seo.png'),
        price: "7000 PKR",
        priceper: "month",
        description:
            "Here toolbaazar has brought a very exciting deal of bulk SEO tools which are really very helpful for SEO experts, content writers, link builders, marketers and",
        det_desc: [
            {
                para: "Here toolbaazar has brought a very exciting deal of bulk SEO tools which are really very helpful for SEO experts, content writers, link builders, marketers and all other professionals related to SEO. Grab this golden opportunity now and get all the premium SEO tools listed below:",
                point: [
                    "AHREFS (available with 30 credits and 99% uptime) with features: Keyword explore, Domain explore, Backlink analysis and Content explore",
                    "Semrush Unlimited",
                    "Moz Pro 100 search per day/personal 5000 query",
                    "Quetext with free Grammarly (5 Articles per day and maximum 500 words per search)",
                    "Wordai (10,000 Words per day)",
                    "Indexification (1000 Links per day)",
                    "Envato Elements (20 Downloads per day)",
                    "Grammarly unlimited",
                    "Canva premium",
                    "Stock Unlimited",
                    "Keyword Revealer",
                    "Woorank",
                    "Spyfu",
                    "Ubersuggest",
                    "Linkedin Learning",
                    "KW Finder",
                    "Plagiarism Checker",
                    "Long Tail Keyword Researcher",
                    "Word Tracker",
                    "Pages Generator",
                    "Skillshare",
                    "Picsart",
                    "Spinrewriter",
                    "Scribd",
                    "Picmonkey",
                    "Wordai",
                    "Article Builder",
                    "Buzzsumo",
                    "Crello",
                    "Word Tracker",
                    "Team Treehouse",
                    "Tutsplus",
                ],
            },
            {
                para: "And much more",
                point: [],
            },

        ],


        reviews: [

            {
                name: "Mudassar Iqbal",
                stars: 4,
                comment: "The bundle is amazing.",

            },
            {
                name: "Syed Farzand",
                stars: 2,
                comment: "Toolbaazar’s SEO bundle is good enough.",

            },
            {
                name: "Meesum Raza",
                stars: 5,
                comment: "Highly recommend their SEO bundle.",

            },
            {
                name: "Ayesha Sarwar",
                stars: 4,
                comment: "The bundle helped us expand our reach.",

            },
            {
                name: "M. Usman",
                stars: 3,
                comment: "Excellent quality and performance.",

            },
            {
                name: "Amna Riyasat",
                stars: 5,
                comment: "The bundle is very powerful.",

            },
            {
                name: "Malik Shehbaz",
                stars: 4,
                comment: "Bundle has improved our engagement.",

            },
            {
                name: "Sameer Jugno",
                stars: 4,
                comment: "Toolbaazar offers the best SEO tools bundle.",

            },
            {
                name: "M Aftab",
                stars: 4,
                comment: "Very happy with the range of SEO tools in bundle.",

            },
            {
                name: "Maryam Rasool",
                stars: 5,
                comment: "The bundle is a game-changer for us.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
  //------------------tool 1----------------
  {
    //-------------------categoreis notations-----------------------
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 1,
    title: "G-Business Data Extractor" ,
    category: "smm",  
    // video: "https://youtu.be/gOSM7d3KsxE?si=Qz5Utz7_iqA3yDY7",
    videoplay: "https://www.youtube.com/watch?v=3eovhcR1Ono",
    website: "https://www.estrattoredati.com/local-business-extractor.html",
    image: require('../images/g_business.jpg'),
    price: "1550 PKR",
    priceper: "year",
    description:
            "G-Business Extractor is an advanced tool designed for extracting business leads from Google Maps, the premier business directory. This Google Maps scraper excels in retrieving categorized and location-specific business data, making it invaluable for lead generation.",
    det_desc:[
        {
        headA: "Features of G-Business Extractor:",
        point: [
          "Comprehensive Data Extraction: Quickly extract detailed business information, including email addresses, phone numbers, fax numbers, business names, and more from Google Maps.",
          "Customizable Search: Search by specific categories and locations to target your desired leads.",
          "Enhanced Privacy and Security: Supports random delays and VPN connections to maintain privacy and avoid blocking.",
          "Export Options: Easily export results to CSV or XLSX files.",
          "Cross-Platform Compatibility: Available for Windows 11/10/8 (64-bit) and macOS (12.3 or higher).",
      ],
      },
        {
        headA: "Steps to Extract Data Using G-Business Extractor",
        point: [],
      },
        {
            headB: "Download and Install:",
            point: [
                "Get G-Business Extractor by contacting us.",
                "Install the software on your PC (Windows 64-bit) or Mac (macOS 12.3 or higher).",
            ],
        },
        {
            headB: "Set Search Parameters:",
            point: [
                "Open the software and navigate to the main interface.",
                "Select the desired category and location using the ADD button. Specify the country, state, city, and ZIP code.",
                "Adjust the data settings under SETTINGS ? Data to determine the types of data to export. For additional email addresses, enable the 'Extract emails from websites' option.",
            ],
        },
        {
            headB: "Start Data Capture:",
            point: [
                "Click the GET DATA button to begin the data extraction process.",
            ],
        },
        {
            headB: "Export Data:",
            point: [
                "Once the data capture is complete, select all entries and click the Export Data button to save the information in CSV or Excel formats.",
            ],
        },
        {
            headB: "Additional Tips",
            point: [
                "Handling Duplicates: If duplicates appear during capture, the tool may have exhausted available results. In such cases, stop the capture and proceed with data export.",
                "Niche Searches: For specific categories in a city, set the software to capture 5-10 results per ZIP code to minimize duplicates. After setting the keyword and location, start the data capture and export the results.",
                "Avoiding Blocks: To reduce the risk of Google blocking the application, use VPN software to change IP addresses dynamically every 10-20 minutes.",
            ],
        },
        {
            para: "By following these steps and tips, you can efficiently extract high-quality business leads using G-Business Extractor.",
            point: [],
        },
    ],
  
    reviews: [

      {name: "Sajid-ur-Rehman" ,
        stars: 2,
        comment: "Excellent tool, very satisfied with the software.",

      },
      {name: "M. Umair Ashraf" ,
        stars: 3,
        comment: "The tool has transformed our outreach efforts. Highly recommend!",

      },
      {name: "M. Taha khan" ,
        stars: 4,
        comment: "Affordable and effective, the tool is a game changer.",
      },  
      {name: "Sadia Khalil" ,
      stars: 3,
      comment: "Data scraping has never been easier. Thanks to Toolbaazar.",
      },
      {name: "M. Umair Aslam" ,
      stars: 5,
      comment: "Fantastic and reliable product.",
      },
    ],
    rating:0, //do not edit it
    numreview:0, //do not edit it
    
  },

    //------------------tool 2----------------
  {
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 2,
    title: "Globo Email Verifier",
    category: "em",
    //video: "https://www.youtube.com",
    videoplay: "https://www.youtube.com/watch?v=yHjjNRl_KBQ",
    website: "https://www.globomailverifier.com/",
    image: require('../images/globo_update.png'),
    price: "1550 PKR",
    priceper: "year",
    description:
          "The best software for email verification to validate any email address Validations made at multiple levels: syntax, domain, SMTP check.",
      det_desc:[
        {
          para: "Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.Our Email Marketing Tool is designed to help you create, manage, and optimize email campaigns effortlessly. Whether you're a small business owner, a marketing professional, or an enterprise team, our tool empowers you to connect with your audience, build meaningful relationships, and drive conversions.",
          point: [],
        },
        {
            headA: "Features: ",
          point: [
            "Effortless Email Validation: Simply import your email list and click 'VERIFY.' The software handles the rest, including duplicate and incorrect email removal.",
            "Thorough Verification Process: Emails are validated through syntax checks, domain existence verification, and SMTP checks, ensuring 100% reliable results.",
            "Unlimited Email Verification: The full version allows you to verify an unlimited number of email addresses.",
            ],
        },
          {
              headA: "Functionality: ",
              point: [],
          },
          {
              para: "GLOBO MAIL VERIFIER is designed to ensure the accuracy of your email lists, making it an essential tool for email marketers looking to optimize their campaigns by reducing bounce rates. High bounce rates (over 5%) can lead to delivery issues and potentially result in your email-marketing platform rejecting your list due to its poor quality. GLOBO MAIL VERIFIER meticulously analyzes your email list, identifying and flagging invalid addresses to help you maintain a clean and efficient mailing list for your campaigns.",
              point: [],
          },
          {
              headA: "How to Verify Email Addresses:",
              point: [],
          },
          {
              headB: "Import Your Mailing List:",
              point: [
                  "Click the 'IMPORT' button on the top left to select your file (Excel, CSV, TXT, or Word). The software will automatically detect and import only the email addresses, notifying you upon successful import.",
                  "The program will prompt you to remove any duplicate email addresses detected during the import process.",
              ],
          },
          {
              headB: "Initiate Email Verification:",
              point: [
                  "Click the 'VERIFY' button to start the email validation process. The software performs three types of verification:",
                  "Syntax Check: Ensures the email format is correct.",
                  "Domain Verification: Confirms the existence of the email domain.",
                  "SMTP Verification: Validates the email address via SMTP connection.",
                  "Additionally, the software filters out temporary and fake email addresses. The verification status (VALID or INVALID) for each email will be displayed, along with detailed logs.",
              ],
          },
          {
              headB: "Export Valid Email Addresses:",
              point: [
                  "After verification, use the 'FILTERS' menu to select which emails to export (valid, invalid, or all).",
                  "Click the 'EXPORT' menu and choose the output format (CSV, EXCEL, or TXT).",
                  ],
          },
          {
              headA: "Program Settings:",
              point: [],
          },
          {
              para: "GLOBO MAIL VERIFIER is user-friendly and requires minimal configuration. However, it offers several advanced settings for customization:",
              point: [
                  "Common Settings: Choose the program language, enable automatic updates, and activate duplicate email removal.",
                  "DNS Settings: Specify custom DNS settings (for advanced users).",
                  "SMTP Settings: Configure the number of threads (emails verified simultaneously), set retry attempts, and define timeouts. You can also set the HELO domain or IP address and specify the 'MAIL FROM' address. Additional SMTP servers can be added for random verification.",
                  "Scripts: Integrate PHP scripts with the program for advanced functionality.",
                  "Filters: Define email addresses or patterns to be considered always valid or invalid. This is crucial for handling 'catch-all' providers, where domains accept emails to any address, making exact verification challenging.",

              ],
          },
          {
              headA: "Accuracy of Catch-All Email Results:",
              point: [],
          },
          {
              para: "Catch-all email verification can be ambiguous, as domains like Yahoo always return positive results for domain existence but fail SMTP verification. While GLOBO MAIL VERIFIER can identify such providers, it is recommended to use default settings for optimal results, unless specific adjustments are necessary.",
              point: [],
          },
          {
              para: "For those who need reliable and efficient email verification, GLOBO MAIL VERIFIER offers a comprehensive solution that simplifies the process while ensuring the highest accuracy in maintaining a clean email list.",
              point: [],
          },
      ],
     
    reviews: [

      {name: "Urwa-tul-Wusqa" ,
        stars: 2,
        comment: "I’ve seen a significant boost in traffic using the tool.",

      },
      {name: "M. Haziq Abdullah" ,
        stars: 3,
        comment: "The software is user-friendly and efficient.",

      },
      {name: "M. Usman Hassan" ,
        stars: 4,
        comment: "Great tool, something for every need.",

      },
      {name: "Fiza Khan" ,
      stars: 3,
      comment: "Toolbaazar offers the best value for money.",
      },
      {name: "Sarmad Mansoor" ,
      stars: 4,
      comment: "Impressed with the ease of use and functionality.",
      },
      {name: "Aleena Hassan" ,
      stars: 5,
      comment: "The tool saved us so much time and effort.",
      },
    ],
    rating:0,
    numreview:0,
  },

    //------------------tool 3----------------
  {
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 3,
      title: "Let's Extract Email Studio",
    category: "ds",
    //video: "https://www.youtube.com",
    videoplay: "https://www.youtube.com/watch?v=NA5H3tXOJjM",
    website: "https://letsextract.com/",
    image: require('../images/lets_extract_update.png'),
    price: "1850 PKR",
    priceper: "year",
    description:
      "LetsExtract Email Studio is a powerful and versatile tool designed for the efficient search and extraction of email addresses, phone numbers, and other contact information. Our software extracts contacts from a variety of sources, including websites, search engines (using your specified keywords)...",
      det_desc:[
        {
              para: "LetsExtract Email Studio is a powerful and versatile tool designed for the efficient search and extraction of email addresses, phone numbers, and other contact information. Our software extracts contacts from a variety of sources, including websites, search engines (using your specified keywords), local files and documents, mailboxes, Google Maps, Yelp, Instagram, and more. User-friendly and without limitations, LetsExtract Email Studio is the ultimate contact extraction solution.",
          point: [],
        },
        {
            headA: "Why Choose LetsExtract Email Studio?",
          point: [],
        },
          {
              headB: "Targeted Lead Generation",
              point: [],
          },
          {
              para: "In today's digital landscape, traditional SEO techniques can result in penalties from search engines like Google. While paid advertising such as AdWords is an option, it often benefits the advertiser more than your business. It's time to explore alternative methods for lead generation. LetsExtract Contact Extractor leverages advanced data search and extraction technologies to generate large volumes of highly targeted leads quickly and efficiently.",
              point: [],
          },
          {
              headB: "Comprehensive Contact Extraction",
              point: [],
          },
          {
              para: "Our software excels at extracting all types of contact details from social media profiles, including email addresses, phone numbers, website links, and more. This ensures that your targeted outreach efforts, whether through newsletters or cold calls, are far more effective than generic approaches.",
              point: [],
          },
          {
              headA: "Key Features of LetsExtract Email Studio",
              point: [],
          },
          {
              headB: "Automated Data Extraction",
              point: [
                  "Keyword-Based Search: Enter a list of keywords, and LetsExtract will submit queries to search engines, retrieve relevant pages, and extract email addresses and phone numbers directly from the source code.",
                  "Site-Specific Search: Specify the websites where you want to find email addresses. LetsExtract will analyze the URLs, extract the required contacts, and automate the entire process.",
                  "Combined Search Mode: By specifying a company website (e.g., microsoft.com), the program can show available email addresses on this or related domains.",
              ],
          },
          {
              headB: "Versatile File Support",
              point: [
                  "File Format Compatibility: Extract email addresses from all popular file formats quickly using multithreading mode for fast processing.",
              ],
          },
          {
              headB: "Email Service Integration",
              point: [
                  "Google Business and Yelp: Specify keywords and locations to get URLs of businesses listed in Google Business and Yelp directories. LetsExtract navigates to these sites to extract contacts.",
              ],
          },
          {
              headB: "Social Media Integration",
              point: [
                  "Instagram and Facebook: Utilize undocumented Instagram API features to collect contacts from followers. The built-in Facebook parser extracts addresses from friends, group members, and other users, ensuring stable performance despite API updates.",
                  "Twitter: Extract contacts from Twitter by accessing links specified in user profiles.",
              ],
          },
          {
              headB: "Domain Information",
              point: [
                  "Get G-Business Extractor by contacting us.",
                  "Install the software on your PC (Windows 64-bit) or Mac (macOS 12.3 or higher).",
              ],
          },
          {
              headB: "Download and Install:",
              point: [
                  "Public Domain Data: Retrieve and display all public information about domain name owners. The software supports multi-threaded mode and list-based operations.",
              ],
          },
          {
              headA: "Enhanced Automation and Customization",
              point: [],
          },
          {
              headB: "Advanced Search Options",
              point: [
                  "Custom Search Lists: Create your own search lists, add links, enter keywords, and start batch email address harvesting.",
                  "Search Filters: Limit search depth and page numbers, filter by domain and country, use custom regular expressions, proxy lists, and parsing limits.",
              ],
          },
          {
              headB: "Data Export Options",
              point: [
                  "Flexible Saving: Save data to clipboard, TXT, CSV, and Excel formats for easy access and management.",
              ],
          },
          {
              headA: "The Professional Choice for Contact Extraction",
              point: [],
          },
          {
              para: "LetsExtract Email Studio is a professional, smart solution akin to a Swiss Army knife for your data extraction needs. Choose LetsExtract for its reliability, versatility, and comprehensive feature set.",
              point: [],
          },
          {
              para: "Experience the future of targeted lead generation with LetsExtract Email Studio.",
              point: [],
          },
      ],

      
    reviews: [

      {name: "Ameer Mavia" ,
        stars: 4,
        comment: "This tool is top-notch.",

      },
      {name: "M. Usman Ali" ,
        stars: 3,
        comment: "Very intuitive interface, even for beginners.",

      },
      {name: "Huda Ijaz" ,
        stars: 2,
        comment: "Reliable tool and to some how extent, good customer service.",

      },
      {name: "Alishba Umer" ,
        stars: 4,
        comment: "I highly recommend it for any business.",

      },
      {name: "Abdul Ahad" ,
      stars: 5,
      comment: "The tool helped us reach a broader audience.",
      },
      {name: "Hassan Tanveer" ,
      stars: 5,
      comment: "Effective and easy to use, great for small businesses.",
      },
      {name: "Aliza Arif" ,
      stars: 4,
      comment: "I’ve tried many tools, Toolbaazar’s are the best by far.",
      },
      {name: "Hafiz Fassih-ul-hassan" ,
      stars: 5,
      comment: "Outstanding quality and performance.",
      },
    ],

    rating:0,
    numreview:0,
    },
  //-------------------tool 4-------------------
  {
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 4,
      title: "Tuberank Jeet AI 5 Pro",
    category: "seo",
    //video: "https://www.youtube.com",
    videoplay: "https://www.youtube.com/watch?v=tf4hvSSiT4w",
    website: "https://tuberankjeet.com/",
    image: require('../images/tube_rank.jpg'),
    price: "2000 PKR",
    priceper: "year",
    description:
      "Unlock Unlimited Organic YouTube Traffic with Perpetual Rankings! Discover the Secret Tool Powering Thousands of High-Traffic YouTube Channels.",
      det_desc:[
        {
              para: "Unlock Unlimited Organic YouTube Traffic with Perpetual Rankings! Discover the Secret Tool Powering Thousands of High-Traffic YouTube Channels.",
          point: [],
        },
          {
              para: "Maximize Views, Subscribers, and Audience Growth for Any Channel",
              point: [],
          },
          {
              headB: "Streamlined YouTube Research:",
              point: [
                  "Effortlessly identify topics and niches with substantial viewership and traffic.",
                  "Discover rankable video topics within minutes and gauge potential traffic accurately.",
              ],
          },
          {
              headB: "Automated YouTube Optimization with AI:",
              point: [
                  "Generate perfect titles and descriptions using advanced AI technology.",
                  "Receive AI-driven insights for optimal tags and hashtags.",
                  "Conduct competition analysis with AI to secure 100% free organic traffic from YouTube search, eliminating the need for ads.",
                  "Target any language or region and save your favorite videos, tags, and hashtags for quick future use.",
              ],
          },
          {
              headB: "Achieve YouTube Success for Yourself and Your Clients:",
              point: [
                  "Build a steady stream of organic traffic that persists for years.",
                  "High-quality optimization ensures organic traffic growth without needing backlinks.",
                  "Simplified YouTube SEO through AI and community sourcing guarantees success regardless of your skill level.",
              ],
          },
          {
              headB: "Capitalize on YouTube's Vast Opportunities:",
              point: [],
          },
          {
              para: "As the world's second most-visited site, YouTube offers thousands of traffic and ranking opportunities. With Tuberank Jeet, claiming your share of this traffic has never been simpler.",
              point: [],
          },
          {
              headB: "Advanced AI for Top YouTube Rankings:",
              point: [
                  "Predict potential rankings for any keyword before optimization.",
                  "Analyze top-ranking videos in your niche to identify competitive strategies.",
                  "Gain AI-powered insights on topics and niches.",
                  "Use viewer sentiment analysis to understand market trends.",
                  "Extract stats and tags from any video to appear on related video bars.",
                  "Access hashtag recommendations via community analysis and AI.",
              ],
          },
          {
              headB: "User-Friendly Optimization for All Experience Levels:",
              point: [
                  "Even beginners can rank videos from day one without prior video SEO knowledge.",
                  "Watch our demo to see how simple it is.",
                  "Keep a record of frequently used channels, videos, tags, and hashtags for easy access.",
                  "Optimize videos in just two minutes with all tools at your fingertips.",
                  "Directly upload videos to YouTube, Vimeo, or Dailymotion.",
                  "One-click AI automation for perfect video optimization.",
              ],
          },
          {
              para: "Experience seamless video SEO with Tuberank Jeet AI 5 Pro and transform your YouTube presence.",
              point: [],
          },
      ],

      
    reviews: [
      {name: "Mujaddad Ahmad" ,
        stars: 4,
        comment: "Toolbaazar provides exceptional value and results.",

      },
      {name: "Adeeba Maqbool" ,
        stars: 4,
        comment: "The tool are incredibly efficient.",

      },
      {name: "Hania Mariya" ,
        stars: 4,
        comment: "Toolbaazar has become my go-to for all software needs.",

      },
      {name: "Muhammad Ahmad" ,
      stars: 5,
      comment: "The tool has increased my engagement significantly.",
      },
      {name: "M. Ali Haider" ,
      stars: 5,
      comment: "User-friendly and very effective.",
      },
    ],

    rating:0,
    numreview:0,
    },
  //----------------------tool 5----------------------
  {
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 5,
      title: "Yellow Leads Extractor",
    category: "ds",
    //video: "https://www.youtube.com",
    website: "https://www.ypspider.net/en/",
    image: require('../images/yellow_leads.jpg'),
    price: "1350 PKR",
    priceper: "year",
    description:
      "Yellow Leads Extractor is a powerful tool designed to efficiently scrape data from yellow pages directories across multiple countries, including the USA, Canada, France, Germany, Italy, Spain, and Switzerland.",
      det_desc:[
        {
              para: "Yellow Leads Extractor is a powerful tool designed to efficiently scrape data from yellow pages directories across multiple countries, including the USA, Canada, France, Germany, Italy, Spain, and Switzerland. Additionally, it now supports Yelp, making it one of the premier Yelp data scrapers available.",
          point: [],
        },
          {
              para: "This software allows users to perform highly customizable searches through a browser interface. Simply enter a category and location, and with the click of the 'Get Data' button, Yellow Leads Extractor retrieves comprehensive business information including names, addresses, phone numbers, and email addresses. The extracted data can be saved in CSV or Microsoft Excel formats, streamlining the data collection process.",
              point: [],
          },
        {
          headA: "Key Features",
          point: [
            "Customizable Searches: Easily customize your searches by specifying categories and locations.",
            "Multiple Sources: Access data from a variety of yellow pages and directories globally.",
            "Export Options: Save extracted data in CSV or Excel formats for easy analysis and integration.",
          ],
        },
          {
              headA: "User Guide",
              point: [],
          },
          {
              headB: "Installation and Launch:",
              point: [
                  "Install and launch Yellow Leads Extractor.",
                  "Select the source site (e.g., YellowPages.com) where you want to search.",
              ],
          },
          {
              headB: "Entering Search Criteria:",
              point: [
                  "Input keywords and categories in the Business/Keyword and Category fields.",
                  "Enter the desired location and press the 'Search' button.",
              ],
          },
          {
              headB: "Data Extraction:",
              point: [
                  "Click the 'Get Data' button to view the results.",
                  "Use the 'Select All' button to select all results for export.",
              ],
          },
          {
              headB: "Exporting Data:",
              point: [
                  "Click the 'Export' button to save the data in your preferred format (CSV or Excel).",
                  "Use the Settings menu to choose your output file format.",
              ],
          },
          {
              headA: "Supported Sources",
              point: [],
          },
          {
              para: "Yellow Leads Extractor supports a wide range of yellow pages sites globally, including:",
              point: [
                  "Italy: PagineGialle.it, Aziende.virgilio.it",
                  "France: PagesJaunes.fr",
                  "Switzerland: Local.ch",
                  "UK: Yell.com",
                  "Austria: Herold.at",
                  "Spain: PaginasAmarillas.es",
                  "USA: YellowPages.com, Yelp.com",
                  "Canada: YellowPages.ca",
                  "Belgium: Goldenpages.be",
                  "Poland: YellowPages.pl",
                  "Albania: Yellowpagesalbania.com",
                  "Romania: Paginiaurii.ro",
                  "Netherlands: Detelefoongids.nl",
                  "Australia: Yellowpages.com.au",
                  "Brazil: Guiamais.com.br",
                  "Russia: Yp.ru",
                  "Pakistan: Lookup.pk",
                  "South Africa: Yellowpages.co.za",
                  "India: Justdial.com",
                  "UAE: Yellowpages-UAE.com",
                  "Latin America: Various countries including Argentina, Chile, Colombia, and more.",
                  "Global: Yelp.com, Infobel.com",
                  ],
          },

          {
              para: "Utilize Yellow Leads Extractor for efficient, reliable, and comprehensive data scraping from yellow pages directories and beyond.",
              point: [],
          },
      ],

      
    reviews: [

      {name: "Syed Hussain" ,
        stars: 5,
        comment: "Fantastic tool, highly recommend Toolbaazar.",

      },
      {name: "Laiba Ajmal" ,
        stars: 3,
        comment: "Great support and powerful tool.",

      },
      {name: "M. Mubashir" ,
        stars: 5,
        comment: "The tool has boosted our rankings dramatically.",

      },
    ],

    rating:0,
    numreview:0,
    },
  //--------------tool 6-----------------
  {
    // smm : socail media marketing 
    // seo : search engine optimization
    // ds  : data scraping
    // wm  : whatsapp marketing
    // em  : email marketing
    // ve  : video editing
    id: 6,
      title: "BotMaster",
    category: "wm",
    //video: "https://www.youtube.com",
    videoplay: "https://www.youtube.com/watch?v=eadUGASwY5s&t=1s",
    website: "https://botmaster.co.in/",
    image: require('../images/bot_master_updated.png'),
    price: "1850 PKR",
    priceper: "year",
    description:
      "Enhance your WhatsApp marketing with BotMaster, featuring robust interactive button functionality. Now, you can effortlessly send",
      det_desc:[
        {
              para: "Enhance your WhatsApp marketing with BotMaster, featuring robust interactive button functionality. Now, you can effortlessly send:",
          point: [
            "Buttons with URL/Link",
            "Buttons with Phone Numbers",
            "Buttons with Plain Text",
          ],
        },
        {
          headA: "Key Features to Empower Your Business",
          point: [],
        },
          {
              headB: "Auto Reply and Customizable Auto Reply Rules",
              point: [],
          },
          {
              para: "Streamline customer interactions with automated replies. Set customized auto reply rules tailored to your business needs, allowing the bot to handle queries seamlessly while you focus on other tasks.",
              point: [],
          },
          {
              headB: "Compatibility with Normal and Multi-Device Beta Mode",
              point: [],
          },
          {
              para: "BotMaster operates smoothly on both the standard WhatsApp� Web and the Multi-Device Beta Mode, ensuring flexibility and convenience.",
              point: [],
          },
          {
              headB: "Video Sending with Preview",
              point: [],
          },
          {
              para: "Effortlessly send videos with previews to all your customers on WhatsApp� with just one click, enhancing your communication and engagement.",
              point: [],
          },
          {
              headB: "Data Filtering for Targeted Marketing",
              point: [],
          },
          {
              para: "Optimize your bulk mobile number data by filtering it into WhatsApp�-ready contacts, making your advertising more efficient and targeted.",
              point: [],
          },
          {
              para: "Upgrade your WhatsApp� marketing strategy with BotMaster and experience a hassle-free, powerful solution for customer engagement and business growth.",
              point: [],
          },          
      ],

      
    reviews: [

      {name: "Ehsaan-ullah" ,
        stars: 3,
        comment: "The tool is a must-have",

      },
      {name: "Faheem Umer" ,
        stars: 3,
        comment: "Toolbaazar’s tools are reliable and affordable.",

      },
      {name: "Zaha Ashfaq" ,
        stars: 4,
        comment: "Exceptional variety and quality of tools.",

      },
      {name: "Fatima Shamim" ,
      stars: 5,
      comment: "The tool is very powerful and easy to use.",

      },
    ],

    rating:0,
    numreview:0,
    },
  //----------------tool 7--------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 7,
        title: "DRPU Bulk SMS Professional",
        category: "wm",
        //video: "https://www.youtube.com",
        videoplay: "https://www.youtube.com/watch?v=BirLYj6iV9g",
        website: "https://www.drpusoftware.com/drpusoft/pc-to-mobile-messaging.html",
        image: require('../images/drpu.jpg'),
        price: "1350 PKR",
        priceper: "year",
        description:
            "Enhance your communication with DRPU Bulk SMS Professional, a robust solution for sending unlimited messages directly from your computer to any mobile phone, without the need for an online SMS gateway.",
        det_desc: [
            {
                para: "Enhance your communication with DRPU Bulk SMS � Professional, a robust solution for sending unlimited messages directly from your computer to any mobile phone, without the need for an online SMS gateway. Our software seamlessly integrates with USB modems, GSM, Android, and Windows-based mobile phones, eliminating the need for an internet connection to deliver SMS globally.",
                point: [],
            },
            {
                headA: "Key Benefits and Advantages:",
                point: [
                    "Global Communication: Effortlessly connect with people worldwide.",
                    "Unlimited Messaging: Send SMS to an extensive list of contact numbers without restrictions.",
                    "Versatile Messaging: Compose and send standard text messages, notifications, and alerts.",
                    "Delayed Delivery: Utilize the delayed delivery option for scheduling messages.",
                    "Duplicate Number Management: Automatically skip duplicate numbers while sending bulk messages.",
                    "Multi-Device Support: Compatible with a variety of devices for seamless PC connectivity and text alert transmission.",
                    "Mobile Marketing: Efficiently alert investors about market fluctuations and updates.",
                ],
            },
            {
                para: "With DRPU Bulk SMS � Professional, streamline your mobile marketing and communication efforts, ensuring timely and effective message delivery to your audience.",
                point: [],
            },
        ],
        reviews: [

            {
                name: "Abdullah Sani",
                stars: 3,
                comment: "Before it, our work has never been easier. Thanks a lot toolbaazar.",

            },
            {
                name: "M. Zaeem Arshad",
                stars: 5,
                comment: "Eexcellent tool at great price.",

            },
            {
                name: "Amna Babar",
                stars: 4,
                comment: "Very happy with the performance of the SEO tools.",

            },
        ],

        rating: 0,
        numreview: 0,
    },
    //------------------tool 8--------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 8,
        title: "WA Hammer",
        category: "wm",
        //video: "https://www.youtube.com",
        videoplay: "https://www.youtube.com/watch?v=ZRD7cpZhxI8",
        website: "https://codecanyon.net/item/wahammer-multi-whatsapp-account-browser-whatsapp-warmer-account-engager-rull-resaller/46921158",
        image: require('../images/wa_hammer.jpg'),
        price: "1350 PKR",
        priceper: "year",
        description:
            "WAHammer is an advanced, Windows-based software designed to enhance the activity and engagement of your WhatsApp accounts. This innovative tool simulates",
        det_desc: [
            {
                para: "WAHammer is an advanced, Windows-based software designed to enhance the activity and engagement of your WhatsApp accounts. This innovative tool simulates human-like conversations across all your newly added WhatsApp accounts, seamlessly and automatically.",
                point: [],
            },
            {
                headA: "Key Features",
                point: [],
            },
            {
                headB: "Add Unlimited Numbers:",
                point: [],
            },
            {
                para: "Effortlessly attach and manage an unlimited number of WhatsApp accounts in one centralized location.",
                point: [],
            },
            {
                headB: "Unified Account Management:",
                point: [],
            },
            {
                para: "Consolidate all your WhatsApp accounts in a single interface, eliminating the need for multiple browsers.",
                point: [],
            },
            {
                headB: "Customizable Delay Options:",
                point: [],
            },
            {
                para: "Adjust the delay between messages in seconds, allowing for controlled and natural interaction among accounts.",
                point: [],
            },
            {
                headB: "Modern Material Design:",
                point: [],
            },
            {
                para: "Experience the latest in Material UI design, offering a user-friendly and aesthetically pleasing interface.",
                point: [],
            },
            {
                headB: "Bulk Session Saver:",
                point: [],
            },
            {
                para: "Add unlimited WhatsApp sender numbers without the hassle of scanning QR codes each time you launch the software. (Currently in BETA)",
                point: [],
            },
            {
                para: "WAHammer is a sophisticated, Windows-based software solution designed for efficient WhatsApp account management. While it is not a bulk sender, WAHammer provides powerful tools for automating and managing conversations across multiple accounts, all within a sleek and intuitive interface.",
                point: [],
            },
        ],


        reviews: [

            {
                name: "Ayesha Zahid",
                stars: 4,
                comment: "The tool exceeded our expectations.",

            },
            {
                name: "Anas Shafique",
                stars: 4,
                comment: "Great customer service and support.",

            },
            {
                name: "Areeha Zulfiqar",
                stars: 3,
                comment: "Highly effective and easy to implement.",

            },
            {
                name: "Sharoon",
                stars: 4,
                comment: "The tool is a real time-saver.",

            },
            {
                name: "M. Musharib",
                stars: 3,
                comment: "Tool helped me grow our list quickly.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //------------------------tool 09-----------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 9,
        title: "Social Phone Extractor Pro",
        category: "smm",
        //video: "https://www.youtube.com",
        videoplay: "https://www.youtube.com/watch?v=YMcyS9tEUEQ",
        website: "https://toolbaazar.com/components/cardinfo/cardinfo/9",
        image: require('../images/social_extractor.jpg'),
        price: "1350 PKR",
        priceper: "year",
        description:
            "In today's digital age, finding phone numbers on social media platforms can be challenging. Social Phone Extractor Pro addresses this issue by offering a robust solution for businesses and individuals ",
        det_desc: [
            {
                para: "In today's digital age, finding phone numbers on social media platforms can be challenging. Social Phone Extractor Pro addresses this issue by offering a robust solution for businesses and individuals who need to obtain phone numbers for marketing campaigns, research, or other purposes.",
                point: [],
            },
            {
                headA: "Key Features and Benefits:",
                point: [
                    "Multi-Platform Support: Social Phone Extractor Pro is designed to extract phone numbers from popular social media platforms, including Facebook, Twitter, LinkedIn, and Instagram. This ensures a broad reach for your data extraction needs.",
                    "Ease of Use: The software is user-friendly. After downloading and installing it on your computer, you can begin extracting phone numbers effortlessly. Simply input relevant keywords or search terms, and the software will search through social media platforms to find matching phone numbers.",
                    "Bulk Extraction: One of the standout features of Social Phone Extractor Pro is its ability to extract phone numbers in bulk. This is particularly beneficial for businesses needing contact information for a large number of individuals or organizations.",
                    "Multi-Platform Extraction: Save time and effort by extracting phone numbers from multiple social media platforms simultaneously. This eliminates the need to manually search each platform.",
                    "Advanced Filtering: The software offers powerful filtering options to refine your search results. You can filter by location, job title, industry, and other criteria, allowing for targeted marketing campaigns.",
                    "Built-in Verifier: Social Phone Extractor Pro includes a built-in verifier that ensures the extracted phone numbers are valid and active, reducing wasted time and resources on invalid contacts.",
                    ],
            },
            {
                headA: "How to Use Social Phone Extractor Pro:",
                point: [
                    "Download and Install: Get the software by contacting us and follow the installation instructions.",
                    "Launch and Log In: Launch the software and enter your login credentials. If you don�t have an account, create one by clicking 'Create Account.'",
                    "its comment for you 1Select Social Media Platform: Choose the social media platform from which you want to extract phone numbers by clicking the corresponding icon on the software interface.",
                    "Enter Search Terms: Input relevant keywords or phrases to search for the desired phone numbers. For example, use �real estate agents� if looking for contacts in that field.",
                    "Set Filters: Refine your search results by setting filters based on criteria such as location, job title, or industry.",
                    "Start Extraction: Click the �Extract� button to begin the extraction process. The software will search for phone numbers matching your criteria.",
                    "Export Results: After the extraction process, export the results in your preferred format (CSV, Excel, TXT) by clicking the �Export� button.",
                ],
            },
            {
                headA: "Monetization Opportunities with Social Phone Extractor Pro:",
                point: [
                    "Sell Phone Numbers: Extract and sell phone numbers on various websites and online marketplaces, setting your own prices and negotiating with buyers.",
                    "Offer Lead Generation Services: Use the software to generate leads for businesses within your niche and offer these leads to relevant companies.",
                    "Utilize for Your Own Business: If you own a business, use the extracted phone numbers for your marketing campaigns to boost sales and revenue.",
                    "Provide Telemarketing Services: Offer telemarketing services by using the extracted phone numbers to reach potential customers on behalf of other businesses.",
                    "Sell the Software: As an affiliate marketer or software reseller, promote Social Phone Extractor Pro and earn commissions by referring customers through the affiliate program.",
                ],
            },
        ],


        reviews: [

            {
                name: "Athar Ali",
                stars: 5,
                comment: "Toolbaazar’s tools are indispensable for our business.",

            },
            {
                name: "Eiffa Tariq",
                stars: 4,
                comment: "Highly recommend their tools.",

            },
            {
                name: "M. Salal Shabbir",
                stars: 3,
                comment: "Affordable and highly effective solutions.",

            },
            {
                name: "M. Araiz Kamran",
                stars: 4,
                comment: "nice tool its is",

            },
            {
                name: "Shayan Ahmad",
                stars: 4,
                comment: "Great range of tools for different needs.",

            },
        ],

        rating: 0,
        numreview: 0,
    },
    //--------------------tool 10--------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 10,
        title: "Canva",
        category: "ve",
        //video: "https://www.youtube.com",
        website: "https://www.canva.com/",
        image: require('../images/canva_update.png'),
        price: "400 PKR",
        priceper: "year",
        description:
            "Canva is an online graphic design platform that enables users to create a wide range of visual content with ease. Whether you are a professional designer or a complete beginner, Canva provides",
        det_desc: [
            {
                para: "Canva is an online graphic design platform that enables users to create a wide range of visual content with ease. Whether you are a professional designer or a complete beginner, Canva provides an intuitive, drag-and-drop interface that simplifies the design process. With a vast library of templates, images, fonts, and illustrations, Canva makes it easy to produce stunning visuals for any project.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "User-Friendly Interface: Canva's drag-and-drop editor allows for quick and easy design creation without needing extensive design skills.",
                    "Templates: Access thousands of professionally designed templates for various types of content, including social media posts, presentations, posters, flyers, and more.",
                    "Elements and Assets: Utilize millions of stock photos, illustrations, icons, and fonts to enhance your designs.",
                    "Collaboration Tools: Work with team members in real-time, share designs, and provide feedback directly within the platform.",
                    "Customization Options: Customize templates and elements to suit your brand or personal style with flexible design tools.",
                    "Design Types: Create a diverse array of content, such as social media graphics, videos, presentations, marketing materials, and print products.",
                    "Brand Kit: Maintain brand consistency by storing brand colors, logos, and fonts in one place for easy access.",
                    "Download and Share: Export designs in various formats (PNG, JPG, PDF) and share them directly to social media or via email.",

                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Social Media Marketing: Design engaging posts, stories, and ads for platforms like Instagram, Facebook, Twitter, and LinkedIn.",
                    "Business Presentations: Create professional presentations for meetings, pitches, and conferences.",
                    "Event Promotion: Design eye-catching flyers, posters, and invitations for events.",
                    "Education: Develop educational materials, infographics, and classroom resources.",
                    "Personal Projects: Craft personalized greeting cards, photo collages, and DIY projects.",
                    "Content Creation: Produce blog graphics, YouTube thumbnails, and podcast covers.",
                ],
            },
            {
                para: "Canva is a versatile and powerful design tool that caters to a wide range of users, from individuals to businesses. Its user-friendly interface, extensive library of resources, and collaborative features make it an essential platform for creating high-quality visual content quickly and efficiently. Whether you need to produce social media graphics, marketing materials, or personal projects, Canva provides all the tools necessary to bring your creative vision to life.",
                point: [],
            },

        ],

        reviews: [

            {
                name: "Faheema Naseer",
                stars: 3,
                comment: "Toolbaazar provides top-quality tools.",

            },
            {
                name: "Talha Zubair",
                stars: 4,
                comment: "The data scraping tool is extremely useful.",

            },
            {
                name: "Hassanain Abbas",
                stars: 3,
                comment: "It has improved our ROI.",

            },
            {
                name: "Umme Habiba",
                stars: 4,
                comment: "Impressed with the functionality and ease of use.",

            },
            {
                name: "Yahya Safi",
                stars: 4,
                comment: "The tool is very powerful.",

            },
            {name: "Adil Mashkoor" ,
             stars: 5,
             comment: "The tool helped us increase engagement.",

            },
            {name: "Ammar bin Sohail" ,
             stars: 5,
             comment: "Toolbaazar offers reliable and effective tools.",

            },
        ],

        rating: 0,
        numreview: 0,
    },
    //-----------------tool 11---------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 11,
        title: "Grammarly",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://www.grammarly.com/",
        image: require('../images/grammarly_update.png'),
        price: "400 PKR",
        priceper: "month",
        description:
            "Grammarly is a widely-used digital writing assistant that helps users improve their writing by providing real-time grammar, spelling, punctuation, and style suggestions. It leverages advanced algorithms",
        det_desc: [
            {
                para: "Grammarly is a widely-used digital writing assistant that helps users improve their writing by providing real-time grammar, spelling, punctuation, and style suggestions. It leverages advanced algorithms and artificial intelligence to analyze text and offer insights that enhance clarity, coherence, and overall readability.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Grammar and Spelling Checker: Grammarly identifies and corrects grammatical errors, misspellings, and punctuation mistakes, ensuring that your writing is polished and professional.",
                    "Style and Tone Suggestions: It provides recommendations on writing style, tone, and word choice, helping users tailor their content to their intended audience and purpose.",
                    "Plagiarism Detection: Grammarly can compare your text against billions of web pages and academic papers to detect potential plagiarism, ensuring originality in your work.",
                    "Vocabulary Enhancement: The tool suggests more precise and impactful words, enhancing the overall quality and expressiveness of your writing.",
                    "Integration: Grammarly seamlessly integrates with various platforms, including web browsers, Microsoft Office, and mobile apps, making it accessible wherever you write.",
                    "Personalized Insights: It offers personalized writing insights and performance statistics, helping users track their progress and identify areas for improvement.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Academic Writing: Students and researchers use Grammarly to ensure their essays, papers, and theses are free from errors and plagiarism.",
                    "Professional Communication: Business professionals rely on Grammarly to draft clear, concise, and effective emails, reports, and presentations.",
                    "Creative Writing: Authors and content creators utilize Grammarly to refine their narratives, ensuring that their stories are engaging and well-crafted.",
                    "Everyday Writing: Anyone looking to improve their everyday writing, from social media posts to personal blogs, can benefit from Grammarly's comprehensive features.",
                ],
            },
            {
                para: "Grammarly is an invaluable tool for anyone who wants to enhance their writing skills. Its advanced features and user-friendly interface make it accessible to a wide range of users, from students to professionals. By providing detailed feedback and actionable suggestions, Grammarly helps users produce high-quality, error-free content that effectively communicates their message.",
                point: [],
            },
        ],

	
        reviews: [

            {
                name: "Zille huma",
                stars: 5,
                comment: "Great value for the price.",

            },
            {
                name: "Pavraj Singh",
                stars: 4,
                comment: "The tool is incredibly efficient.",

            },
            {
                name: "Abdul Rehman",
                stars: 4,
                comment: "This tool is a game-changer.",

            },
            {
                name: "Tabish",
                stars: 3,
                comment: "Toolbaazar’s tools are essential for our marketing efforts.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //-------------------------tool 12----------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 12,
        title: "SEMrush",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://www.semrush.com/",
        image: require('../images/semrush_update.png'),
        price: "450 PKR",
        priceper: "month",
        description:
            "SEMrush is a comprehensive digital marketing tool that offers a suite of features designed to help businesses improve their online visibility and gain insights into their competitors' strategies.",
        det_desc: [
            {
                para: "SEMrush is a comprehensive digital marketing tool that offers a suite of features designed to help businesses improve their online visibility and gain insights into their competitors' strategies. With a focus on SEO, PPC, content marketing, social media, and competitive research, SEMrush provides actionable data and analytics to enhance your marketing efforts.",
                point: [],
            },
            {
                headA: "Features",
                point: [],
            },
            {
                headB: "SEO Toolkit:",
                point: [
                    "Keyword Research: Discover new keywords and analyze their potential with metrics like volume, difficulty, and trends.",
                    "Site Audit: Identify technical SEO issues on your website and receive recommendations for fixes.",
                    "On-Page SEO Checker: Get personalized suggestions for optimizing individual pages based on the top 10 competitors.",
                    "Backlink Analysis: Monitor your backlink profile and discover opportunities to build high-quality backlinks.",
                ],
            },
            {
                headB: "PPC Toolkit:",
                point: [
                    "Keyword Magic Tool: Generate extensive keyword lists for your PPC campaigns.",
                    "Advertising Research: Analyze your competitors' ad strategies and see their most successful ads.",
                    "Ad Builder: Create compelling ad copies and visuals.",
                ],
            },
            {
                headB: "Content Marketing Toolkit:",
                point: [
                    "Topic Research: Find popular topics and headlines to create engaging content.",
                    "SEO Writing Assistant: Optimize your content for SEO as you write.",
                    "Post Tracking: Monitor the performance of your published content across various platforms.",
                ],
            },
            {
                headB: "Social Media Toolkit:",
                point: [
                    "Social Media Poster: Schedule and publish posts on multiple social networks.",
                    "Social Media Tracker: Track and analyze your social media performance and compare it with competitors.",
                    "Social Media Ads: Manage and optimize your social media ad campaigns.",
                ],
            },
            {
                headB: "Competitive Research:",
                point: [
                    "Domain Overview: Get a comprehensive view of any domain�s online presence, including traffic, keywords, and backlinks.",
                    "Market Explorer: Identify new market opportunities and analyze industry trends.",
                    "Traffic Analytics: Gain insights into competitors' traffic sources and user behavior.",
                ],
            },
            {
                headA: "Uses:",
                para: "SEMrush is widely used by digital marketers, SEO professionals, content creators, and business owners to:",
                point: [
                    "Improve search engine rankings and drive organic traffic.",
                    "Optimize PPC campaigns to maximize ROI.",
                    "Create high-quality, SEO-friendly content.",
                    "Manage and grow social media presence.",
                    "Conduct in-depth competitive analysis to stay ahead in the market.",
                ],
            },
            {
                para: "SEMrush is a powerful and versatile tool that equips businesses with the data and insights needed to succeed in the digital landscape. Whether you're looking to enhance your SEO strategies, optimize your advertising efforts, or gain a competitive edge, SEMrush offers the tools and resources to achieve your marketing goals. With its user-friendly interface and comprehensive features, SEMrush is an invaluable asset for anyone serious about digital marketing.",
                point: [],
            },
        ],

        reviews: [

            {
                name: "Farhan Khan",
                stars: 4,
                comment: "Highly recommend their range of tools.",

            },
            {
                name: "Abu-ubaida Aljerah",
                stars: 5,
                comment: "This tool has increased our reach.",

            },
            {
                name: "Umar Qureshi",
                stars: 4,
                comment: "Very pleased with the performance and quality.",

            },
            {
                name: "Amna Noor",
                stars: 5,
                comment: "Excellent tool for any business.",

            },
            {
                name: "Asad Ali",
                stars: 4,
                comment: "The tool is very intuitive.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //--------------------tool 13------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 13,
        title: "MOZ",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://moz.com/",
        image: require('../images/moz_update.png'),
        price: "800 PKR",
        priceper: "month",
        description:
            "Moz is a leading provider of search engine optimization (SEO) tools that help businesses and individuals improve their online visibility and search engine rankings. Founded in 2004, Moz has established",
        det_desc: [
            {
                para: "Moz is a leading provider of search engine optimization (SEO) tools that help businesses and individuals improve their online visibility and search engine rankings. Founded in 2004, Moz has established itself as a trusted resource in the digital marketing industry, offering a suite of tools designed to enhance website performance and drive organic traffic.",
                point: [],
            },
            {
                headA: "Features:",
                para: "Moz offers a comprehensive range of features to support SEO efforts, including:",
                point: [
                    "Keyword Explorer: A powerful tool for keyword research that helps identify high-impact keywords and analyze their potential.",
                    "Site Audits: Automated site audits to detect technical SEO issues, providing actionable insights to improve site health.",
                    "Rank Tracking: Track the performance of keywords and see how they rank over time across various search engines.",
                    "Link Explorer: Analyze backlinks to understand link profiles, identify link-building opportunities, and disavow harmful links.",
                    "Page Optimization: On-page optimization recommendations to enhance content and ensure it aligns with SEO best practices.",
                    "MozBar: A browser extension that provides instant SEO insights and metrics while browsing any webpage.",
                ],
            },
            {
                headA: "Uses:",
                para: "Moz is used by a wide range of professionals and businesses, including:",
                point: [
                    "SEO Specialists: To conduct in-depth keyword research, track rankings, and analyze backlinks.",
                    "Digital Marketers: For planning and executing SEO strategies, monitoring performance, and optimizing content.",
                    "Web Developers: To perform technical audits and ensure websites are SEO-friendly.",
                    "Content Creators: For optimizing content to improve search visibility and attract more organic traffic.",
                ],
            },
            {
                para: "Moz is an essential tool for anyone looking to improve their SEO efforts and achieve higher search engine rankings. With its robust suite of features, user-friendly interface, and actionable insights, Moz empowers users to make data-driven decisions and drive sustainable organic growth. Whether you're a seasoned SEO professional or just starting out, Moz provides the tools and resources needed to succeed in the competitive world of digital marketing.",
                point: [],
            },
        ],


        reviews: [

            {
                name: "Muhammad Habban",
                stars: 4,
                comment: "Tool boosted our conversions.",

            },
            {
                name: "Atta-e-mustafa",
                stars: 3,
                comment: "Toolbaazar offers the best tools on the market.",

            },
            {
                name: "Muzamil Ashraf",
                stars: 4,
                comment: "The tool has been very effective.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //-------------------------tool 14------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 14,
        title: "Ubersuggest",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://neilpatel.com/ubersuggest/",
        image: require('../images/ubersuggest_update.png'),
        price: "450 PKR",
        priceper: "month",
        description:
            "Ubersuggest is a powerful and versatile SEO tool designed to help businesses and marketers improve their online presence. Originally developed by entrepreneur Neil Patel, Ubersuggest offers a comprehensive suite of features that cater to various aspects of search engine optimization.",
        det_desc: [
            {
                para: "Ubersuggest is a powerful and versatile SEO tool designed to help businesses and marketers improve their online presence. Originally developed by entrepreneur Neil Patel, Ubersuggest offers a comprehensive suite of features that cater to various aspects of search engine optimization. Whether you are looking to boost your website's traffic, identify keyword opportunities, or analyze competitor strategies, Ubersuggest provides the tools and insights you need to succeed.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Keyword Research: Ubersuggest excels in keyword research, offering extensive data on keyword volume, competition, and trends. It provides keyword suggestions, search volume, and SEO difficulty, helping users find the best keywords to target.",
                    "SEO Audit: The SEO audit feature scans your website to identify issues that could be affecting your search engine rankings. It provides a detailed report on site health, including technical SEO errors, backlinks, and content suggestions.",
                    "Backlink Analysis: Ubersuggest's backlink analysis tool helps you understand your website's backlink profile and discover new link-building opportunities. It shows the number of backlinks, referring domains, and their quality, helping you enhance your link-building strategy.",
                    "Content Ideas: This feature helps you generate content ideas based on trending topics and high-performing content in your niche. It provides insights into what type of content resonates with your audience, helping you create engaging and relevant material.",
                    "Competitor Analysis: Ubersuggest allows you to analyze your competitors' SEO strategies by providing data on their top-performing pages, keywords, and backlink profiles. This information can help you identify gaps and opportunities in your own strategy.",
                    "Traffic Analyzer: This feature gives you an overview of your website's traffic, including the number of visitors, page views, and bounce rate. It helps you understand your audience's behavior and optimize your site accordingly.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Keyword Optimization: Identify and target high-value keywords to improve your search engine rankings and drive more organic traffic to your website.",
                    "Content Creation: Generate content ideas and optimize existing content to increase engagement and relevance.",
                    "Competitor Insights: Analyze competitors to understand their strategies and find opportunities to outperform them.",
                    "Technical SEO: Perform regular SEO audits to ensure your website is free from technical issues that could hinder your search engine performance.",
                    "Link Building: Discover and acquire high-quality backlinks to strengthen your website's authority and improve rankings.",
                ],
            },
            {
                para: "Ubersuggest is an essential tool for anyone looking to enhance their SEO efforts. Its comprehensive features, user-friendly interface, and actionable insights make it a valuable asset for businesses and marketers of all levels. By leveraging Ubersuggest, you can improve your website's visibility, attract more organic traffic, and stay ahead of the competition in the ever-evolving digital landscape.",
                point: [],
            },
        ],
        reviews: [

            {
                name: "Huzaifa Nazir",
                stars: 4,
                comment: "The tool is fantastic.",

            },
            {
                name: "M Haider",
                stars: 4,
                comment: "Great products and exceptional service.",

            },
            {
                name: "Huzaifa Latif",
                stars: 3,
                comment: "The tool saved us countless hours.",

            },
            {
                name: "Nabeel Ahmad",
                stars: 4,
                comment: "Tool is very user-friendly.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //-----------------------tool 15---------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 15,
        title: "WA Sender",
        category: "wm",
        //video: "https://www.youtube.com",
        website: "https://codecanyon.net/item/wasender-whatsapp-server-and-bulk-sender-saas/44936224",
        image: require('../images/wa_sender_update.png'),
        price: "1350 PKR",
        priceper: "year",
        description:
            "WA Sender is an innovative WhatsApp marketing tool designed to enhance communication strategies for agencies and businesses. This powerful tool offers a suite of features that streamline the process",
        det_desc: [
            {
                para: "WA Sender is an innovative WhatsApp marketing tool designed to enhance communication strategies for agencies and businesses. This powerful tool offers a suite of features that streamline the process of reaching out to your audience, managing contacts, and automating responses.",
                point: [],
            },
            {
                headA: "Key Features:",
                point: [
                    "Upload Contacts CSV File: Easily upload and manage your contact lists by importing CSV files, ensuring a smooth and organized messaging process.",
                    "Message Wait Period: Implement a customizable wait period between the sending of two messages to maintain compliance with WhatsApp's guidelines and avoid account suspension.",
                    "Bulk Messaging Campaigns: Efficiently run group campaigns by sending bulk messages to multiple contacts simultaneously, saving time and effort.",
                    "Group Member Extraction: Extract and manage group members effortlessly, simplifying the process of organizing your contact lists.",
                    "Auto Responders: Set up automatic responses to incoming messages, ensuring timely and consistent communication with your audience.",
                    "Google Maps Contacts Extraction: Extract contact information directly from Google Maps, expanding your reach and targeting potential clients more effectively.",
                    "Automatic Group Joining: Automate the process of joining WhatsApp groups, increasing your network and potential customer base.",
                    "Automatic Group Member Addition: Add new members to groups automatically, enhancing group engagement and participation.",
                    "Group Search by Name: Find and join relevant groups by simply entering the group names, making it easier to connect with your target audience.",
                    "Group Generator: Create new groups efficiently to facilitate organized and targeted marketing campaigns.",
                    "WhatsApp Warmup: Gradually increase your messaging activity to warm up your WhatsApp account, reducing the risk of being flagged for spamming.",
                ],
            },
            {
                para: "WA Sender is the ultimate tool for agencies looking to optimize their WhatsApp marketing efforts. Its comprehensive feature set enables businesses to connect with their audience more effectively, ensuring a higher engagement rate and improved communication efficiency.",
                point: [],
            },
        ],

        reviews: [

            {
                name: "Raima Shahzad",
                stars: 4,
                comment: "Toolbaazar’s tools are reliable and efficient.",

            },
            {
                name: "Hassan Khursheed",
                stars: 4,
                comment: "Highly recommend their WhatsApp marketing solutions.",

            },
            {
                name: "Malika Farid",
                stars: 4,
                comment: "The WhatsApp marketing tool is very effective.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //-------------------tool 16----------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 16,
        title: "Jesper AI",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://www.jasper.ai/",
        image: require('../images/jasper_update.png'),
        //price: "400 PKR",
        //priceper: "month",
        description:
            "Jasper AI Copilot is a sophisticated artificial intelligence platform designed to augment and streamline a variety of business operations. With advanced machine learning capabilities, Jasper AI Copilot assists organizations",
        det_desc: [
            {
                para: "Jasper AI Copilot is a sophisticated artificial intelligence platform designed to augment and streamline a variety of business operations. With advanced machine learning capabilities, Jasper AI Copilot assists organizations in automating tasks, enhancing decision-making, and optimizing overall efficiency. Its intuitive interface and robust functionality make it an indispensable tool for businesses seeking to leverage AI technology for competitive advantage.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Natural Language Processing (NLP): Jasper AI Copilot excels in understanding and generating human-like text, enabling seamless communication and content creation.",
                    "Task Automation: Automate repetitive and time-consuming tasks, freeing up valuable human resources for more strategic activities.",
                    "Data Analysis: Analyze large datasets quickly and accurately, providing actionable insights and predictive analytics.",
                    "Personalized Recommendations: Deliver tailored recommendations based on user behavior and preferences, enhancing customer engagement and satisfaction.",
                    "Integration Capabilities: Easily integrate with existing systems and software, ensuring smooth workflow and data synchronization.",
                    "Scalability: Scale operations effortlessly with Jasper AI Copilot's flexible infrastructure, accommodating businesses of all sizes.",
                    "Security: Robust security measures ensure data protection and privacy, adhering to industry standards and regulations.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Customer Support: Automate responses to common customer inquiries, reducing response times and improving customer experience.",
                    "Marketing: Generate compelling content for marketing campaigns, social media, and blogs, tailored to specific target audiences.",
                    "Sales: Enhance lead generation and sales processes with AI-driven insights and automated follow-ups.",
                    "Human Resources: Streamline recruitment and onboarding processes, including resume screening and interview scheduling.",
                    "Finance: Optimize financial analysis, forecasting, and reporting, ensuring accurate and timely financial decision-making.",
                ],
            },
            {
                para: "Jasper AI Copilot represents a powerful asset for any organization looking to embrace the future of business automation and intelligence. Its comprehensive suite of features and versatile applications make it a critical tool in driving productivity, enhancing customer experiences, and making informed decisions. By integrating Jasper AI Copilot into their operations, businesses can achieve greater efficiency and stay ahead in an increasingly competitive landscape.",
                point: [],
            },
        ],


        reviews: [

            {
                name: "Husna Sarwar",
                stars: 5,
                comment: "Great quality of tool.",

            },
            {
                name: "Maheen Munir",
                stars: 4,
                comment: "The tool is a must-have.",

            },
            {
                name: "Sohaib Ahmad",
                stars: 4,
                comment: "Tool improved our company performance.",

            },
            {
                name: "Zaeem Raza",
                stars: 3,
                comment: "Toolbaazar offers outstanding tools at great prices.",

            },
            {
                name: "Nouman Arshad",
                stars: 3,
                comment: "Very happy with your softwares.",

            },
            {
                name: "Faiq Ali",
                stars: 4,
                comment: "The tool is very easy to use.",

            },
            {
                name: "Muhammad Ans",
                stars: 4,
                comment: "Affordable and powerful tool.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //------------------------tool 17---------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 17,
        title: "QuillBot",
        category: "seo",
        //video: "https://www.youtube.com",
        website: "https://quillbot.com/",
        image: require('../images/quillbot_update.png'),
        price: "400 PKR",
        priceper: "month",
        description:
            "QuillBot is an advanced AI-powered writing assistant designed to enhance your writing experience. Utilizing state-of-the-art natural language processing, QuillBot aids in generating, rephrasing, and improving text,",
        det_desc: [
            {
                para: "QuillBot is an advanced AI-powered writing assistant designed to enhance your writing experience. Utilizing state-of-the-art natural language processing, QuillBot aids in generating, rephrasing, and improving text, making it a valuable tool for writers, students, professionals, and anyone looking to refine their writing.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Paraphrasing Tool: QuillBot's paraphrasing tool is its standout feature, capable of rephrasing sentences and paragraphs to enhance clarity and coherence while maintaining the original meaning.",
                    "Grammar Checker: This feature helps identify and correct grammatical errors, ensuring your writing is polished and professional.",
                    "Summarizer: QuillBot can condense long articles or papers into concise summaries, making it easier to grasp key points quickly.",
                    "Citation Generator: This tool aids in creating accurate citations in various formats, essential for academic and professional writing.",
                    "Co-Writer: An integrated writing environment that combines QuillBot�s features in one space, allowing users to write, edit, and improve their content seamlessly.",
                    "Thesaurus: QuillBot offers synonym suggestions to help diversify vocabulary and improve word choice.",
                    "Tone Detector: This feature assesses the tone of your writing and provides feedback, helping to ensure your message is conveyed appropriately.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Academic Writing: QuillBot assists students and researchers in crafting well-structured essays, papers, and theses by enhancing clarity, grammar, and citations.",
                    "Professional Writing: Business professionals can use QuillBot to draft emails, reports, and presentations with improved clarity and professionalism.",
                    "Content Creation: Bloggers, authors, and content creators can leverage QuillBot to generate new ideas, rephrase existing content, and ensure grammatical accuracy.",
                    "Language Learning: Non-native English speakers can use QuillBot to practice and improve their writing skills by receiving real-time feedback and suggestions.",
                ],
            },
            {
                para: "QuillBot stands out as a versatile and powerful writing assistant, offering a range of features that cater to diverse writing needs. Whether you're a student aiming for academic excellence, a professional striving for polished communication, or a content creator seeking creativity, QuillBot provides the tools to elevate your writing. With its user-friendly interface and advanced AI capabilities, QuillBot is an indispensable resource for anyone looking to enhance their writing efficiency and effectiveness.",
                point: [],
            },
        ],


        reviews: [

            {
                name: "Nabiha Hamid",
                stars: 4,
                comment: "The tool is excellent.",

            },
            {
                name: "Zain Abbas",
                stars: 5,
                comment: "Tool is highly effective.",

            },
            {
                name: "Ahsan Nawaz",
                stars: 4,
                comment: "Toolbaazar’s tools are essential for our success.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //---------------------tool 18----------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 18,
        title: "Auto Number Generator",
        category: "wm",
        //video: "https://www.youtube.com",
        videoplay: "https://www.youtube.com/watch?v=eMjwnAbHMGE",
        website: "https://toolbaazar.com/components/cardinfo/cardinfo/18",
        image: require('../images/auto_number.jpg'),
        price: "1350 PKR",
        priceper: "year",   
        description:
            "It is the most simplest and user-friendly interface software that generates as many contact numbers as possible, of any nation of the world. And you can further use these generated numbers for whatsapp marketing, ",
        det_desc: [
            {
                para: "It is the most simplest and user-friendly interface software that generates as many contact numbers as possible, of any nation of the world. And you can further use these generated numbers for whatsapp marketing, SMS marketing, Arranging calls for clients and much more. One of its best features is the accuracy of generating active contact numbers as many as you want. So, what are you thinking about? Grab this golden opportunity now and purchase it as soon as possible.",
                point: [],
            },   
        ],

        reviews: [

            {
                name: "Asad Naeem",
                stars: 4,
                comment: "Highly recommend tool.",

            },
            {
                name: "Ayman Ashraf",
                stars: 5,
                comment: "The software has been very beneficial.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
    //-------------------------tool 19-----------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 19,
        title: "Messenger Bulk Sender",
        category: "smm",
        //video: "https://www.youtube.com",
        website: "https://fb-messenger-bulk-sender.unispy.io/",
        image: require('../images/messenger.png'),
        price: "1350 PKR",
        priceper: "year",
        description:
            "Messenger Bulk Sender is a powerful Chrome extension designed to streamline and enhance your messaging capabilities on platforms such as Facebook Messenger. Tailored for businesses, marketers, and individuals who need",
        det_desc: [
            {
                para: "Messenger Bulk Sender is a powerful Chrome extension designed to streamline and enhance your messaging capabilities on platforms such as Facebook Messenger. Tailored for businesses, marketers, and individuals who need to send multiple messages efficiently, this extension automates the process, ensuring consistent communication with your target audience without the hassle of manual sending.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Bulk Messaging: Send messages to multiple contacts simultaneously, saving time and effort.",
                    "Automated Scheduling: Schedule messages to be sent at specific times, ensuring timely communication.",
                    "Message Personalization: Customize messages with dynamic fields such as names and other personal details to enhance engagement.",
                    "User-Friendly Interface: Easy-to-navigate interface with clear instructions and intuitive controls.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Marketing Campaigns: Ideal for businesses and marketers to run bulk messaging campaigns, promoting products, services, or events.",
                    "Event Invitations: Send bulk invitations for events, webinars, or meetings with personalized details.",
                ],
            },
            {
                para: "The Messenger Bulk Sender Chrome extension is an invaluable tool for anyone looking to optimize their messaging workflow on platforms like Facebook Messenger. With its robust features, including bulk messaging, customizable templates, automated scheduling, and comprehensive analytics, it caters to a wide range of uses from marketing and customer support to internal communication and event management. Its user-friendly interface and focus on security and compliance make it a reliable choice for enhancing your messaging efficiency and effectiveness.",
                point: [],
            },
        ],


        reviews: [

            {
                name: "Amaz Majid",
                stars: 4,
                comment: "Great support and reliable tool.",

            },
            {
                name: "Talal Zahid",
                stars: 4,
                comment: "The tool is very efficient.",

            },
            {
                name: "Khubaib Hassan",
                stars: 4,
                comment: "SMS marketing tool increased our open rates.",

            },
            {
                name: "Rizwana Naz",
                stars: 4,
                comment: "Toolbaazar provides top-notch tools.",

            },
            {
                name: "Haroon Ur Rasheed",
                stars: 3,
                comment: "The tool has improved our rankings.",

            },
            {
                name: "Rubab Muneer",
                stars: 5,
                comment: "The tool is very effective.",

            },
            {
                name: "M Sarfaraz",
                stars: 4,
                comment: "Great tool and affordability.",

            },
        ],

        rating: 0,
        numreview: 0,
    },
    //---------------------tool 20---------------------------
    {
        // smm : socail media marketing 
        // seo : search engine optimization
        // ds  : data scraping
        // wm  : whatsapp marketing
        // em  : email marketing
        // ve  : video editing
        id: 20,
        title: "Leads Extractor for Facebook",
        category: "smm",
        //video: "https://www.youtube.com",
        website: "https://fb-leads-extractor.unispy.io/",
        image: require('../images/fb_leads.png'),
        price: "1850 PKR",
        priceper: "year",
        description:
            "Leads Extractor for Facebook is a powerful Chrome extension designed for businesses and marketers to efficiently gather and verify contact information from Facebook. This tool focuses on extracting details of group ",
        det_desc: [
            {
                para: "Leads Extractor for Facebook is a powerful Chrome extension designed for businesses and marketers to efficiently gather and verify contact information from Facebook. This tool focuses on extracting details of group members and page feed's commenters/likers, enabling users to compile a list of verified professional email addresses and mobile phone numbers.",
                point: [],
            },
            {
                headA: "Features:",
                point: [
                    "Group Member Extraction: Easily extract details of members from any Facebook group, including names, profile URLs, and verified email addresses.",
                    "Email Verification: Ensure the authenticity of the collected email addresses through built-in verification features, reducing bounce rates and improving campaign efficiency.",
                    "Mobile Phone Collection: Gather mobile phone numbers of leads, enhancing direct marketing efforts via SMS or call campaigns.",
                    "User-Friendly Interface: The extension is designed with a simple and intuitive interface, allowing users to navigate and utilize its features without technical expertise.",
                    "Data Export: Export collected data into various formats such as CSV or Excel, making it easy to integrate with CRM systems or other marketing tools.",
                ],
            },
            {
                headA: "Uses:",
                point: [
                    "Lead Generation: Ideal for sales teams and marketers looking to build targeted lead lists for outreach campaigns.",
                    "Market Research: Provides valuable insights into the demographics and interests of group members and page followers.",
                    "Email Marketing: Facilitates the creation of verified email lists for newsletters, promotions, and other email marketing campaigns.",
                    "SMS Marketing: Supports SMS marketing initiatives by providing accurate mobile phone numbers of potential customers.",
                ],
            },
            {
                para: "Leads Extractor for Facebook is an indispensable tool for businesses and marketers aiming to enhance their lead generation and customer engagement strategies. By providing verified contact details from Facebook group members and page interaction data, this extension streamlines the process of building targeted and effective marketing campaigns. Its user-friendly interface, robust features, and compliance with privacy regulations make it a reliable and efficient solution for modern digital marketing needs.",
                point: [],
            },
        ],

        reviews: [

            {
                name: "Toheed Asghar",
                stars: 4,
                comment: "This facebook scraping tool is a real asset.",

            },

        ],

        rating: 0,
        numreview: 0,
    },
 
];

projects.forEach(project => {
  project.rating = cal_rating(project.reviews);
  project.numreview = cal_numreview(project.reviews);

});


//--------------------------Blogs-----------------
export const Blogs = [
  //----------------Blog 1------------------------
  {
    id: 0,
    title: "Why to choose us?",
    image: require('../images/blog_01.png'),
    desc: "In the digital age, the right tools can make all the difference in achieving your business goals. Whether you’re looking to boost your online presence, streamline your marketing efforts, or extract valuable data, having access to reliable software solutions is crucial. At Toolbaazar...",
    detail: [
        {
          para: "In the digital age, the right tools can make all the difference in achieving your business goals. Whether you’re looking to boost your online presence, streamline your marketing efforts, or extract valuable data, having access to reliable software solutions is crucial. At Toolbaazar, we understand the diverse needs of businesses and individuals, which is why we’ve curated a comprehensive collection of software tools to meet your every need. Here’s why you should choose Toolbaazar as your go-to source for software solutions.",
          point: [],
        },
        {
          headB: "Diverse Range of Tools",
          para: "At Toolbaazar, we pride ourselves on offering a wide variety of software tools across different categories. From SEO tools that help you climb search engine rankings to data scraping tools that extract essential information from the web, our extensive range ensures that you find exactly what you need. Our categories include:",
          point: [
            "SEO Tools: Enhance your website’s visibility and attract more organic traffic.",
            "WhatsApp Marketing Tools: Leverage the power of WhatsApp for effective marketing campaigns.",
            "Email Marketing Tools: Create and manage successful email campaigns with ease.",
            "Data Scraping Tools: Gather valuable data from various online sources quickly and efficiently.",
        ],
        },
        {
          headB: "Quality and Reliability",
          para: "We understand that quality and reliability are paramount when it comes to software tools. Every product available on Toolbaazar has been carefully selected and tested to ensure it meets our high standards. You can trust that the tools you find on our platform are not only effective but also dependable. Our commitment to quality ensures that you can focus on achieving your goals without worrying about the performance of your tools.",
          point: [],
        },
        {
          headB: "Affordability",
          para: "We believe that top-notch software solutions shouldn’t break the bank. Toolbaazar offers a range of tools at competitive prices, making it easier for businesses of all sizes to access the resources they need. We also provide various pricing options, including one-time purchases and subscription plans, to suit different budgets and preferences. With Toolbaazar, you can invest in the right tools without overspending.",
          point: [],
        },
        {
          headB: "User-Friendly Interface",
          para: "Navigating through a plethora of tools can be overwhelming. That’s why we’ve designed Toolbaazar with user experience in mind. Our website is easy to navigate, allowing you to quickly find the tools you need. Each product comes with detailed descriptions, features, and user reviews to help you make informed decisions. Our intuitive interface ensures a seamless shopping experience from start to finish.",
          point: [],
        },
        {
          headB: "Expertise and Insights",
          para: "Our team at Toolbaazar comprises experts with in-depth knowledge of various software tools and digital marketing strategies. We don’t just provide tools; we also offer valuable insights and tips through our blog and resources section. By choosing Toolbaazar, you gain access to a wealth of knowledge that can help you make the most of the tools you invest in.",
          point: [],
        },
        {
          headB: "Satisfaction Guaranteed",
          para: "Your satisfaction is our top priority. We stand by the quality of our products and services, offering a satisfaction guarantee on all purchases. If for any reason you’re not satisfied with a tool you’ve purchased, our hassle-free return policy ensures you can get a refund or exchange. Our goal is to ensure you have a positive experience every time you shop with us.",
          point: [],
        },
        {
          headA: "Conclusion",
          para: "In today’s competitive digital landscape, having the right tools can give you a significant edge. Toolbaazar is your one-stop-shop for a wide range of software solutions designed to help you succeed. With our diverse selection, commitment to quality, affordability, user-friendly interface, exceptional customer support, and more, there’s no better place to find the tools you need. Choose Toolbaazar and empower your business with the best software solutions available. Visit toolbaazar.com today and take the first step towards achieving your digital goals.",
          point: [],
        },
      ],
  },
];


//-----------------------------Terms and conditions-------------------------
export const Tnc = {
  desc: "Please read these terms and conditions carefully before using our services. By using our services, you agree to be bound by these terms and conditions.",
  bullets: [
      {
          headA: "Subscription and Updates",
          para: "Our one-year tools are valid for a duration of 365 days from the date of your purchase. It is important to note that if a new update or version of any one-year tool is released during this period, you will need to pay an additional fee to access the updated version. This policy ensures that you always have access to the latest features and improvements, providing ongoing value and functionality for your tools. We appreciate your understanding and cooperation in maintaining the quality and effectiveness of our products.",
      point: [],
    },
      {
          headA: "Refund Policy",
          para: "We uphold a strict no refund policy for all the tools and services provided through our platform. Once a purchase is completed, it is considered final, and no refunds will be issued under any circumstances. This policy is in place to maintain the integrity of our business and ensure that we can continue to offer high-quality tools at competitive prices. We encourage you to review all product details and make informed decisions before completing your purchase. Should you have any questions or require further clarification, our support team is available to assist you prior to your transaction.",
          point: [],
      },
      {
          headA: "Product Delivery",
          para: "Upon the successful processing of your payment, you will receive your purchased product. To facilitate this, we require you to provide a screenshot of your payment confirmation for verification purposes. This ensures a smooth and efficient delivery process, allowing you to start using your tools without unnecessary delays. We strive to make our payment and delivery process as seamless as possible, and we are committed to providing you with the best possible customer experience. Please ensure that all payment details are accurate and that the screenshot clearly shows the necessary transaction information.",
          point: [],
      },
      {
          headA: "Reseller Responsibility",
          para: "It is important to understand that we act as resellers for the tools we offer, and we are not the original owners or creators of these tools. Consequently, we cannot take responsibility for the complete functionality or performance of any tool. While we do our best to source reliable and effective tools, the ultimate responsibility for the tool's operation lies with the original creators. We recommend that you thoroughly test and evaluate any tool you purchase to ensure it meets your specific needs and requirements. Our role is to provide access to these tools, and we will support you in resolving any issues to the best of our ability.",
          point: [],
      },
      {
          headA: "Customer Support",
          para: "Our support team is dedicated to providing exceptional service and assistance to our customers. We are available to address your queries and concerns from 10 AM to 8 PM Pakistan Standard Time (PST). Our goal is to ensure that you have a positive experience with our products and services, and we are here to help you navigate any challenges you may encounter. Whether you need technical support, guidance on using a tool, or assistance with your purchase, our team is ready to assist you. We value your business and are committed to delivering top-notch customer support.",
          point: [],
      },
      {
          para: "Thank you for choosing our services! We appreciate your business and look forward to serving you. If you have any questions or need further assistance, please do not hesitate to reach out to our support team during our working hours.",
          point: [],
      },
    ]
};

//--------------------about us --------------------------------

export const About = { 
  desc: "Welcome to Toolbaazar, your ultimate destination for cutting-edge software solutions. Founded with a vision to empower businesses and individuals in the digital age, Toolbaazar offers an extensive range of tools tailored to meet diverse needs. From SEO and email marketing to data scraping and WhatsApp marketing, our curated selection ensures you have access to the best resources available. We are committed to quality, affordability, and user satisfaction, providing only the most reliable and effective tools on the market. Our team of experts is dedicated to helping you succeed, offering valuable insights and exceptional customer support every step of the way. At Toolbaazar, we believe in fostering a community of innovation and growth, where you can connect, learn, and thrive. Join us on our journey to make top-notch software solutions accessible to all and unlock your full digital potential.",
  team: [
    {
      name: "M. Umar Altaf",
      image:  require('../images/umar.jpeg'),
      designation: "(Founder)",
      email: "umar@toolbaazar.com",
    },
    {
      name: "Kh. M. Shahzaib",
      image:  require('../images/me.jpeg'),
      designation: "(Co-Founder)",
      email: "kms@toolbaazar.com",
      
    },
  ],
};
