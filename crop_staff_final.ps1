Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Shreyas\.gemini\antigravity\brain\7dbd21f9-ddd2-40f4-8d18-1fe08df5e6ee\staff_portraits_extracted_1773678236869.png")
$names = @("vani_rao", "bharathi_srikanth", "shravana_kumar", "sampath_kumar", "reshma_belagaje", "padma_latha", "prasad_k", "roopa_kambam", "jessy_mathew", "padmaja_ravi", "pankaj_matta", "niranjan_dg")
$sizeX = 213
$sizeY = 160
$outSize = 160

for ($r = 0; $r -lt 4; $r++) {
    for ($c = 0; $c -lt 3; $c++) {
        $idx = $r * 3 + $c
        $name = $names[$idx]
        $x = [int]($c * $sizeX)
        $y = [int]($r * $sizeY)
        
        # Center the crop within the card
        $cropX = $x + [int](($sizeX - $outSize) / 2)
        $cropY = $y
        
        $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $outSize, $outSize)
        $crop = new-object System.Drawing.Bitmap($outSize, $outSize)
        $g = [System.Drawing.Graphics]::FromImage($crop)
        $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $outSize, $outSize)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $crop.Save("c:\Users\Shreyas\OneDrive\Desktop\transcend-website\transcend-website-1\src\assets\staff\$name.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $g.Dispose()
        $crop.Dispose()
    }
}
$img.Dispose()
