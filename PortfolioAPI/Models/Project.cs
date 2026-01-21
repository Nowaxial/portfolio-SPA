namespace PortfolioAPI.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string TechStack { get; set; } = string.Empty; // Store as comma-separated or JSON
    public string? GithubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public string? ArchitectureDiagram { get; set; }
    public bool IsFeatured { get; set; }
}
