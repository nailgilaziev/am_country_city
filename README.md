Вспомогательный проект для ActiveMap Starter

# structure

файл `public/countries.json` и  
файл `source/countries+states+cities.json`  
это исходники из репозитория https://github.com/dr5hn/countries-states-cities-database

Файл `source/countries+states+cities.json` парсит скрипт `source/parse.js` и раскладывает сгенерированные файлы в `public/countries/*.json`

После делается сommit + push и начинает работать github actions.  
Папка `public` деплоится в firebase hosting проекта am-country-city (владелец support@activemap.ae)

После эти данные становятся доступными на хосте am-country-city.web.app

# usage

Чтобы получить список стран  
`https://am-country-city.web.app/countries.json`

Чтобы получить список городов по стране надо передать `iso2` аббревиатуру страны в запрос  
`https://am-country-city.web.app/countries/{iso2}.json`

Список городов сгруппирован по штатам / регионам. Использовать эту информацию как subtitle.  
Использовать поле native, если оно не null, чтобы отображать нативное написание города / страны

# regenerate

подложить новые файлы
`public/countries.json` и `source/countries+states+cities.json`

запустить 
```
cd source
npm install
npm test
git add .
git commit -m "regenerate files"
git push
```

осторожно, если файлы правились руками, это затрет ручные изменения


# install details 

<details>
  <summary>console output</summary>

✔  Created service account github-action-580878340 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_AM_COUNTRY_CITY.
i  You can manage your secrets at https://github.com/nailgilaziev/am_country_city/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build

✔  Created workflow file /Users/ng/web/am_country_city/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main

✔  Created workflow file /Users/ng/web/am_country_city/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
</details>
