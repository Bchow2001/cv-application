import { useState } from "react";

function General() {
	const [fullName, setName] = useState({
		firstName: "Emma",
		lastName: "Ortega",
	});
	const [email, setEmail] = useState("emma.ortega@mail.com");
	const [phone, setPhone] = useState("+44 0123 456 789");
	const [address, setAddress] = useState({
		country: "United Kingdom",
		city: "London",
		postCode: "SE11 5AW",
		street: "Albert Embankment",
		houseNum: "85",
	});
}
