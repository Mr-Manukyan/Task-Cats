import { useState } from "react"
import Select from "react-select"
import "./MySelect.css"





export const MySelect = ({ categories, getCatsByCategoryID }) => {
	const [currentCatCategory, setCurrentCatCategory] = useState(5);

	const getValue = () => {
		return currentCatCategory
			? categories.find((c) => c.value === currentCatCategory)
			: ""
	};

	const onChange = (newValue) => {
		setCurrentCatCategory(newValue.value)
		getCatsByCategoryID(newValue.value)
	}

	return (
		<div className="select-container">
			<Select
				classNamePrefix="custom-select"
				onChange={onChange}
				value={getValue()}
				options={categories}
			/>
		</div>
	)
}
