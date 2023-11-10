function EducationListItem({ props }) {
	return (
		<li>
			<div className="date-location" id={props.id}>
				<div className="date">
					{`${props.startDate}` + "–" + `${props.endDate}`}
				</div>
				<div className="location">{props.location}</div>
			</div>
			<div className="edu-details">
				<div className="school-name">{props.schoolName}</div>
				<span className="course">{props.course}</span>
				<span className="grade">{props.grade}</span>
			</div>
		</li>
	);
}

function PracticalListItem({ props }) {
	return (
		<li>
			<div className="date-location" id={props.id}>
				<div className="date">
					{`${props.startDate}` + "–" + `${props.endDate}`}
				</div>
				<div className="location">{props.location}</div>
			</div>
			<div className="prac-details">
				<div className="practical-name">{props.practicalName}</div>
				<span className="title">{props.title}</span>
				<div className="description">{props.description}</div>
			</div>
		</li>
	);
}

function DisplayList({ array, title }) {
	return (
		<div className="list">
			<h1>{title}</h1>
			{title === "Education" && (
				<ul>
					{array.map((item) => {
						console.log(item);
						return <EducationListItem key={item.id} props={item} />;
					})}
				</ul>
			)}
			{title === "Professional Experience" && (
				<ul>
					{array.map((item) => {
						console.log(item);
						return <PracticalListItem key={item.id} props={item} />;
					})}
				</ul>
			)}
		</div>
	);
}

export default DisplayList;
