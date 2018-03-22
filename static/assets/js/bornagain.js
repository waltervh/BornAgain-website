jQuery(document).ready(function($) {
  // Additional activation of first tab in tabs-nav.md example 
  // Activiation is necessary because of fade effect
  $('#myTab2 li:first-child a').tab('show')

  // Shows tab corresponding to operation system (thirs tab in tabs-nav.md example)
  var OSName = osName();
  if (OSName == "Windows") {
    $('#DownloadTab li a[href="#Windows"]').tab('show') 
  } else if(OSName == "MacOS") {
    $('#DownloadTab li a[href="#MacOS"]').tab('show') 
  } else if(OSName == "Linux") {
    $('#DownloadTab li a[href="#Linux"]').tab('show') 
  }

});
