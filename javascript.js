$( document ).ready(function(){

    $(".button-collapse").sideNav();


    var options = [{
        selector: '#staggered-test',
        offset: 300,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }}, {
            selector: '#staggered-test2',
            offset: 300,
            callback: function(el) {
              Materialize.showStaggeredList($(el));}
      }];
    //   var options = [{
    //     selector: '#staggered-test2',
    //     offset: 300,
    //     callback: function(el) {
    //       Materialize.showStaggeredList($(el));
    //     }
    //   }];
      
      Materialize.scrollFire(options);
   
   
   
   
    });
