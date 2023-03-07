import { useState, useRef, useEffect } from "react";
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { startOfWeek, endOfWeek } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { getUnixTime } from "date-fns";

const StudentSearch = ({timeFrame}) => {
	const [open, setOpen] = useState(false);


	const refOne = useRef(null);

	const [range, setRange] = useState([
		{
			startDate: startOfWeek(new Date()),
			endDate: endOfWeek(new Date()),
			key: "selection",
		},
	]);

	useEffect(() => {
		document.addEventListener("click", hideOnOutsideClick, true);
		document.addEventListener("load", test, true)
	}, []);

	const data = {
		oldest: getUnixTime(range[0].startDate),
		latest: getUnixTime(range[0].endDate)
	}

	const test = () => timeFrame(data)

	const hideOnOutsideClick = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false);
		}
	};
	return (
		<div className="search-sort-buttons">
			<section className="calendarWrap">
				<input
					value={`${format(range[0].startDate, "dd/MM/yyy")} to ${format(
						range[0].endDate,
						"dd/MM/yyy"
					)}`}
					className="inputBox"
					onClick={(open) => setOpen((open) => !open)}
				/>
				<button onClick={test}>Change Date</button>

				<div ref={refOne}>
					{open && (
						<DateRangePicker
							className="calendarElement"
							date={new Date()}
							onChange={(item) => setRange([item.selection])}
							editableDateInputs={true}
							moveRangeOnFirstSelection={false}
							ranges={range}
						/>
					)}
				</div>
			</section>
			<BsSortDown />
			{/* <BsSortUpAlt /> */}
		</div>
	);
};

export default StudentSearch;
