

var myOutput = {}; 
var regStudents = []; 
var counter = 0;

function classify(myArrray){


	if(myArrray.length == 0){
		myOutput.noOfmyGroups = counter; 
		return myOutput
    }

	var newgrp = [];
	myArrray.forEach(({ name, regNum, dob} )=> {
	
		const age = new Date().getFullYear() - new Date(dob).getFullYear();
		

		if(newgrp.length == 0){
			newgrp.push({regNum,name,age}); 
			regStudents.push(regNum);
		}
	
		else if(newgrp.length > 0 && newgrp.length < 3){
			var acceptAge = false;
			newgrp.forEach((st) => {
			
				const ageDiff = st.age - age;
				if(ageDiff <= 5 && ageDiff >= -5) acceptAge = true;
			});
			if(acceptAge) {
				newgrp.push({regNum,name,age}) 
				regStudents.push(regNum);
			}
		}
	});

	counter = counter + 1;

	myOutput[`myGroup${counter}`] = {
        members: ((myGroup)=>{
				
				var result = myGroup.map((sobj)=>{
					const {name, age} = sobj;
					return { name, age};
				});
				return result;
			})(newgrp),
            oldest: ((myGroup)=>{
			
				var oldest = 0;
				for(s of myGroup){
					if(s.age > oldest) oldest = s.age;
				}
				return oldest;
			})(newgrp),
        sum: ((myGroup)=>{
				
				var sum = 0;
				for(s in myGroup){
					sum += s.age;
				}
				return sum
			})(newgrp),
        regNums: ((myGroup)=>{
			
				var result = myGroup.map((sobj)=>{
					const {regNum } = sobj;
					return parseInt(regNum);
				});
				return result.sort();
			})(newgrp)
        }


	return classify(
      
      myArrray.filter((member) => regStudents.indexOf(member.regNum) == -1)
		)	
}

