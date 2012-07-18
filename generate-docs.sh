git reset --hard HEAD 
curl -X POST http://documentup.com/DimitarChristoff/Epitome/recompile/ > index.html
git add index.html
git commit -m'updating docs'
git push
open http://dimitarchristoff.github.com/Epitome
