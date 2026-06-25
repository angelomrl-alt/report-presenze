// Service worker minimo: serve solo a rendere l'app "installabile"
// come icona standalone su Android/Chrome. Nessuna cache offline per ora,
// così l'app carica sempre i dati più recenti.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Passa sempre alla rete: nessuna cache, dati sempre aggiornati.
});
