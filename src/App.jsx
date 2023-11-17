import { useState } from "react";
import { v4 as uuid } from "uuid";
import PersonalForm from "./components/PersonalForm";
import "./App.css";
import DisplayPersonalInfo from "./components/DisplayPersonalInfo";
import DisplayList from "./components/DisplayList";
import DisplayEditList from "./components/EditList";

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

	const onPersonChange = (e) => {
		let field = e.target.getAttribute("data-key");
		let newPersonalInfo = personalInfo;

		if (field.includes("address")) {
			field = field.replace("address", "").toLowerCase();
			newPersonalInfo["address"][field] = e.target.value;
		} else {
			newPersonalInfo[field] = e.target.value;
		}
		setPersonalInfo({ ...newPersonalInfo });
	};

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
			schoolName: "Sexey's",
			course: "GCSE",
			startDate: "10/2013",
			endDate: "07/2019",
			location: "Bruton, Somerset",
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

	return (
		<>
			<div className="form-wrapper">
				<PersonalForm
					fullName={personalInfo.fullName}
					email={personalInfo.emailAddress}
					phone={personalInfo.phoneNumber}
					address={personalInfo.address}
					onChange={onPersonChange}
				/>
				<h2>Education</h2>
				<DisplayEditList
					array={educationInfo}
					title="Education"
					setEducationInfo={setEducationInfo}
				/>
				<h2>Work</h2>
				<DisplayEditList
					array={practicalInfo}
					title="Professional Experience"
					setPracticalInfo={setPracticalInfo}
				/>
			</div>
			<div className="cv-wrapper">
				<DisplayPersonalInfo
					fullName={personalInfo.fullName}
					email={personalInfo.emailAddress}
					phone={personalInfo.phoneNumber}
					address={personalInfo.address}
				></DisplayPersonalInfo>
				<DisplayList array={educationInfo} title="Education" />
				<DisplayList
					array={practicalInfo}
					title="Professional Experience"
				/>
			</div>
		</>
	);
}

export default App;
