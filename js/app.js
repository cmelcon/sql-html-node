const $ = require('jquery');

$.ajax({
  url:"http://localhost:9999/task",
  success: function(res, txt, xhr){
    res = JSON.parse(res);
    console.log(res);
    for(var i = 0; i < res.length; i++){
      $("#new").append(res[i].description);
    }

  }
})
