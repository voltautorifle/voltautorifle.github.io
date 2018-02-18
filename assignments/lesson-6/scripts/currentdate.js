function time
<p id="demo"></p>

<script>
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
</script>
<script>
var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();
</script> 
<script>
var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
</script> 
