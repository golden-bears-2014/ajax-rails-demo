$(document).ready(function() {
  $("a.show.author").on("ajax:success", function(e, data, status, xhr) {
    $("body").append(data.author.name);
  });
});
