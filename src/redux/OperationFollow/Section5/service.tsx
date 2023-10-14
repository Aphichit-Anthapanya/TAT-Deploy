import { updateSection5 } from "../reducer";
import { sampleData } from "../../SampleData/sample_data";

export const fetchSection5dataService = async (id: number, dispatchs: any) => {
  try {
    // Fetch data from the API
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = sampleData.operationFollowForm.section5;

    // Dispatch the action to update Redux store
    //dispatchs(updateSection5(data));
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

const searchIdFromStateList = (id: number, data: any) => {
  const item = data.find((item: { id: number }) => item.id === id);
  return item ? item.id : null;
};
