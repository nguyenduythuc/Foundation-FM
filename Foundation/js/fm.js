  		var n;
  		var score;
  		var sumscore=0;
  		// disable button  true and false when start game
  		document.getElementById("truebutton").disabled=true;
  		document.getElementById("falsebutton").disabled=true;
  		// Random function
		function myFunction()
			{
			var x=document.getElementById("demox")
			x.innerHTML=Math.floor((Math.random()*10)+1);
			var y=document.getElementById("demoy")
			y.innerHTML=Math.floor((Math.random()*10)+1);
			  
			
			n= parseInt(x.innerHTML) + parseInt(y.innerHTML);

			var m;
			m=Math.floor((Math.random()*6)-3);
			var g;
			g=parseInt(n)+parseInt(m)
			  	
			var myArray = [n,g];
			score =document.getElementById("demoscore")
			score.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];			
			document.getElementById("actionbutton").disabled=true;
			document.getElementById("truebutton").disabled=false;
  			document.getElementById("falsebutton").disabled=false;
			}
			function dung()
			{
					alert("Bạn trả lời đúng");
					sumscore++;
					myFunction();
					var hhh =document.getElementById("tongdiem");
					hhh.innerHTML=sumscore;	
			}
			function sai()
			{
					alert("bạn trả lời sai");
					myFunction();
					sumscore=0;
					var hhh =document.getElementById("tongdiem");
					hhh.innerHTML=sumscore;	
			}
			function btnDung(){				
				var kq = n;
				if (kq==score.innerHTML) {
					dung();									
				}else
				{
					sai();
				}

			}
			function btnSai(){
				var kq = n;
				if (kq != score.innerHTML) {
					dung();	
				}else
				{
					sai();
				}	
			}
		function login()
		{
			localStorage.xxx=document.getElementById("FirstName").value;
			document.getElementById("FirstName").innerHTML=localStorage.xxx;
		}