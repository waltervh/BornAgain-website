jQuery(document).ready(function($) {
  // Shows tab corresponding to operation system (thirs tab in tabs-nav.md example)
  var OSName = osName();
  if (OSName == "Windows") {
    $('#OperationSystemTab li a[href="#Windows"]').tab('show') 
  } else if(OSName == "MacOS") {
    $('#OperationSystemTab li a[href="#MacOS"]').tab('show') 
  } else if(OSName == "Linux") {
    $('#OperationSystemTab li a[href="#Linux"]').tab('show') 
  }

});
