using System;

namespace PortfolioAPI.Models;

public class Certificate
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string IssuingOrganization { get; set; } = string.Empty;
    public DateTime DateIssued { get; set; }
    public DateTime? ExpirationDate { get; set; }
    public string? CredentialUrl { get; set; }
    public string? ImageUrl { get; set; }
}
