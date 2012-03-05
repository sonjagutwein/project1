function prize (){
  var result = 0;
  var single = "";
  var i;
  for (i = 0; i < 5; i++)
    if (document.collection.elements[i].checked == true)
      single = single + (document.collection.elements[i].value+"\n");
      result += Number(document.collection.elements[i].value);
      document.collection.sum.value = result;
      document.collection.singleprize.value = single;
}

jQuery(function($){ 
  $('#shoe-collection').easyPaginate();
  step:5;
  $(['data-index']).hide();
  });


