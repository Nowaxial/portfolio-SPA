namespace PortfolioAPI.Models;

public class Recommendation
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public string? ProfileImage { get; set; }
    public string? ProfileUrl { get; set; }
}
