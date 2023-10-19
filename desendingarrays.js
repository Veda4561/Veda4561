<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The Array.sort() method sorts the elements of an array.</p>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
document.getElementById("demo").innerHTML = points;
</script>

</body>
</html>
