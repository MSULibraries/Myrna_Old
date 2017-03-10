//Redux action creator, where actions are assigned 
//based off the property assigned to them from the action dispatch within a component
export const AddAction = (action) =>{ 
if (action == 'sub'){
    return{
		type: "SUB"
	}
}
else{
	return{
		type: "ADD"
	}
}
};

