import CreateInput from "./CreateInput";

function PracticalForm({
	onChange,
	practicalName,
	title,
	startDate,
	endDate,
	location,
	description,
	onSave,
}) {
	return (
		<form className="form">
			<CreateInput
				id="practical-name"
				placeholder="Enter Company Name"
				type="text"
				labelText="Company Name: "
				value={practicalName}
				onChange={onChange}
				required={true}
				data-key="practicalName"
			/>
			<CreateInput
				id="title"
				placeholder="Enter Position Title"
				type="text"
				labelText="Position Title: "
				value={title}
				onChange={onChange}
				required={true}
				data-key="title"
			/>
			<CreateInput
				id="startDate"
				placeholder="Enter Start Date"
				type="text"
				labelText="Start Date: "
				value={startDate}
				onChange={onChange}
				data-key="startDate"
			/>
			<CreateInput
				id="endDate"
				placeholder="Enter End Date"
				type="text"
				labelText="End Date: "
				value={endDate}
				onChange={onChange}
				data-key="endDate"
			/>
			<CreateInput
				id="location"
				placeholder="Enter Location"
				type="text"
				labelText="Location: "
				value={location}
				onChange={onChange}
				data-key="location"
			/>
			<CreateInput
				id="description"
				placeholder="Enter Description"
				type="textarea"
				labelText="Description: "
				value={description}
				onChange={onChange}
				data-key="description"
			/>
			<button type="button">Delete</button>
			<button type="button">Cancel</button>
			<button type="submit" onClick={onSave}>
				Save
			</button>
		</form>
	);
}

export default PracticalForm;
