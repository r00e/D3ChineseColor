$i = 1;

cat .\color.txt | %{ if($i % 2 -ne 0) { "`{`n`"rgbValue`":`"$_`"," | Out-File -Append -FilePath .\data.txt; $i++;} else{ "`"description`":`"$_`"`n`}," | Out-File -Append -FilePath .\data.txt; $i++;} }
