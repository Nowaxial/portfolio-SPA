namespace PortfolioAPI.Models;

public class Recommendation
{
    public int Id { get; set; }
    public string AuthorName { get; set; } = string.Empty;
    public string AuthorRole { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string? AuthorAvatar { get; set; }
    public string? LinkedInProfileUrl { get; set; }
}
