// var dictionary = {
//     'greet': {
//         'tr': 'Merhaba',
//         'en': 'Hello',
//     }
// };
// var langs = ['tr', 'en'];
// var current_lang_index = 0;
// var current_lang = langs[current_lang_index];

// window.change_lang = function() {
// current_lang_index = ++current_lang_index % 3;
// current_lang = langs[current_lang_index];
// translate();
// }

// function translate() {
// $("[data-translate]").each(function(){
//     var key = $(this).data('translate');
//     $(this).html(dictionary[key][current_lang] || "N/A");
// });
// }

// translate();


function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

  // Define the language reload anchors
  var language = {
    eng: {
      content:" Hello"
    },
    tr: {
      content: "Merhaba"
    },
  };

  // Check if a hash value exists in the URL
  if (window.location.hash) {

    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#eng") {
      siteContent.textContent =
        language.eng.content;
    }
    else if (window.location.hash == "#tr") {
      siteContent.textContent =
        language.tr.content;
    }
  }