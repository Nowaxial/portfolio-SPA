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
    }
}
