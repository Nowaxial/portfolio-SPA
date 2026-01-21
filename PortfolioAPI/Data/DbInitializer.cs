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

        var projects = new Project[]
        {
            new Project { 
                Title = "Interactive Portfolio", 
                Description = "A modern portfolio built with .NET 10 and Astro.",
                TechStack = ".NET 10, Astro, Mantine, SQLite",
                GithubUrl = "https://github.com",
                IsFeatured = true
            },
            new Project { 
                Title = "System Monitoring Dashboard", 
                Description = "A complex real-time monitoring system.",
                TechStack = "C#, SignalR, React",
                IsFeatured = false
            }
        };

        foreach (Project p in projects)
        {
            context.Projects.Add(p);
        }
        context.SaveChanges();

        var skills = new Skill[]
        {
            new Skill { Name = ".NET", Category = "Backend", IconKey = "si-dotnet" },
            new Skill { Name = "C#", Category = "Backend", IconKey = "si-csharp" },
            new Skill { Name = "Astro", Category = "Frontend", IconKey = "si-astro" },
            new Skill { Name = "Docker", Category = "DevOps", IconKey = "si-docker" }
        };

        foreach (Skill s in skills)
        {
            context.Skills.Add(s);
        }
        context.SaveChanges();

        var experiences = new Experience[]
        {
            new Experience { 
                Company = "Tech Corp", 
                Position = "Junior Developer", 
                StartDate = new DateTime(2025, 1, 1), 
                Description = "Developing scalable backend services.",
                TechUsed = ".NET, Azure"
            }
        };

        foreach (Experience e in experiences)
        {
            context.Experiences.Add(e);
        }

        var educations = new Education[]
        {
            new Education { 
                Institution = "University of Tech", 
                Degree = "Bachelor", 
                FieldOfStudy = "Computer Science", 
                StartDate = new DateTime(2021, 9, 1), 
                EndDate = new DateTime(2024, 6, 1) 
            }
        };

        foreach (Education ed in educations)
        {
            context.Educations.Add(ed);
        }

        var recommendations = new Recommendation[]
        {
            new Recommendation { 
                AuthorName = "Jane Doe", 
                AuthorRole = "Senior Lead", 
                Content = "A very talented system developer!",
                LinkedInProfileUrl = "https://linkedin.com/in/janedoe"
            }
        };

        foreach (Recommendation r in recommendations)
        {
            context.Recommendations.Add(r);
        }

        context.SaveChanges();
    }
}
