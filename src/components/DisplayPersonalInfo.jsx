function DisplayPersonalInfo({ fullName, email, phone, address }) {
	return (
		<div className="personal-display">
			<h1>{fullName}</h1>
			<h4>{email}</h4>
			<h4>{phone}</h4>
			<h4>{address.city + ", " + address.country}</h4>
			<h5>{address.post}</h5>
			<h5>{address.house + " " + address.street}</h5>
		</div>
	);
}

export default DisplayPersonalInfo;
