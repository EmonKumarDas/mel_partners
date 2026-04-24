# PowerShell script to create language folders and copy index.html

$sourceFile = "index.html"
$langs = @("bn", "hi", "uz")

foreach ($lang in $langs) {
    # Create directory if it doesn't exist
    if (-Not (Test-Path $lang)) {
        New-Item -ItemType Directory -Force -Path $lang
    }
    
    $targetFile = "$lang\index.html"
    
    # Read content, replace lang="en" with lang="$lang", and adjust asset paths
    $content = Get-Content $sourceFile -Raw
    $content = $content -replace '<html lang="en">', "<html lang=`"$lang`">"
    
    # Since it's going one folder deep, we need to adjust relative paths
    $content = $content -replace 'href="style.css"', 'href="../style.css"'
    $content = $content -replace 'href="translate.js', 'href="../translate.js'
    $content = $content -replace 'src="translate.js', 'src="../translate.js'
    $content = $content -replace 'src="images/', 'src="../images/'
    $content = $content -replace 'href="images/', 'href="../images/'
    
    # Update navigation links to point to the root or relative
    $content = $content -replace 'href="wowbet-', 'href="../wowbet-'
    $content = $content -replace 'href="terms.html"', 'href="../terms.html"'
    $content = $content -replace 'href="privacy.html"', 'href="../privacy.html"'
    $content = $content -replace 'href="cookies.html"', 'href="../cookies.html"'
    $content = $content -replace 'href="contacts.html"', 'href="../contacts.html"'
    
    # Write to target
    Set-Content -Path $targetFile -Value $content -Encoding UTF8
    Write-Host "Created $targetFile"
}

Write-Host "Language folders created successfully!"
