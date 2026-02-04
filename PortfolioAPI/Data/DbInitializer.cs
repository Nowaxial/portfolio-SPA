using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data;

public static class DbInitializer
{
    public static void Initialize(PortfolioContext context)
    {
        // Apply any pending migrations
        context.Database.Migrate();

        // Check if database has already been seeded
        if (context.Projects.Any())
        {
            return;   // DB has been seeded
        }

        // ===== PROJECTS =====
        var projects = new Project[]
        {
            
            new Project { 
                Title = "Editorial Tech Portfolio", 
                Description = "Högpresterande och arkitektoniskt genomtänkt portfolio byggd med Astro 5 och React 19. Systemet använder en frikopplad arkitektur med en robust .NET 10 Web API backend, EF Core och SQLite. Designen följer en 'Editorial Tech' estetik med fokus på precision, typografi och systemtransparens.",
                TechStack = "Astro 5, React 19, .NET 10, ASP.NET Core, EF Core, SQLite, Mantine UI, TypeScript, Framer Motion",
                GithubUrl = "https://github.com/Nowaxial/portfolio-spa",
                ImageUrl = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
                IsFeatured = true
            },
            new Project { 
                Title = "DevShowCase Platform", 
                Description = "Plattform för utvecklare byggd på Blazor WebAssembly och ASP.NET Core med ren separation av lager. Omfattande API med stöd för hantering av Competencies, Education, Licenses och Tech Stacks. Fullständig användarhantering via ASP.NET Core Identity med säkra inloggnings- och profilsystem. Optimerad koddelning mellan frontend och backend genom Shared-projekt. Avancerad loggning med Serilog och dokumentation via Swagger UI.",
                TechStack = "Blazor WebAssembly, ASP.NET Core, ASP.NET Core Identity, Serilog, Swagger UI, C#",
                GithubUrl = "https://github.com/Nowaxial/devshowcase-platform",
                ImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                IsFeatured = true
            },
            new Project { 
                Title = "Lexicon FullStack LMS (SimpliLearn)", 
                Description = "Gruppprojekt: LMS med avancerat feedback-system för lärare och studenter. Vidareutveckling (Solo): Migrerade hela arkitekturen till Azure för skarp drift. Molnbaserad lagring via Azure Blob Storage och säkrad API-kommunikation med JWT-tokens. Fullständig CI/CD-pipeline och driftsättning till Azure App Service. Intelligent notifieringssystem som filtrerar händelser baserat på kurs- och rollbehörighet.",
                TechStack = ".NET, Entity Framework, React, SQL Server, Azure Blob Storage, Azure App Service, Azure DevOps, JWT",
                GithubUrl = "https://github.com/Nowaxial/Lexicon-FullStack-LMS-Grupp2",
                ImageUrl = "https://camo.githubusercontent.com/93ec4dbf467cbab4c7d09884678e343441668a748da55a87581eefb464fd8da2/68747470733a2f2f692e6962622e636f2f4e6e7876794773482f4c4d532d4c657869636f6e2d4465736b746f702e6a7067",
                IsFeatured = true
            },
            new Project { 
                Title = "Computer Inventory API", 
                Description = "REST API i ASP.NET Core för strukturerad hantering av IT-inventarier och hårdvara. Integrerade Bogus för att generera och validera systemet med storskalig, realistisk testdata. CRUD-operationer med fokus på datasäkerhet och tydlig API-dokumentation via Swagger.",
                TechStack = "ASP.NET Core, C#, Bogus, Swagger, REST API",
                GithubUrl = "https://github.com/Nowaxial",
                ImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
                IsFeatured = false
            }
        };

        foreach (Project p in projects)
        {
            context.Projects.Add(p);
        }
        context.SaveChanges();

        // ===== SKILLS =====
        var skills = new Skill[]
        {
            // Backend & Architecture
            new Skill { Name = "C#", Category = "Backend", IconKey = "devicon-csharp-plain" },
            new Skill { Name = ".NET 8", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = ".NET 10", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = "ASP.NET Core", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = "ASP.NET Core MVC", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = "Entity Framework Core", Category = "Backend", IconKey = "devicon-entityframeworkcore-plain" },
            new Skill { Name = "SQL Server", Category = "Database", IconKey = "devicon-microsoftsqlserver-plain" },
            new Skill { Name = "REST API", Category = "Backend", IconKey = "si-swagger" },
            new Skill { Name = "LINQ", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = "MySQL", Category = "Database", IconKey = "devicon-mysql-plain" },
            new Skill { Name = "NoSQL", Category = "Database", IconKey = "devicon-mongodb-plain" },
            
            // Testing
            new Skill { Name = "xUnit", Category = "Testing", IconKey = "si-dotnet" },
            new Skill { Name = "Moq", Category = "Testing", IconKey = "si-dotnet" },
            new Skill { Name = "TDD", Category = "Testing", IconKey = "si-dotnet" },
            
            // Frontend & Design
            new Skill { Name = "React", Category = "Frontend", IconKey = "devicon-react-original" },
            new Skill { Name = "React.js", Category = "Frontend", IconKey = "devicon-react-original" },
            new Skill { Name = "Next.js", Category = "Frontend", IconKey = "devicon-nextjs-plain" },
            new Skill { Name = "Blazor WASM", Category = "Frontend", IconKey = "si-blazor" },
            new Skill { Name = "JavaScript", Category = "Frontend", IconKey = "devicon-javascript-plain" },
            new Skill { Name = "TypeScript", Category = "Frontend", IconKey = "devicon-typescript-plain" },
            new Skill { Name = "HTML5", Category = "Frontend", IconKey = "devicon-html5-plain" },
            new Skill { Name = "CSS3", Category = "Frontend", IconKey = "devicon-css3-plain" },
            new Skill { Name = "Bootstrap 5", Category = "Frontend", IconKey = "devicon-bootstrap-plain" },
            new Skill { Name = "Mantine UI", Category = "Frontend", IconKey = "si-mantine" },
            new Skill { Name = "jQuery", Category = "Frontend", IconKey = "devicon-jquery-plain" },
            new Skill { Name = "Node.js", Category = "Backend", IconKey = "devicon-nodejs-plain" },
            
            // Cloud & DevOps
            new Skill { Name = "Microsoft Azure", Category = "Cloud", IconKey = "devicon-azure-plain" },
            new Skill { Name = "Azure App Services", Category = "Cloud", IconKey = "devicon-azure-plain" },
            new Skill { Name = "Azure SQL Database", Category = "Cloud", IconKey = "devicon-azuresqldatabase-plain" },
            new Skill { Name = "Azure DevOps", Category = "DevOps", IconKey = "devicon-azuredevops-plain" },
            new Skill { Name = "CI/CD", Category = "DevOps", IconKey = "custom-cicd" },
            new Skill { Name = "Git", Category = "DevOps", IconKey = "devicon-git-plain" },
            new Skill { Name = "GitHub", Category = "DevOps", IconKey = "devicon-github-original" },
            new Skill { Name = "Docker", Category = "DevOps", IconKey = "devicon-docker-plain" },
            new Skill { Name = "Swagger", Category = "DevOps", IconKey = "si-swagger" },
            
            // Methodology & Other
            new Skill { Name = "SCRUM", Category = "Methodology", IconKey = "si-scrumalliance" },
            new Skill { Name = "Agile", Category = "Methodology", IconKey = "custom-agile" },
            new Skill { Name = "Secure System Design", Category = "Security", IconKey = "si-letsencrypt" },
            new Skill { Name = "Conflict Resolution", Category = "Methodology", IconKey = "custom-agile" },
            new Skill { Name = "Web Security", Category = "Security", IconKey = "si-letsencrypt" },
            new Skill { Name = "OWASP", Category = "Security", IconKey = "si-owasp" },
            new Skill { Name = "Koha", Category = "Other", IconKey = "custom-koha" },
            new Skill { Name = "Perl", Category = "Backend", IconKey = "devicon-perl-plain" },
            new Skill { Name = "PHP", Category = "Backend", IconKey = "devicon-php-plain" },
            new Skill { Name = "Laravel", Category = "Backend", IconKey = "devicon-laravel-original" },
            new Skill { Name = "CodeIgniter", Category = "Backend", IconKey = "devicon-codeigniter-plain" }
        };

        foreach (Skill s in skills)
        {
            context.Skills.Add(s);
        }
        context.SaveChanges();

        // ===== EXPERIENCES =====
        var experiences = new Experience[]
        {
            new Experience { 
                Company = "Partille kommun", 
                Position = "Fullstackutvecklare", 
                Location = "Partille kommun, Västra Götalands län, Sverige",
                StartDate = new DateTime(2025, 10, 1), 
                EndDate = new DateTime(2026, 1, 31),
                IsCurrent = false,
                Description = "Praktikant i Partille kommuns bibliotek med Koha, ett öppet källkodsbaserat bibliotekssystem. Fokus på utveckling och anpassning av OPAC (användargränssnitt för låntagare). Programmerade och finjusterade OPAC:s gränssnitt med CSS, JavaScript och jQuery för förbättrad funktionalitet och tillgänglighet. Felsökte systemet och optimerade prestandan. Dokumenterade tekniska lösningar och arbetsprocesser. Nära samarbete med bibliotekets personal för att uppnå digitala mål.",
                TechUsed = "Koha, JavaScript, jQuery, CSS, HTML, Bootstrap, Perl, Dokumentation"
            },
            new Experience { 
                Company = "Föräldraledighet", 
                Position = "Paus i karriären", 
                Location = "Göteborg, Västra Götaland",
                StartDate = new DateTime(2024, 1, 1), 
                EndDate = new DateTime(2024, 10, 31),
                IsCurrent = false,
                Description = "Tid för omvårdnad och utveckling av familjen. Ansvar för familjens logistik, planering och daglig omvårdnad.",
                TechUsed = null
            },
            new Experience { 
                Company = "Biltema", 
                Position = "Bistro/Café", 
                Location = "Göteborg, Västra Götalands län, Sverige",
                StartDate = new DateTime(2023, 9, 1), 
                EndDate = new DateTime(2023, 12, 31),
                IsCurrent = false,
                Description = "Deltidsanställning med fokus på högklassig kundservice och optimering av dagliga logistikflöden i miljö med högt tempo. Proaktiv kundservice som förbättrade kundnöjdheten. Hanterade leveranser och lagerutrymme kreativt för effektiv varuhantering. Organiserade kassasystem och arbetsstationer för att minimera ställtid.",
                TechUsed = "Kundservice, Logistik, Kassahantering, Effektivitet"
            },
            new Experience { 
                Company = "Swedcon18 AB", 
                Position = "Utveckling av digitala vårdtjänster – Carelyo", 
                Location = "Göteborg, Västra Götaland, Sverige (Distans)",
                StartDate = new DateTime(2023, 2, 1), 
                EndDate = new DateTime(2023, 5, 31),
                IsCurrent = false,
                Description = "Frontend-utveckling för Carelyo, en skalbar digital plattform för fjärrvård och e-hälsa. Deltog i utvecklingen av innovativ plattform för fjärrvårdstjänster. Arbetade med modern tech-stack (React, Next.js, Mantine UI). Implementerade API-integrationer baserade på Swagger-dokumentation. Samarbetade agilt med utvecklingsteamet genom dagliga standups och versionskontroll via GitHub.",
                TechUsed = "React, Next.js, Mantine UI, TypeScript, Node.js, JavaScript, NPM, Yarn, GitHub, Swagger, REST API"
            },
            new Experience { 
                Company = "WebWin AB", 
                Position = "Fullstackutvecklare", 
                Location = "Mölndal, Västra Götaland (Hybrid)",
                StartDate = new DateTime(2022, 11, 1), 
                EndDate = new DateTime(2023, 2, 28),
                IsCurrent = false,
                Description = "Fullstack-utveckling med fokus på prestandaoptimering och säkerhet i administrativa webbsystem. Implementerade responsiva administrationsgränssnitt med Bootstrap 5.2 enligt projektspecifikationer. Utformade och optimerade databaskommunikation med fokus på prestanda och säkerhet. Samarbetade med utvecklingsteamet för att integrera frontend- och backendlösningar.",
                TechUsed = "HTML, CSS, Bootstrap 5.2, PHP, CodeIgniter, Laravel, Slack, Git"
            },
            new Experience { 
                Company = "Filmstaden", 
                Position = "Biografanställd", 
                Location = "Malmö, Skåne, Sverige",
                StartDate = new DateTime(2016, 5, 1), 
                EndDate = new DateTime(2022, 9, 30),
                IsCurrent = false,
                Description = "Mångsidig roll med fokus på teknisk operativ drift, systemförvaltning och personalutbildning under 6+ år på Malmös största biografer. Hanterade samtliga aspekter av biografverksamheten vid tre biografer (Storgatan, Royal, Entré) inklusive kassahantering, biljettscanning och gästservice. Utbildade och coachade nyanställda medarbetare i kassasystem, biljetthantering och Filmstadens rutiner. Vidareutbildad till maskinist med kompetens inom digital filmhantering (line-up), playlisthantering och teknisk kvalitetssäkring. Koordinerade leveransmottagning och ansvarade för uppdatering av marknadsföringsmaterial. Medverkade vid specialevenemang och företagskonferenser för media- och filmbranschaktörer.",
                TechUsed = "Kundservice, Ledarskap, Maskinist, Digital filmteknik, Eventhantering, Logistik"
            },
            new Experience { 
                Company = "Samhall", 
                Position = "Medarbetare", 
                Location = "Malmö",
                StartDate = new DateTime(2015, 3, 1), 
                EndDate = new DateTime(2016, 5, 31),
                IsCurrent = false,
                Description = "Ansvarade för utemiljön på IKEA Svågetorp och andra butiker. Arbetade som frukostvärdinna på hotell med god kommunikation med kockar och personal. Ansvarade för städning av butiker och kontor på ICA Västra Hamnen och fungerade som kontaktperson mellan teamleader och ICA:s ägare.",
                TechUsed = "Kundservice, Kommunikation, Teamarbete"
            },
            new Experience { 
                Company = "VHM", 
                Position = "Supporttekniker/IT-tekniker", 
                Location = "Malmö",
                StartDate = new DateTime(2014, 9, 1), 
                EndDate = new DateTime(2015, 3, 31),
                IsCurrent = false,
                Description = "Gav teknisk support till användare och anställda, inklusive felsökning av datorer, installation och uppdatering av programvara, samt lösenordsåterställning. Hanterade nätverks- och skrivarproblem genom felsökning, konfiguration och kontakt med leverantörer. Bytte ut trasiga delar i datorer och gjorde beställningar av reservdelar.",
                TechUsed = "IT Support, Nätverksfelsökning, Hårdvara, Programvaruinstallation"
            },
            new Experience { 
                Company = "IT-Lyftet", 
                Position = "Support", 
                Location = "Västra Frölunda",
                StartDate = new DateTime(2013, 2, 1), 
                EndDate = new DateTime(2014, 6, 30),
                IsCurrent = false,
                Description = "Löste tekniska utmaningar med äldre datorer och begränsad hårdvara. Utvecklade kreativa lösningar för WordPress-utveckling. Säkerställde användarvänlighet genom att testa hemsidor lokalt och samla feedback. Utvecklade och underhöll hemsidor för olika kunder (Real Case), inklusive skapande av webbhandel med WooCommerce. Stödde kollegor med Ventrilo-servrar, privata forum (phpBB) och lokal WordPress-installation.",
                TechUsed = "WordPress, WooCommerce, HTML, CSS, MySQL, phpBB, Fotoredigering"
            },
            new Experience { 
                Company = "Västra Götalands Lokalvård AB", 
                Position = "Lokalvårdare", 
                Location = "Göteborg",
                StartDate = new DateTime(2012, 8, 1), 
                EndDate = new DateTime(2013, 1, 31),
                IsCurrent = false,
                Description = "Utförde städning hos privatpersoner, företag och kommunala verksamheter, inklusive flyttstädning, städning efter dödsfall och större rengöringar av lokaler och gym. Ansvarade för trappstädning i bostadsrättsföreningar (BRF) och bostadsbolag. Bistod äldre personer med städning i deras hem.",
                TechUsed = null
            }
        };

        foreach (Experience e in experiences)
        {
            context.Experiences.Add(e);
        }
        context.SaveChanges();

        // ===== EDUCATION =====
        var educations = new Education[]
        {
            new Education { 
                Institution = "Lexicon - vidareutbildning IT", 
                Degree = "Systemutvecklare .NET", 
                FieldOfStudy = "Fullstack Development", 
                StartDate = new DateTime(2025, 4, 1), 
                EndDate = new DateTime(2026, 1, 31),
                Description = "Intensivutbildning (120 dagar) med fokus på fullstack-utveckling i .NET-miljö. Backend: C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, TDD. Frontend: React, Blazor WASM, JavaScript, jQuery, HTML5, CSS3, Bootstrap 5. Cloud & DevOps: Microsoft Azure (Web Apps, SQL Database), CI/CD med Azure DevOps, AI-900 intro."
            },
            new Education { 
                Institution = "JENSEN Yrkeshögskola", 
                Degree = "Frontendutvecklare med inriktning webbsäkerhet", 
                FieldOfStudy = "Frontend Development & Web Security", 
                StartDate = new DateTime(2021, 8, 1), 
                EndDate = new DateTime(2023, 6, 30),
                Description = "Tvåårig yrkeshögskoleutbildning med fokus på avancerad webbutveckling, säkerhet och agila metoder. Frontend & Frameworks: React.js, Next.js, Node.js, TypeScript, Mantine UI. Webbsäkerhet: Fördjupade kunskaper i säkerhetsanalys, sårbarhetstester (OWASP) och säker kommunikation (HTTPS/SSL). Agil metodik: Praktisk erfarenhet genom LIA (Lärande i Arbete) och agil projektledning via SCRUM och Kanban. Fullstack JavaScript: Utveckling för både klient och server samt databashantering i MySQL och NoSQL."
            },
            new Education { 
                Institution = "Jensen Education", 
                Degree = "Datasäkerhetstekniker", 
                FieldOfStudy = "Computer Security", 
                StartDate = new DateTime(2007, 8, 1), 
                EndDate = new DateTime(2009, 6, 30),
                Description = "Datorsäkerhet är den del av IT-säkerhet som avser att skydda datorsystem. Detta inkluderar förebyggande, upptäckt och åtgärdande av obehöriga användare av datorsystem, inklusive hackare och virus. Men datasäkerhet innebär också att skydda datorsystem mot andra risker, till exempel dataförlust på grund av en hårddiskkrasch."
            },
            new Education { 
                Institution = "NTI Skolan", 
                Degree = "Kommunikation & Säkerhet", 
                FieldOfStudy = "Network Security & Communication", 
                StartDate = new DateTime(2006, 8, 1), 
                EndDate = new DateTime(2007, 6, 30),
                Description = "Nätverkssäkerhet, kryptografi, säkerhetsprotokoll (SSL/TLS), kommunikationsprotokoll (TCP/IP). Verktyg för nätverksövervakning och säkerhetsanalys, implementering av säkerhetslösningar som brandväggar och intrångsdetekteringssystem (IDS). Applicerade kunskapen för att säkra webbplatser och nätverk."
            },
            new Education { 
                Institution = "NTI Skolan", 
                Degree = "Nätverksadministration", 
                FieldOfStudy = "Network Administration", 
                StartDate = new DateTime(2005, 8, 1), 
                EndDate = new DateTime(2006, 6, 30),
                Description = "Nätverksdesign, routing och switching, felhantering. Nätverkshantering är processen att administrera och hantera datornätverk. Tjänster inkluderar felanalys, prestandahantering, tillhandahållande av nätverk och upprätthållande av servicekvalitet."
            }
        };

        foreach (Education ed in educations)
        {
            context.Educations.Add(ed);
        }
        context.SaveChanges();

        // ===== CERTIFICATES =====
        var certificates = new Certificate[]
        {
            new Certificate {
                Name = "Kohackademiker",
                IssuingOrganization = "Svenska Kohanätverket",
                DateIssued = new DateTime(2025, 12, 1),
                ExpirationDate = null,
                CredentialUrl = null,
                ImageUrl = null
            },
            new Certificate {
                Name = "Systemutvecklare .NET",
                IssuingOrganization = "Lexicon - vidareutbildning IT",
                DateIssued = new DateTime(2025, 10, 6),
                ExpirationDate = null,
                CredentialUrl = "https://verify.trueoriginal.com/0B76B189-AAEF-83E0-2F2C-2B92B3B0635F/?ref=linkedin-profile",
                ImageUrl = null
            },
            new Certificate {
                Name = "Microsoft Certified: Azure AI Fundamentals",
                IssuingOrganization = "Microsoft",
                DateIssued = new DateTime(2025, 9, 29),
                ExpirationDate = null,
                CredentialUrl = "https://learn.microsoft.com/api/credentials/share/en-us/MariaToledo-1730/A1538EC974A29143",
                ImageUrl = null
            },
            new Certificate {
                Name = "Frontendutvecklare inriktning webbsäkerhet",
                IssuingOrganization = "JENSEN yrkeshögskola",
                DateIssued = new DateTime(2023, 6, 30),
                ExpirationDate = null,
                CredentialUrl = null,
                ImageUrl = null
            }
        };

        foreach (Certificate cert in certificates)
        {
            context.Certificates.Add(cert);
        }
        context.SaveChanges();

        // ===== RECOMMENDATIONS =====
        var recommendations = new Recommendation[]
        {
            new Recommendation { 
                Name = "Ulla Frennesson", 
                Position = "SEO/Founder", 
                Company = "Open Mind Strategic Management AB",
                Text = "De senaste åren har Maria vid olika tillfällen varit oss behjälplig med privata problem med TV, datorer och telefon. Vi är mycket imponerade över både bredd och djup i hennes kunskaper. Det har ännu inte varit något problem som hon inte lyckats lösa. Två särskilt utmanande exempel är problem med TV sändningen. Telia kunde inte hjälpa oss på telefon. De skickade en konsult som kom och debiterade. En timma efter konsulten lämnat så var problemet tillbaka. Maria löste detta på 15 min och problemet kom inte tillbaka. För två år sedan gjorde jag en fotobok. Ville nu beställa fler men hittade den inte. Kundservice sa att den fanns på min gamla laptop och eftersom den var kasserad så gick boken inte att beställa utan att den skulle återskapas på nytt. Samma besked av 3 olika personer på kundsupport. När jag ber Maria om hjälp tar det inte lång stund innan hon hittar fotoboken. Vi tycker att Maria har mycket hög kompetens inom de olika områden som vi behövt hjälp med och vi ger henne de allra bästa rekommendationer.",
                ProfileImage = "https://media.licdn.com/dms/image/v2/C4D03AQG2X3GtsP4pXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1541592305789?e=1770854400&v=beta&t=drBPisNqg_SX82iv7hzLievgkiuzCP3iPHRNf_OHF6w",
                ProfileUrl = "https://www.linkedin.com/in/ulla-frennesson-b694445/"
            },
            new Recommendation { 
                Name = "Sonja Parvizmoradi", 
                Position = "Product Development Manager/ Brand Marketing", 
                Company = "tbpsupplytbpsupply",
                Text = "Jag har haft tillfället att arbeta tillsammans med Maria på Filmstaden, och jag kan varmt rekommendera henne. Maria är en lojal och dedikerad kollega som alltid visar stort ansvar i allt hon gör. Maria har även starka ledaregenskaper. Hon är trygg, strukturerad och får alltid sitt team att känna sig sedda och motiverade. När det uppstår stressiga situationer håller hon sig lugn och lösningsorienterad, vilket gör henne ovärderlig i ett snabbt och dynamiskt arbetsklimat. Hon är pålitlig, arbetsam och en person man alltid kan räkna med. Jag rekommenderar henne helhjärtat för framtida roller.",
                ProfileImage = "https://media.licdn.com/dms/image/v2/D4D35AQGIiC0rJMLH1A/profile-framedphoto-shrink_400_400/B4DZUZcwTUHIAc-/0/1739888723526?e=1770735600&v=beta&t=rZ7TL7AhquduL4huPeWBmcoJoALanqi_vrff71_q4QM",
                ProfileUrl = "https://www.linkedin.com/in/sonjaparvizmoradi/"
            },
            new Recommendation { 
                Name = "Micheal Ulasi", 
                Position = "Technical Lead / Supervisor", 
                Company = "Swedcon18",
                Text = "Maria has solved her tasks quickly and securely. She knows a lot already and keeps learning, which is the best recommendation. Very conscientious and reliable. She has a very great ability to handle different demands and changing priorities.",
                ProfileImage = null, // Placeholder or need user input
                ProfileUrl = "https://www.linkedin.com/in/michealulasi/"
            },
            new Recommendation { 
                Name = "Daniel Gustavsson", 
                Position = "Technical Lead / Supervisor", 
                Company = "WebWin AB",
                Text = "Maria har en mycket stor förmåga att samarbeta och lyssna, och kan med lätthet framföra egna synpunkter på ett smidigt sätt. Hon har utfört sitt arbete samvetsgrant och grundligt, även då uppgiften varit mindre inspirerande. Maria har en god förmåga att hantera olika krav och växlande prioriteringar, och agerar alltid resultatinriktat och aktivt.",
                ProfileImage = null,
                ProfileUrl = "https://www.linkedin.com/in/daniel-gustavsson-systemansvarig-chronox/"
            }
        };

        foreach (Recommendation r in recommendations)
        {
            context.Recommendations.Add(r);
        }
        context.SaveChanges();

        // ===== TRANSLATIONS =====
        var translations = new Translation[]
        {
            // English
            new Translation { Key = "Hero.Title", LanguageCode = "en", Value = "Security-Oriented System Developer" },
            new Translation { Key = "Hero.Subtitle", LanguageCode = "en", Value = "Architecting robust .NET solutions with a foundation in secure Fullstack development. I bridge the gap between technical complexity and human needs with a \"Secure by Design\" philosophy." },
            new Translation { Key = "Hero.SystemOnline", LanguageCode = "en", Value = "System Online" },
            new Translation { Key = "Hero.BasedIn", LanguageCode = "en", Value = "Based in Sweden" },
            new Translation { Key = "Hero.SelectedWorks", LanguageCode = "en", Value = "Selected Works" },
            new Translation { Key = "Hero.GetInTouch", LanguageCode = "en", Value = "Get in Touch" },
            new Translation { Key = "Nav.Works", LanguageCode = "en", Value = "Works" },
            new Translation { Key = "Nav.Skills", LanguageCode = "en", Value = "Skills" },
            new Translation { Key = "Nav.Recommendations", LanguageCode = "en", Value = "Recommendations" },
            new Translation { Key = "Nav.Socials", LanguageCode = "en", Value = "Socials" },
            new Translation { Key = "Nav.Menu", LanguageCode = "en", Value = "Menu" },
            new Translation { Key = "Section.ProfessionalSummary", LanguageCode = "en", Value = "Professional Summary" },
            new Translation { Key = "Section.SelectedWorks", LanguageCode = "en", Value = "Selected Works" },

            new Translation { Key = "Section.TechnicalStack", LanguageCode = "en", Value = "Technical Stack" },
            new Translation { Key = "Badge.SystemActive", LanguageCode = "en", Value = "System Active" },
            new Translation { Key = "Badge.Endorsements", LanguageCode = "en", Value = "Endorsements" },
            new Translation { Key = "Section.Recommendations", LanguageCode = "en", Value = "Recommendations" },

            // ProfileCard
            new Translation { Key = "Profile.DownloadCV", LanguageCode = "en", Value = "Download CV" },
            new Translation { Key = "Profile.LinkedInTooltip", LanguageCode = "en", Value = "LinkedIn Profile" },
            new Translation { Key = "Profile.GitHubTooltip", LanguageCode = "en", Value = "GitHub Profile" },
            new Translation { Key = "Profile.EmailTooltip", LanguageCode = "en", Value = "Email Me" },
            new Translation { Key = "Profile.Role", LanguageCode = "en", Value = "Security-Oriented System Developer" },
            new Translation { Key = "Profile.Quote", LanguageCode = "en", Value = "With a track record of bridging technical systems and human needs—from cinema projections to .NET architectures—I build resilient applications you can trust. My background in Web Security and Fullstack development ensures every solution is \"Secure by Design.\"" },
            new Translation { Key = "Profile.Status", LanguageCode = "en", Value = "Ready for collaboration" },

            // ProjectCard
            new Translation { Key = "Project.PreviewModel", LanguageCode = "en", Value = "Preview Model" },
            new Translation { Key = "Project.ViewOnGitHub", LanguageCode = "en", Value = "View on GitHub" },
            new Translation { Key = "Project.VisitLiveSite", LanguageCode = "en", Value = "Visit Live Site" },

            // Swedish ProfileCard
            new Translation { Key = "Profile.DownloadCV", LanguageCode = "sv", Value = "Ladda ner CV" },
            new Translation { Key = "Profile.LinkedInTooltip", LanguageCode = "sv", Value = "LinkedIn Profil" },
            new Translation { Key = "Profile.GitHubTooltip", LanguageCode = "sv", Value = "GitHub Profil" },
            new Translation { Key = "Profile.EmailTooltip", LanguageCode = "sv", Value = "Maila mig" },
            new Translation { Key = "Profile.Status", LanguageCode = "sv", Value = "Redo för samarbete" },
            new Translation { Key = "Profile.Role", LanguageCode = "sv", Value = "Säkerhetsinriktad Systemutvecklare" },
            new Translation { Key = "Profile.Quote", LanguageCode = "sv", Value = "Med erfarenhet av att överbrygga tekniska system och mänskliga behov – från biografprojektion till .NET-arkitektur – bygger jag robusta applikationer du kan lita på. Min bakgrund inom webbsäkerhet och Fullstack-utveckling säkerställer att varje lösning är \"Secure by Design\"." },

            // Swedish ProjectCard
            new Translation { Key = "Project.PreviewModel", LanguageCode = "sv", Value = "Förhandsgranska modell" },
            new Translation { Key = "Project.ViewOnGitHub", LanguageCode = "sv", Value = "Visa på GitHub" },
            new Translation { Key = "Project.VisitLiveSite", LanguageCode = "sv", Value = "Besök webbplats" },

            // Swedish
            new Translation { Key = "Hero.Title", LanguageCode = "sv", Value = "Säkerhetsinriktad Systemutvecklare" },
            new Translation { Key = "Hero.Subtitle", LanguageCode = "sv", Value = "Utformar robusta .NET-lösningar med en grund inom säker Fullstack-utveckling. Jag överbryggar klyftan mellan teknisk komplexitet och mänskliga behov med en \"Secure by Design\"-filosofi." },
            new Translation { Key = "Hero.SystemOnline", LanguageCode = "sv", Value = "System Online" },
            new Translation { Key = "Hero.BasedIn", LanguageCode = "sv", Value = "Baserad i Sverige" },
            new Translation { Key = "Hero.SelectedWorks", LanguageCode = "sv", Value = "Utvalda Projekt" },
            new Translation { Key = "Hero.GetInTouch", LanguageCode = "sv", Value = "Kontakta Mig" },
            new Translation { Key = "Nav.Works", LanguageCode = "sv", Value = "Projekt" },
            new Translation { Key = "Nav.Skills", LanguageCode = "sv", Value = "Färdigheter" },
            new Translation { Key = "Nav.Recommendations", LanguageCode = "sv", Value = "Rekommendationer" },
            new Translation { Key = "Nav.Socials", LanguageCode = "sv", Value = "Sociala Medier" },
            new Translation { Key = "Nav.Menu", LanguageCode = "sv", Value = "Meny" },
            new Translation { Key = "Section.ProfessionalSummary", LanguageCode = "sv", Value = "Professionell Sammanfattning" },
            new Translation { Key = "Section.SelectedWorks", LanguageCode = "sv", Value = "Utvalda Projekt" },
            new Translation { Key = "Section.TechnicalStack", LanguageCode = "sv", Value = "Teknisk Stack" },
            new Translation { Key = "Badge.SystemActive", LanguageCode = "sv", Value = "System Aktivt" },
            new Translation { Key = "Badge.Endorsements", LanguageCode = "sv", Value = "Omdömen" },
            new Translation { Key = "Section.Recommendations", LanguageCode = "sv", Value = "Rekommendationer" },
            // Recommendations
            new Translation { Key = "Recommendation.1.Text", LanguageCode = "en", Value = "Over the past few years, Maria has assisted us on various occasions with private issues involving TVs, computers, and phones. We are very impressed by both the breadth and depth of her knowledge. There hasn't been a single problem she hasn't managed to solve yet. Two particularly challenging examples are problems with the TV broadcast. Telia could not help us by phone. They sent a consultant who came and charged us. An hour after the consultant left, the problem was back. Maria solved this in 15 minutes and the problem did not return. Two years ago I made a photobook. Wanted to order more now but couldn't find it. Customer service said it was on my old laptop and since it was discarded, the book could not be ordered without being recreated from scratch. Same answer from 3 different people at customer support. When I ask Maria for help, it doesn't take long before she finds the photobook. Maria has very high competence within the different areas we needed help with and we give her our very best recommendations." },
            new Translation { Key = "Recommendation.1.Text", LanguageCode = "sv", Value = "De senaste åren har Maria vid olika tillfällen varit oss behjälplig med privata problem med TV, datorer och telefon. Vi är mycket imponerade över både bredd och djup i hennes kunskaper. Det har ännu inte varit något problem som hon inte lyckats lösa. Två särskilt utmanande exempel är problem med TV sändningen. Telia kunde inte hjälpa oss på telefon. De skickade en konsult som kom och debiterade. En timma efter konsulten lämnat så var problemet tillbaka. Maria löste detta på 15 min och problemet kom inte tillbaka. För två år sedan gjorde jag en fotobok. Ville nu beställa fler men hittade den inte. Kundservice sa att den fanns på min gamla laptop och eftersom den var kasserad så gick boken inte att beställa utan att den skulle återskapas på nytt. Samma besked av 3 olika personer på kundsupport. När jag ber Maria om hjälp tar det inte lång stund innan hon hittar fotoboken. Vi tycker att Maria har mycket hög kompetens inom de olika områden som vi behövt hjälp med och vi ger henne de allra bästa rekommendationer." },
            

            new Translation { Key = "Recommendation.2.Text", LanguageCode = "en", Value = "I have had the opportunity to work together with Maria at Filmstaden, and I can warmly recommend her. Maria is a loyal and dedicated colleague who always shows great responsibility in everything she does. Maria also has strong leadership qualities. She is confident, structured, and always makes her team feel seen and motivated. When stressful situations arise, she stays calm and solution-oriented, which makes her invaluable in a fast and dynamic work environment. She is reliable, hardworking, and a person you can always count on. I recommend her wholeheartedly for future roles." },
            new Translation { Key = "Recommendation.2.Text", LanguageCode = "sv", Value = "Jag har haft tillfället att arbeta tillsammans med Maria på Filmstaden, och jag kan varmt rekommendera henne. Maria är en lojal och dedikerad kollega som alltid visar stort ansvar i allt hon gör. Maria har även starka ledaregenskaper. Hon är trygg, strukturerad och får alltid sitt team att känna sig sedda och motiverade. När det uppstår stressiga situationer håller hon sig lugn och lösningsorienterad, vilket gör henne ovärderlig i ett snabbt och dynamiskt arbetsklimat. Hon är pålitlig, arbetsam och en person man alltid kan räkna med. Jag rekommenderar henne helhjärtat för framtida roller." },

            new Translation { Key = "Recommendation.3.Text", LanguageCode = "en", Value = "Maria solved her tasks quickly and securely. She knows a lot already and keep learning is the best recommendation. Very conscientious and reliable. She has a very great ability to handle different demands and changing priorities. She initiates and implements efficiencies to better achieve set goals." },
            new Translation { Key = "Recommendation.3.Text", LanguageCode = "sv", Value = "Maria löste sina uppgifter snabbt och säkert. Hon har redan stora kunskaper och fortsätter att lära sig. Mycket samvetsgrann och pålitlig. Hon har en mycket god förmåga att hantera olika krav och växlande prioriteringar. Hon initierar och genomför effektiviseringar för att bättre nå uppsatta mål." },

            new Translation { Key = "Recommendation.4.Text", LanguageCode = "en", Value = "Maria has a very great ability to collaborate and listen, and she can easily present her own views in a smooth way. She has performed her work conscientiously and thoroughly, even when tasks were less inspiring. Maria has a good ability to handle different demands and changing priorities, always acting result-oriented and actively." },
            new Translation { Key = "Recommendation.4.Text", LanguageCode = "sv", Value = "Maria har en mycket stor förmåga att samarbeta och lyssna, och kan med lätthet framföra egna synpunkter på ett smidigt sätt. Hon har utfört sitt arbete samvetsgrant och grundligt, även då uppgiften varit mindre inspirerande. Maria har en god förmåga att hantera olika krav och växlande prioriteringar, och agerar alltid resultatinriktat och aktivt." },

            // Project 1: Editorial Tech Portfolio
            new Translation { Key = "Project.1.Title", LanguageCode = "en", Value = "Editorial Tech Portfolio" },
            new Translation { Key = "Project.1.Description", LanguageCode = "en", Value = "High-performance and architecturally thoughtful portfolio built with Astro 5 and React 19. The system uses a decoupled architecture with a robust .NET 10 Web API backend, EF Core, and SQLite. The design follows an 'Editorial Tech' aesthetic focusing on precision, typography, and system transparency." },
            new Translation { Key = "Project.1.Title", LanguageCode = "sv", Value = "Editorial Tech Portfolio" },
            new Translation { Key = "Project.1.Description", LanguageCode = "sv", Value = "Högpresterande och arkitektoniskt genomtänkt portfolio byggd med Astro 5 och React 19. Systemet använder en frikopplad arkitektur med en robust .NET 10 Web API backend, EF Core och SQLite. Designen följer en 'Editorial Tech' estetik med fokus på precision, typografi och systemtransparens." },

             // Updated Profile and About
             
            new Translation { Key = "Summary.Title", LanguageCode = "en", Value = "Reliability & Security" },
            new Translation { Key = "Summary.Title", LanguageCode = "sv", Value = "Pålitlighet & Säkerhet" },
            new Translation { Key = "Summary.Text", LanguageCode = "en", Value = "From troubleshooting cinema projectors to architecting .NET APIs, I have always been the person who ensures the system stays online. My background in Network Security combined with modern .NET development allows me to build robust, secure, and user-centric applications." },
            new Translation { Key = "Summary.Text", LanguageCode = "sv", Value = "Från felsökning av biografprojektorer till arkitektur av .NET API:er har jag alltid varit personen som ser till att systemet är igång. Min bakgrund inom nätverkssäkerhet kombinerat med modern .NET-utveckling gör att jag kan bygga robusta, säkra och användarcentrerade applikationer." },

            // Project 2: DevShowCase Platform
            new Translation { Key = "Project.2.Title", LanguageCode = "en", Value = "DevShowCase Platform" },
            new Translation { Key = "Project.2.Description", LanguageCode = "en", Value = "Developer platform built on Blazor WebAssembly and ASP.NET Core with clean layer separation. Comprehensive API supporting Competencies, Education, Licenses, and Tech Stacks. Full user management via ASP.NET Core Identity with secure login and profile systems. Optimized code sharing between frontend and backend via Shared projects. Advanced logging with Serilog and documentation via Swagger UI." },
            new Translation { Key = "Project.2.Title", LanguageCode = "sv", Value = "DevShowCase Platform" },
            new Translation { Key = "Project.2.Description", LanguageCode = "sv", Value = "Plattform för utvecklare byggd på Blazor WebAssembly och ASP.NET Core med ren separation av lager. Omfattande API med stöd för hantering av Competencies, Education, Licenses och Tech Stacks. Fullständig användarhantering via ASP.NET Core Identity med säkra inloggnings- och profilsystem. Optimerad koddelning mellan frontend och backend genom Shared-projekt. Avancerad loggning med Serilog och dokumentation via Swagger UI." },

            // Project 3: Lexicon FullStack LMS
            new Translation { Key = "Project.3.Title", LanguageCode = "en", Value = "Lexicon FullStack LMS (SimpliLearn)" },
            new Translation { Key = "Project.3.Description", LanguageCode = "en", Value = "Group project: LMS with advanced feedback system for teachers and students. Further development (Solo): Migrated entire architecture to Azure. Cloud-based storage via Azure Blob Storage and secured API communication with JWT tokens. Full CI/CD pipeline and deployment to Azure App Service. Intelligent notification system filtering events based on course and role permissions." },
            new Translation { Key = "Project.3.Title", LanguageCode = "sv", Value = "Lexicon FullStack LMS (SimpliLearn)" },
            new Translation { Key = "Project.3.Description", LanguageCode = "sv", Value = "Gruppprojekt: LMS med avancerat feedback-system för lärare och studenter. Vidareutveckling (Solo): Migrerade hela arkitekturen till Azure för skarp drift. Molnbaserad lagring via Azure Blob Storage och säkrad API-kommunikation med JWT-tokens. Fullständig CI/CD-pipeline och driftsättning till Azure App Service. Intelligent notifieringssystem som filtrerar händelser baserat på kurs- och rollbehörighet." },

            // Project 4: Computer Inventory API
            new Translation { Key = "Project.4.Title", LanguageCode = "en", Value = "Computer Inventory API" },
            new Translation { Key = "Project.4.Description", LanguageCode = "en", Value = "REST API in ASP.NET Core for structured management of IT inventory and hardware. Integrated Bogus to generate and validate the system with large-scale, realistic test data. CRUD operations focusing on data security and clear API documentation via Swagger." },
            new Translation { Key = "Project.4.Title", LanguageCode = "sv", Value = "Computer Inventory API" },
            new Translation { Key = "Project.4.Description", LanguageCode = "sv", Value = "REST API i ASP.NET Core för strukturerad hantering av IT-inventarier och hårdvara. Integrerade Bogus för att generera och validera systemet med storskalig, realistisk testdata. CRUD-operationer med fokus på datasäkerhet och tydlig API-dokumentation via Swagger." }
        };

        foreach (Translation t in translations)
        {
            context.Translations.Add(t);
        }

        context.SaveChanges();
    }
}
