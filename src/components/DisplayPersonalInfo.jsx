function DisplayPersonalInfo({ fullName, email, phone, address }) {
	return (
		<div className="personal-display">
			<h1>{fullName}</h1>
			<div className="personal-info">
				<div className="person">
					<h4>{email}</h4>
					<h4>{phone}</h4>
				</div>
				<div className="person">
					<h4>{address.city + ", " + address.country}</h4>
					<h5>{address.post}</h5>
					<h5>{address.house + " " + address.street}</h5>
				</div>
			</div>
		</div>
	);
}

export default DisplayPersonalInfo;
