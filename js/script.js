function dataform()
{
   var cant=parseInt(document.getElementById('cant').value);
   var cat=(document.getElementById('cat').value);
    

   document.getElementById('result').value=("Total a pagar: $" + (cant*200)*cat);
  
}
