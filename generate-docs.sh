git reset --hard HEAD 
curl --silent http://documentup.com/DimitarChristoff/Epitome/recompile
curl --silent --output index.html http://documentup.com/DimitarChristoff/Epitome/
git add index.html
git commit -m'updating docs'
git push
open http://dimitarchristoff.github.com/Epitome
