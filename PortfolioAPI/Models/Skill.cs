namespace PortfolioAPI.Models;

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty; // e.g., "Backend", "Frontend", "DevOps"
    public string IconKey { get; set; } = string.Empty; // e.g., "si-dotnet"
}
