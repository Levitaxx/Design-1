(function(){
	var num=0;
	
	document.getElementById("button-left").addEventListener("click",function(){
			num--;
			if(num<0) num=2;

			var picture=document.getElementById("picture");
			var headline=document.getElementById("headline");
			var info2=document.getElementById("info2");


			if(num==0){
				headline.innerHTML="HTML TUTORIAL";
				picture.style.backgroundImage="url(html.jpg)";
			} 
			else if(num==1) {
				headline.innerHTML="CSS TUTORIAL";
				picture.style.backgroundImage="url(css.jpg)";

			}


			else if(num==2){
			 headline.innerHTML="JS TUTORIAL";
			 picture.style.backgroundImage="url(js.png)";

			}
	});

	document.getElementById("button-right").addEventListener("click",function(){
			num++;

			if(num>2) num=0;

			var picture=document.getElementById("picture");
			var headline=document.getElementById("headline");
			var info2=document.getElementById("info2");


			if(num==0){
				headline.innerHTML="HTML TUTORIAL";
				picture.style.backgroundImage="url(html.jpg)";


				
			} 
			else if(num==1) {
				headline.innerHTML="CSS TUTORIAL";
				picture.style.backgroundImage="url(css.jpg)";

			}


			else if(num==2){
			 headline.innerHTML="JS TUTORIAL";
			 picture.style.backgroundImage="url(js.png)";

			}
	});

}())