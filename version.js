/* VenueVoice — single global version constant (CountMeIn/version.js pattern).
   Deploy: bump here → git push → poll the served version.js → UPDATE apa_core.apps
   SET version=$NEW WHERE app_name='VenueVoice'  (serve-then-bump, reference_deploy.md). */
window.APP_VERSION = '0.6';
