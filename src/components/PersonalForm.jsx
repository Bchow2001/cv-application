import CreateInput from "./CreateInput";

function PersonalForm({ onChange, fullName, email, phone, address }) {
	return (
		<form className="personal-form">
			<CreateInput
				id="full-name"
				placeholder="First Last"
				type="text"
				labelText="Full Name: "
				value={fullName}
				onChange={onChange}
				required={true}
				data-key="fullName"
			/>
			<CreateInput
				id="email"
				placeholder="example@email.com"
				type="email"
				labelText="Email Address: "
				value={email}
				onChange={onChange}
				required={true}
				data-key="emailAddress"
			/>
			<CreateInput
				id="phone"
				placeholder="+44 0123 456789"
				type="tel"
				labelText="Phone Number: "
				value={phone}
				onChange={onChange}
				data-key="phoneNumber"
			/>
			<CreateInput
				id="country"
				placeholder="Country"
				type="text"
				labelText="Country: "
				value={address.country}
				onChange={onChange}
				data-key="addressCountry"
			/>
			<CreateInput
				id="city"
				placeholder="City"
				type="text"
				labelText="City: "
				value={address.city}
				onChange={onChange}
				data-key="addressCity"
			/>
			<CreateInput
				id="post-code"
				placeholder="Post Code"
				type="text"
				labelText="Post Code: "
				value={address.post}
				onChange={onChange}
				data-key="addressPost"
			/>
			<CreateInput
				id="house-num"
				placeholder="House #"
				type="text"
				labelText="House Number: "
				value={address.house}
				onChange={onChange}
				data-key="addressHouse"
			/>
			<CreateInput
				id="street"
				placeholder="Example Avenue"
				type="text"
				labelText="Street Name: "
				value={address.street}
				onChange={onChange}
				data-key="addressStreet"
			/>
		</form>
	);
}

export default PersonalForm;
