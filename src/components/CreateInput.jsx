function CreateInput({
	id,
	placeholder,
	type,
	labelText,
	value,
	onChange,
	optional,
	required,
	"data-key": dataKey,
}) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>
				{required && <span className="required-text">*</span>}
				<span className="label-text">{labelText}</span>
				{optional && <span className="optional-text">optional</span>}
			</label>
			{type === "textarea" ? (
				<textarea
					id={id}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					data-key={dataKey}
				></textarea>
			) : (
				<input
					type={type}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					data-key={dataKey}
				/>
			)}
		</div>
	);
}

export default CreateInput;
