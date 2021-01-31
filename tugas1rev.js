$(document).ready(function(){
fetch('http://jsonplaceholder.typicode.com/users') // merupakan url untuk API
.then(response => response.json())
.then(data =>{
    let tr='';
    data.map((element)=>{
        tr += '<tr>'+
                    '<td>'+element.name+'</td>'+
                    '<td>'+element.username+'</td>'+
                    '<td>'+element.email+'</td>'+
                    '<td>'+element.address.street+' '+element.address.suite+'</td>'+
                    '<td>'+element.phone+'</td>'+
              '</tr>';   
    })
    $("#content").html(tr);
});
});

