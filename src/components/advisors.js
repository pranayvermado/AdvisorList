import { useEffect, useState } from "react";
import Advisor from "./advisor";
import axios from "axios";
var initialState = [
  {
    id: 1,
    imageUrl: "contact1.jpg",
    title: "Miss Elizabeth",
    rates: "$44.99",
    isChatDisbaled: false,
    isCallNowDisabled: false,
  },
  {
    id: 2,
    imageUrl: "contact2.jpg",
    title: "Pranay Verma",
    rates: "$40.99",
    isChatDisbaled: true,
    isCallNowDisabled: false,
  },
  {
    id: 3,
    imageUrl: "contact1.jpg",
    title: "advisor Laura",
    rates: "$50.99",
    isChatDisbaled: false,
    isCallNowDisabled: true,
  },
  {
    id: 4,
    imageUrl: "contact2.jpg",
    title: "advisor Jada",
    rates: "$5.99",
    isChatDisbaled: true,
    isCallNowDisabled: true,
  },
];
var myTimmer = null;

const Advisors = () => {
  const [advisorList, setAdvisorsList] = useState([]);

  useEffect(() => {
    getAdvisorData();
    myTimmer = setInterval(() => {
      getAdvisorData();
    }, 30000);

    return function () {
      clearInterval(myTimmer);
    };
  }, []);

  //Demonstrating How we can make API CALL and Mocking the behaviours
  const getAdvisorData = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/ee1619b8-0855-4125-98fc-07afc01197a4"
    );
    if (response && response.status === 200) {
      let myData = getUpdateData();
      setAdvisorsList(myData);
    }
  };

  //Mocking Data, with different chat/call status.
  const getUpdateData = () => {
    let myData = initialState.map((item) => {
      if (item.isChatDisbaled) {
        item.isChatDisbaled = false;
      } else {
        item.isChatDisbaled = true;
      }
      if (item.isCallNowDisabled) {
        item.isCallNowDisabled = false;
      } else {
        item.isCallNowDisabled = true;
      }
      return item;
    });
    return myData;
  };

  return advisorList.map((item) => (
    <Advisor key={item.id} advisorData={item} />
  ));
};
export default Advisors;
