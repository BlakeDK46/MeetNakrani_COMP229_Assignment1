// Comment Header:
// FileName: Scripts/app.js
// Student Name: Meet Nakrani
// Student Id: 30122554
// Date: June 25, 2022

// IIFE
(function(){
    $(".btn-danger").click(function(event){
      if(!confirm("Are you sure?")) {
        event.preventDefault();
        window.location.assign("/business_contact_list");
      }
    });
  
   /* pagination code */
    $('#myTable').pageMe(
      {pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:6}
      );
  })();