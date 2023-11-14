import EducationForm from "./EducationForm";
import PracticalForm from "./PracticalForm";
import { useState } from "react";

function EditEducationList({ id, schoolName, startDate, endDate, onClick }) {
	return (
		<li data-key={id} onClick={onClick}>
			<h3>
				<span>{schoolName} </span>
				<span>
					{startDate} - {endDate}
				</span>
			</h3>
		</li>
	);
}

function EditPracticalList({ id, practicalName, startDate, endDate, onClick }) {
	return (
		<li data-key={id} onClick={onClick}>
			<h3>
				<span>{practicalName} </span>
				<span>
					{startDate} - {endDate}
				</span>
			</h3>
		</li>
	);
}

function DisplayEditList({ array, title, setEducationInfo, setPracticalInfo }) {
	const [editing, setEditing] = useState(false);
	const [activeID, setActiveID] = useState("");

	const onClickEdit = (e) => {
		let id = e.currentTarget.getAttribute("data-key");
		setActiveID(id);
		setEditing(!editing);
	};

	const onClickSave = (e) => {
		setActiveID("");
		setEditing(!editing);
	};

	const activeItem = array.find((x) => x.id === activeID);

	const onChange = (e) => {
		let field = e.target.getAttribute("data-key");
		let newArr = [...array];
		let newActiveItem = newArr.find((x) => x.id === activeID);
		newActiveItem[field] = e.target.value;
		if (title === "Education") {
			setEducationInfo([...newArr]);
		} else if (title === "Professional Experience") {
			setPracticalInfo([...newArr]);
		}
	};

	if (!editing) {
		return (
			<div className="edit-list">
				{title === "Education" && (
					<ul>
						{array.map((item) => {
							return (
								<EditEducationList
									key={item.id}
									id={item.id}
									schoolName={item.schoolName}
									startDate={item.startDate}
									endDate={item.endDate}
									onClick={onClickEdit}
								/>
							);
						})}
					</ul>
				)}
				{title === "Professional Experience" && (
					<ul>
						{array.map((item) => {
							return (
								<EditPracticalList
									key={item.id}
									id={item.id}
									practicalName={item.practicalName}
									startDate={item.startDate}
									endDate={item.endDate}
									onClick={onClickEdit}
								/>
							);
						})}
					</ul>
				)}
			</div>
		);
	} else if (editing) {
		return (
			<div className="form">
				{title === "Education" && (
					<EducationForm
						schoolName={activeItem.schoolName}
						course={activeItem.course}
						startDate={activeItem.startDate}
						endDate={activeItem.endDate}
						location={activeItem.location}
						onChange={onChange}
						onSave={onClickSave}
					/>
				)}
				{title === "Professional Experience" && (
					<PracticalForm
						practicalName={activeItem.practicalName}
						title={activeItem.title}
						startDate={activeItem.startDate}
						endDate={activeItem.endDate}
						location={activeItem.location}
						description={activeItem.description}
						onChange={onChange}
						onSave={onClickSave}
					/>
				)}
			</div>
		);
	}
}

export default DisplayEditList;
