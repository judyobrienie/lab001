var aCar = {
        owner : "Joe Bloggs",
        type : {
        	make: "Toyota",
        	model: "Corolla",
        	cc: "1.8"
        },
        registration : {
        	year:"10",
        	county_code: "WD",
        	number: "1058"
        },
    };

    console.log(aCar.owner);
    console.log(aCar.owner + ' drives a ' + aCar.type.make);
    console.log(aCar.owner	+ ' Reg. = ' + aCar.registration.year + "-" + aCar.registration.county_code+ "-"+aCar.registration.number);


    aCar.milage = "80000";
    aCar.color = {
    			exterior : "red",
    			interior: {
    				texture: "leather",
    				shade: "cream"
    			},
    }

    console.log("It is a " + aCar.color.exterior + " car, " + aCar.milage + " milage and " + aCar.color.interior.texture + " interior");