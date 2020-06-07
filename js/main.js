let search = "";
let caption ="";

$('#search-bar').on('keyup', function() {
    search = $('#search-bar').val();
    search = search.toLowerCase();
    for (let i = 1; i <= 12; i++) {
        caption = $(`#image-${i} a`).attr('data-title').toLowerCase();
        if (caption.includes(search)) {
          $(`#image-${i} a`).show();
        } else {
          $(`#image-${i} a`).hide();
        }
    }
});