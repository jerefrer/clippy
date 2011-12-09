function clippyOver() {
  $('.clippy')
    .attr('title', "copy to clipboard")
    .twipsy('hide')
    .twipsy('show');
}
function clippyOut() {
  $('.clippy').twipsy('hide');
}
function clippyCopied() {
  $('.clippy')
    .attr('title', 'copied !')
    .twipsy('hide')
    .twipsy('show')
    .attr('title', "copy to clipboard");
}
$(function() {
  $('.clippy').twipsy({ gravity: 's' });
})