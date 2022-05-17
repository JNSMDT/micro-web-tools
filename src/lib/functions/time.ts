import { differenceInMinutes } from 'date-fns';

export function calculateTime(startTime = '00:00', endTime = '00:00'): string {
	console.log(startTime);
	console.log(endTime);
	const startTimeValues = startTime.split(':').map(Number);
	const endTimeValues = endTime.split(':').map(Number);

	console.log(startTimeValues);
	console.log(endTimeValues);
	const startDate = new Date(
		0,
		0,
		0,
		startTimeValues[0],
		startTimeValues[1],
		startTimeValues[2] || 0,
		0
	);
	const endDate = new Date(0, 0, 0, endTimeValues[0], endTimeValues[1], endTimeValues[2] || 0, 0);

	console.log(startDate);
	console.log(endDate);
	const difference = differenceInMinutes(endDate, startDate);

	return (difference / 60).toFixed(2);
}

export default { calculateTime };
