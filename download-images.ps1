# Image Download Script for Vertet Energies Website
# This script downloads free stock images for your website

$imageDir = "public\images"

# Define images to download from Unsplash
$images = @(
    @{folder = "services"; filename = "upstream.jpg"; unsplashId = "1581092918935-78290b2fafd4"; desc = "Oil drilling rig"},
    @{folder = "services"; filename = "midstream.jpg"; unsplashId = "1581092945270-e50dcb1f237e"; desc = "Industrial gas terminal"},
    @{folder = "services"; filename = "engineering.jpg"; unsplashId = "1581091918635-abae6b94db51"; desc = "Industrial construction"},
    @{folder = "projects"; filename = "lpg-terminal.jpg"; unsplashId = "1581092163392-413c84d04fb9"; desc = "LPG storage terminal"}
)

Write-Host "========================================"
Write-Host "Downloading Images for Vertet Energies"
Write-Host "========================================"
Write-Host ""

foreach ($image in $images) {
    $folder = Join-Path $imageDir $image.folder
    $filePath = Join-Path $folder $image.filename
    $url = "https://images.unsplash.com/photo-$($image.unsplashId)?w=1200&q=80"
    
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
    
    Write-Host "Downloading: $($image.desc)"
    Write-Host "  -> $($image.filename)"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $filePath
        
        if (Test-Path $filePath) {
            $size = (Get-Item $filePath).Length / 1KB
            Write-Host "  [OK] Downloaded successfully ($([math]::Round($size, 0)) KB)" -ForegroundColor Green
        }
    } catch {
        Write-Host "  [ERROR] $_" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "========================================"
Write-Host "Team images - Please add manually:" -ForegroundColor Yellow
Write-Host "========================================"
Write-Host ""
Write-Host "Replace these with professional headshots:"
Write-Host "  - public\images\team\emmanuel.jpg"
Write-Host "  - public\images\team\motunrayo.jpg"
Write-Host "  - public\images\team\joy.jpg"
Write-Host "  - public\images\team\dorcas.jpg"
Write-Host ""
Write-Host "Download from: unsplash.com, pexels.com, or pixabay.com"
Write-Host "Search for: 'professional headshot' or 'business portrait'"
Write-Host ""
Write-Host "========================================"
Write-Host "Image download complete!"
Write-Host "========================================"
Write-Host ""
Write-Host "Refresh http://localhost:3000/ to see updates"
