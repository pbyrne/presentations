// Grab CDN jQuery, with a protocol relative URL; fall back to local if offline
//= require deck.js/jquery-1.7.min.js

// Deck Core and extensions
//= require deck.js/core/deck.core.js
//= require deck.js/extensions/hash/deck.hash.js
//= require deck.js/extensions/menu/deck.menu.js
//= require deck.js/extensions/goto/deck.goto.js
//= require deck.js/extensions/status/deck.status.js
//= require deck.js/extensions/navigation/deck.navigation.js

// load the presentation
$(function() {
  // Deck initialization
  console.log("a");
  $.deck('.slide');
  console.log("b");
});
