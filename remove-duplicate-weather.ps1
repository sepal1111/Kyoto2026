# Remove duplicate weather code from daily itinerary pages

Write-Host "Removing duplicate weather code..." -ForegroundColor Cyan
Write-Host ""

$files = @(
    "day_1_itinerary.html",
    "day_2_itinerary.html",
    "day_3_itinerary.html",
    "day_4_itinerary.html",
    "day_5_itinerary.html",
    "day_6_itinerary.html",
    "day_7_itinerary.html",
    "day_8_itinerary.html"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        $content = Get-Content $file -Raw -Encoding UTF8
        $originalLength = $content.Length
        
        # Remove the entire fetchWeather function and getWeatherInfo function
        # Pattern: from "async function fetchWeather()" to the end of getWeatherInfo function
        $content = $content -replace '(?s)async function fetchWeather\(\).*?return \{ text: ''未知'', icon: ''❓'' \};\s*}\s*(?=</script>)', ''
        
        # Also remove standalone fetchWeather calls and replace with kyoto2026.fetchMultipleLocationsWeather
        # This will be done manually if needed
        
        $newLength = $content.Length
        $removed = $originalLength - $newLength
        
        if ($removed -gt 0) {
            $content | Set-Content $file -Encoding UTF8 -NoNewline
            Write-Host "  Removed $removed characters" -ForegroundColor Green
            Write-Host "  Saved: $file" -ForegroundColor Cyan
        }
        else {
            Write-Host "  No duplicate code found" -ForegroundColor Gray
        }
        
        Write-Host ""
    }
}

Write-Host "Cleanup completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Note: You may need to update fetchWeather() calls to use:" -ForegroundColor Yellow
Write-Host "  kyoto2026.fetchMultipleLocationsWeather(locations)" -ForegroundColor Gray
Write-Host ""
