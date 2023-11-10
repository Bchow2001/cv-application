import CreateInput from "./CreateInput";

function EducationForm({
	onChange,
	schoolName,
	course,
	startDate,
	endDate,
	location,
	id,
}) {
	return (
		<form className="education-form">
			<CreateInput
				id="school-name"
				placeholder="Example University"
				type="text"
				labelText="School: "
				value={schoolName}
				onChange={onChange}
				required={true}
				data-key="schoolName"
			/>
			<CreateInput
				id="course"
				placeholder="Example Course"
				type="text"
				labelText="Program Name: "
				value={course}
				onChange={onChange}
				required={true}
				data-key="course"
			/>
			<CreateInput
				id="start-date"
				placeholder="10/2019"
				type="text"
				labelText="Start Date: "
				value={startDate}
				onChange={onChange}
				required={true}
				data-key="startDate"
			/>
			<CreateInput
				id="end-date"
				placeholder="07/2022"
				type="text"
				labelText="End Date: "
				value={endDate}
				onChange={onChange}
				required={true}
				data-key="endDate"
			/>
			<CreateInput
				id="location"
				placeholder="Egham, Surrey"
				type="text"
				labelText="Location: "
				value={location}
				onChange={onChange}
				data-key="location"
			/>
		</form>
	);
}

export default EducationForm;
