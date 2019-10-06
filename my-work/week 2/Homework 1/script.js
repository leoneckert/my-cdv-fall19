var data = [
    {
        "timestamp": "2019-09-04T14:04:01.960Z",
        "forrestGump": 5,
        "titanic": 4,
        "sexAndTheCity": 5,
        "her": 4,
        "fightClub": 10,
        "theWallStreetWolf": 10
    },
    {
        "timestamp": "2019-09-04T14:04:50.017Z",
        "forrestGump": 8,
        "titanic": 3,
        "sexAndTheCity": 3,
        "her": 3,
        "fightClub": 10,
        "theWallStreetWolf": 5
    },
    {
        "timestamp": "2019-09-04T14:05:03.899Z",
        "forrestGump": 3,
        "titanic": 5,
        "sexAndTheCity": 10,
        "her": 4,
        "fightClub": 3,
        "theWallStreetWolf": 10
    },
    {
        "timestamp": "2019-09-04T14:05:58.912Z",
        "forrestGump": 6,
        "titanic": 4,
        "sexAndTheCity": 8,
        "her": 5,
        "fightClub": 10,
        "theWallStreetWolf": 8
    },
    {
        "timestamp": "2019-09-04T14:23:03.710Z",
        "forrestGump": 10,
        "titanic": 9,
        "sexAndTheCity": 3,
        "her": 7,
        "fightClub": 8,
        "theWallStreetWolf": 1
    },
    {
        "timestamp": "2019-09-04T15:18:31.013Z",
        "forrestGump": 4,
        "titanic": 10,
        "sexAndTheCity": 9,
        "her": 7,
        "fightClub": 6,
        "theWallStreetWolf": 8
    },
    {
        "timestamp": "2019-09-04T15:32:48.150Z",
        "forrestGump": 7,
        "titanic": 9,
        "sexAndTheCity": 4,
        "her": 5,
        "fightClub": 7,
        "theWallStreetWolf": 7
    },
    {
        "timestamp": "2019-09-04T15:33:19.939Z",
        "forrestGump": 7,
        "titanic": 9,
        "sexAndTheCity": 4,
        "her": 5,
        "fightClub": 7,
        "theWallStreetWolf": 7
    },
    {
        "timestamp": "2019-09-04T18:29:23.092Z",
        "forrestGump": 7,
        "titanic": 5,
        "sexAndTheCity": 5,
        "her": 8,
        "fightClub": 9,
        "theWallStreetWolf": 9
    },
    {
        "timestamp": "2019-09-04T19:06:07.596Z",
        "forrestGump": 9,
        "titanic": 9,
        "sexAndTheCity": 9,
        "her": 5,
        "fightClub": 5,
        "theWallStreetWolf": 5
    },
    {
        "timestamp": "2019-09-05T03:26:06.815Z",
        "forrestGump": 8,
        "titanic": 7,
        "sexAndTheCity": 5,
        "her": 5,
        "fightClub": 5,
        "theWallStreetWolf": 5
    },
    {
        "timestamp": "2019-09-05T05:20:29.340Z",
        "forrestGump": 7,
        "titanic": 5,
        "sexAndTheCity": 3,
        "her": 6,
        "fightClub": 6,
        "theWallStreetWolf": 6
    }
]

// the function dates a data
// array as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  let keys = Object.keys(data[data.length-1]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}

let transformData = averageData (data);

console.log(transformData);


//loop over transformData

for (let i=0; i<transformData.length; i++){
  //get the item that we deal with in this iteration
  let datapoint = transformData[i];
  //for each datapoint get the name and average value
  let food = datapoint.name;
  let average = datapoint.average;
  console.log("i right now is "+ i);
  console.log(datapoint);
  console.log(food);
  console.log(average);

//create a div

let bar = document.createElement("div");
let barName = document.createElement("p");
barName.innerHTML = food;
//modify size and/or styling of div

bar.className = "bar";
bar.style.width=(average*40) + "px";
//append to the page
document.body.appendChild(bar);
bar.appendChild(barName);
}
