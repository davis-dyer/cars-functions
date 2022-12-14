//Car Construction with Functions

const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4;
    return chassisObject;
}

const addEngine = (chassisObject) => {
    chassisObject.engine = '4.8L';
    return chassisObject;
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = 'Tilting';
    return chassisObject;
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = 'Two wheel drive';
    return chassisObject;
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

let chassis = createChassis();
chassis = addBody(chassis)
chassis = addWheels(chassis)
chassis = addEngine(chassis)
chassis = addSteeringWheel(chassis)
chassis = addDriveTrain(chassis)

console.log(chassis);