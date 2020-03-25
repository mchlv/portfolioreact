// $(document).ready(function() {

//   const grid = $(".workGrid").hide();
//   const list = $(".workList").hide();
//   const toggle = $(".viewToggle input").prop('checked', false);
//   // console.log(toggle);

//   function isChecked(){
//     if ($(toggle).prop('checked') === false){
//       console.log("its unchecked");
//       $(list).show() && $(grid).hide();
//       $(".viewToggle p").html("View as Grid");
//       $(".viewToggle img").attr("src", "assets/grid.png");
      
//     } else if($(toggle).prop('checked') === true){
//       console.log("it check");
//       $(list).hide() && $(grid).show();
//       $(".viewToggle p").html("View as List");
//       $(".viewToggle img").attr("src", "assets/list.png");
//     }
//   }
//   isChecked();

//   $(toggle).click(function(){
//     isChecked();
//   });
// });

// DISABLE FOR NOW - TRYING TO DO THIS IN REACT