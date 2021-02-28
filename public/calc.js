var a;
var a1;
var a2;
var opt;
function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    p=Number(p);
    n=Number(n);
    r=Number(r);
    console.log(p);                            
    console.log(n);
    console.log(r);
    var fin = new Finance();
    a=fin.AM(p,r,n);
    a=a.toFixed("2");
        document.getElementById("final").innerHTML="$"+a;
}    

function calc2()
{
    p1 = document.getElementById("p1").value;
    n1 = document.getElementById("n1").value;
    r1 = document.getElementById("r1").value;
    p1=Number(p1);
    n1=Number(n1);
    r1=Number(r1);
    console.log(p1);                            
    console.log(n1);
    console.log(r1);
    var fin = new Finance();
    a1=fin.FV(r1,p1,n1);
    a1=a1.toFixed("2");
        document.getElementById("fu_value").innerHTML="$"+a1;
}    

function calc3()
{
    p2 = document.getElementById("p2").value;
    n2 = document.getElementById("n2").value;
    r2 = document.getElementById("r2").value;
    p2=Number(p2);
    n2=Number(n2);
    r2=Number(r2);
    console.log(p2);                            
    console.log(n2);
    console.log(r2);
    var fin = new Finance();
    a2=fin.CAGR(p2,r2,n2);
    a2=a2.toFixed("2");
        document.getElementById("cag").innerHTML=a2+"%";
}    


function showcalc()
{
    opt = document.getElementById('option').value;    
    if (opt==0)
    {
        
        document.getElementById("fc").style.display = "none";
        document.getElementById("am").style.display = "none";
        document.getElementById("cagr").style.display = "none";
  
    }
    else if (opt == 1)
  {
      console.log("AM calc");
      document.getElementById("cagr").style.display = "none";
      document.getElementById("fc").style.display = "none";
      document.getElementById("am").style.display = "block";
      var fin = new Finance();
      
    }
  else if (opt==2)
  {
      console.log("fm calc");
      document.getElementById("cagr").style.display = "none";
      document.getElementById("am").style.display = "none";
      document.getElementById("fc").style.display = "block";
      var fin = new Finance();
  }
  else if(opt ==3)
  {
      console.log("carg calc");
      document.getElementById("fc").style.display = "none";
      document.getElementById("am").style.display = "none";
      document.getElementById("cagr").style.display = "block";
      var fin = new Finance();
  }
  
  
}

function myFunction() {

    // for am calc
    /* Get the text field */
    if(opt==1)
    {
    console.log(a)
    var dummy = $('<input style="display:none;">').val(a).appendTo('body').select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " +a);
    }  

    // for future value calc
    /* Get the text field */

    else if(opt==2)
    {
    console.log(a1)
    var dummy = $('<input style="display:none;">').val(a1).appendTo('body').select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: "+a1);
    }  

    else if(opt==3)
    {
    console.log(a2)
    var dummy = $('<input style="display:none;">').val(a2).appendTo('body').select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: "+a2);
    }
}