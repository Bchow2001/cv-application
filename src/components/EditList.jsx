import EducationForm from "./EducationForm";
import PracticalForm from "./PracticalForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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

	let activeItem = array.find((x) => x.id === activeID);

	const onClickEdit = (e) => {
		let id = e.currentTarget.getAttribute("data-key");
		setActiveID(id);
		setEditing(!editing);
	};

	const onClickSave = () => {
		setActiveID("");
		setEditing(!editing);
	};

	const onClickDelete = () => {
		let newArr = [...array];
		let newActiveItemIndex = newArr.findIndex((x) => x.id === activeID);
		newArr.splice(newActiveItemIndex, 1);
		setEditing(!editing);
		if (title === "Education") {
			setEducationInfo([...newArr]);
		} else if (title === "Professional Experience") {
			setPracticalInfo([...newArr]);
		}
	};

	const onClickAdd = () => {
		let newArr = [...array];
		let callState;
		if (title === "Education") {
			activeItem = {
				schoolName: "",
				course: "",
				startDate: "",
				endDate: "",
				location: "",
				grade: "",
				id: uuid(),
			};
			callState = (arr) => {
				setEducationInfo([...arr]);
			};
		} else if (title === "Professional Experience") {
			activeItem = {
				practicalName: "",
				title: "",
				startDate: "",
				endDate: "",
				location: "",
				description: "",
				id: uuid(),
			};
			callState = (arr) => {
				setPracticalInfo([...arr]);
			};
		}
		newArr.push(activeItem);
		setActiveID(activeItem.id);
		callState(newArr);
		setEditing(!editing);
	};

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
				<button onClick={onClickAdd}>Add Item</button>
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
						onDelete={onClickDelete}
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
						onDelete={onClickDelete}
					/>
				)}
			</div>
		);
	}
}

export default DisplayEditList;
