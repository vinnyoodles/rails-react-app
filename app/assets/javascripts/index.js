$(function() {
  initPage();
});
$(window).bind('page:change', function() {
  initPage();
});
function initPage() {
  $('#scroll-table').DataTable( {
    "scrollY":        "86vh",
    "scrollX":        "100%",
    "scrollCollapse": true,
    "retrieve":       true,
    "paging":         false,
    "searching":      false,
    "ordering":       false,
    "info":           false
  } );
}
