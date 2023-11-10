import { useState } from "react";
import { v4 as uuid } from "uuid";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import "./App.css";
import DisplayList from "./components/DisplayList";

function App() {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "Emma Ortega",
		emailAddress: "emma.ortega@mail.com",
		phoneNumber: "+44 0123 456 789",
		address: {
			country: "United Kingdom",
			city: "London",
			post: "SE11 5AW",
			street: "Albert Embankment",
			house: "85",
		},
	});

	const [educationInfo, setEducationInfo] = useState([
		{
			schoolName: "Royal Holloway",
			course: "Philosophy, Politics & Economics",
			startDate: "10/2019",
			endDate: "07/2022",
			location: "Egham, Surrey",
			grade: "First",
			id: uuid(),
		},
		{
			schoolName: "Royal Holloway",
			course: "Philosophy, Politics & Economics",
			startDate: "10/2019",
			endDate: "07/2022",
			location: "Egham, Surrey",
			grade: "First",
			id: uuid(),
		},
	]);

	const [practicalInfo, setPracticalInfo] = useState([
		{
			practicalName: "Aston Lark",
			title: "Data Support",
			startDate: "10/2019",
			endDate: "07/2023",
			location: "London",
			description: "Job of data",
			id: uuid(),
		},
	]);

	const onPersonChange = (e) => {
		let field = e.target.getAttribute("data-key");
		let newPersonalInfo = personalInfo;

		if (field.includes("address")) {
			field = field.replace("address", "").toLowerCase();
			newPersonalInfo["address"][field] = e.target.value;
			console.log(field);
		} else {
			newPersonalInfo[field] = e.target.value;
		}
		setPersonalInfo({ ...newPersonalInfo });
	};

	return (
		<>
			<PersonalForm
				fullName={personalInfo.fullName}
				email={personalInfo.emailAddress}
				phone={personalInfo.phoneNumber}
				address={personalInfo.address}
				onChange={onPersonChange}
			/>

			<EducationForm
				schoolName={educationInfo.schoolName}
				course={educationInfo.course}
				startDate={educationInfo.startDate}
				endDate={educationInfo.endDate}
				location={educationInfo.location}
			/>

			<DisplayList array={educationInfo} title="Education" />
			<DisplayList
				array={practicalInfo}
				title="Professional Experience"
			/>

			<h1>{personalInfo.fullName}</h1>
			<h2>{personalInfo.emailAddress}</h2>
			<h2>{personalInfo.phoneNumber}</h2>
			<h3>{personalInfo.address.country}</h3>
			<h4>{personalInfo.address.city}</h4>
			<h5>{personalInfo.address.post}</h5>
			<h5>
				{personalInfo.address.house + " " + personalInfo.address.street}
			</h5>
		</>
	);
}

export default App;
