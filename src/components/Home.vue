<template>
	<main>
		<div>
			<h2>A small project to demonstrate the use of Vue.js in a simple web app.</h2>
			<router-link to="/films">Go to Films</router-link>	
		</div>
	</main>

</template>

<script>

export default {
	name : 'Home'
}

</script>

<style scopped lang="scss">
	main {
		max-width : 1170px;
		margin : auto;
		padding : 20px 15px; 
		&>div {
			color: white;
			background-color: #4f565e;
			padding: 20px;
			border-radius: 10px;
			a {
				font-size: 1.5rem;
			}
		}
	}

</style>