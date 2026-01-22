using PortfolioAPI.Models;

namespace PortfolioAPI.Data;

public static class DbInitializer
{
    public static void Initialize(PortfolioContext context)
    {
        context.Database.EnsureCreated();

        if (context.Projects.Any())
        {
            return;   // DB has been seeded
        }

        // ===== PROJECTS =====
        var projects = new Project[]
        {
            new Project { 
                Title = "DevShowCase Platform", 
                Description = "Plattform för utvecklare byggd på Blazor WebAssembly och ASP.NET Core med ren separation av lager. Omfattande API med stöd för hantering av Competencies, Education, Licenses och Tech Stacks. Fullständig användarhantering via ASP.NET Core Identity med säkra inloggnings- och profilsystem. Optimerad koddelning mellan frontend och backend genom Shared-projekt. Avancerad loggning med Serilog och dokumentation via Swagger UI.",
                TechStack = "Blazor WebAssembly, ASP.NET Core, ASP.NET Core Identity, Serilog, Swagger UI, C#",
                GithubUrl = "https://github.com/Nowaxial",
                IsFeatured = true
            },
            new Project { 
                Title = "Editorial Tech Portfolio", 
                Description = "Högpresterande och arkitektoniskt genomtänkt portfolio byggd med Astro 5 och React 19. Systemet använder en frikopplad arkitektur med en robust .NET 10 Web API backend, EF Core och SQLite. Designen följer en 'Editorial Tech' estetik med fokus på precision, typografi och systemtransparens.",
                TechStack = "Astro 5, React 19, .NET 10, ASP.NET Core, EF Core, SQLite, Mantine UI, TypeScript, Framer Motion",
                GithubUrl = "https://github.com/Nowaxial/portfolio-spa",
                IsFeatured = true
            },
            new Project { 
                Title = "Lexicon FullStack LMS (SimpliLearn)", 
                Description = "Gruppprojekt: LMS med avancerat feedback-system för lärare och studenter. Vidareutveckling (Solo): Migrerade hela arkitekturen till Azure för skarp drift. Molnbaserad lagring via Azure Blob Storage och säkrad API-kommunikation med JWT-tokens. Fullständig CI/CD-pipeline och driftsättning till Azure App Service. Intelligent notifieringssystem som filtrerar händelser baserat på kurs- och rollbehörighet.",
                TechStack = ".NET, Entity Framework, React, SQL Server, Azure Blob Storage, Azure App Service, Azure DevOps, JWT",
                GithubUrl = "https://github.com/Nowaxial/Lexicon-FullStack-LMS-Grupp2",
                IsFeatured = true
            },
            new Project { 
                Title = "Computer Inventory API", 
                Description = "REST API i ASP.NET Core för strukturerad hantering av IT-inventarier och hårdvara. Integrerade Bogus för att generera och validera systemet med storskalig, realistisk testdata. CRUD-operationer med fokus på datasäkerhet och tydlig API-dokumentation via Swagger.",
                TechStack = "ASP.NET Core, C#, Bogus, Swagger, REST API",
                GithubUrl = "https://github.com/Nowaxial",
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
            new Skill { Name = "Azure DevOps", Category = "DevOps", IconKey = "si-azuredevops" },
            new Skill { Name = "CI/CD", Category = "DevOps", IconKey = "si-azurepipelines" },
            new Skill { Name = "Git", Category = "DevOps", IconKey = "devicon-git-plain" },
            new Skill { Name = "GitHub", Category = "DevOps", IconKey = "devicon-github-original" },
            new Skill { Name = "Docker", Category = "DevOps", IconKey = "devicon-docker-plain" },
            new Skill { Name = "Swagger", Category = "DevOps", IconKey = "si-swagger" },
            
            // Methodology & Other
            new Skill { Name = "SCRUM", Category = "Methodology", IconKey = "si-scrumalliance" },
            new Skill { Name = "Agile", Category = "Methodology", IconKey = "si-agile" },
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
                ProfileImage = "https://media.licdn.com/dms/image/v2/D4D35AQGIiC0rJMLH1A/profile-framedphoto-shrink_400_400/B4DZUZcwTUHIAc-/0/1739888723526?e=1769522400&v=beta&t=RdghAi7MRhuwKsbjzhWrmnFW5-KSOfJ7rc6-wnY8L_0",
                ProfileUrl = "https://www.linkedin.com/in/sonjaparvizmoradi/"
            }
        };

        foreach (Recommendation r in recommendations)
        {
            context.Recommendations.Add(r);
        }

        context.SaveChanges();
    }
}
