function RegistrationPage() {
	return (
		<form className="login" action="">
			<h1>Register</h1>
			<input type="text" placeholder="username" />
			<input type="Email" placeholder="email" />
			<input type="password" placeholder="password" />
			<input type="re_password" placeholder="re type password" />
			<button>Submit</button>
		</form>
	);
}

export default RegistrationPage;