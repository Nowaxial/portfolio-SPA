using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TranslationsController : ControllerBase
{
    private readonly PortfolioContext _context;

    public TranslationsController(PortfolioContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<Dictionary<string, string>>> GetTranslations([FromQuery] string lang = "en")
    {
        var translations = await _context.Translations
            .Where(t => t.LanguageCode == lang)
            .ToDictionaryAsync(t => t.Key, t => t.Value);

        return translations;
    }
}
