<html>

<head>
	<title>Cycle Oracle . Period Calculator . Predict Your Next Menstrual Cycle</title>
	<link rel="stylesheet" type="text/css" href="lib/style.css">
	<script src="lib/jquery-1.11.2.min.js"></script>
	<script src="lib/moment.min.js"></script>
	<script src="lib/scripts.js"></script>
</head>

<body>

	<header>
		<h1>Track your Cycle</h1>
		<p>Predict Your Next Menstrual Cycle</p>
	</header>

	<main><form>
		<div class="cycle1">
			<label for="start-cycle1">My last period began</label>
	 		<input id="start-cycle1" placeholder="YYYY-MM-DD">
		</div>
		<div class="cycle2">
			<label for="start-cycle2">The one before that began</label>
			<input id="start-cycle2" placeholder="YYYY-MM-DD">
		</div>
		<div>
			<input type="submit" value="Submit" class="button">
		</div>
		<div class="results">
			<p class="cycle-length">Length of last cycle: <strong></strong></p>
			<p class="cycle-start">Predicted upcoming period: <strong></strong></p>
			<p class="error">Please provide a valid date.</p>
		</div>
	</form></main>

</body>

</html>