/**
 * Created by Xiao Haoquan on 2017/1/29.
 */

function setList(){
	var div=document.getElementById("test");
    
	$.getJSON('json/test.json',function(data){
		for(i in data){
            var p=document.createElement("p");
			p.innerHTML=i;
            div.appendChild(p);
		}
	});
}

setList();