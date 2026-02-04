namespace PortfolioAPI.Models
{
    public class Translation
    {
        public int Id { get; set; }
        public string Key { get; set; } = string.Empty;
        public string LanguageCode { get; set; } = string.Empty; // "en" or "sv"
        public string Value { get; set; } = string.Empty;
    }
}
