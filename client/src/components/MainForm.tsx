import React, { useEffect, useState } from "react";
import Input from "./Input";
import CategoryInput from "./CategoryInput";
import axios from "axios";
import { categories } from "../utils/category";
import { inputFields } from "../utils/numeric";

const MainForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string | number>>({
    'MS SubClass': 20,
    'MS Zoning': 'RL',
    'Lot Frontage': 141.0,
    'Lot Area': 31770,
    'Street': 'Pave',
    'Alley': "",
    'Lot Shape': 'IR1',
    'Land Contour': 'Lvl',
    'Utilities': 'AllPub',
    'Lot Config': 'Corner',
    'Land Slope': 'Gtl',
    'Neighborhood': 'NAmes',
    'Condition 1': 'Norm',
    'Condition 2': 'Norm',
    'Bldg Type': '1Fam',
    'House Style': '1Story',
    'Overall Qual': 6,
    'Overall Cond': 5,
    'Year Built': 1960,
    'Year Remod/Add': 1960,
    'Roof Style': 'Hip',
    'Roof Matl': 'CompShg',
    'Exterior 1st': 'BrkFace',
    'Exterior 2nd': 'Plywood',
    'Mas Vnr Type': 'Stone',
    'Mas Vnr Area': 112.0,
    'Exter Qual': 'TA',
    'Exter Cond': 'TA',
    'Foundation': 'CBlock',
    'Bsmt Qual': 'TA',
    'Bsmt Cond': 'Gd',
    'Bsmt Exposure': 'Gd',
    'BsmtFin Type 1': 'BLQ',
    'BsmtFin SF 1': 639.0,
    'BsmtFin Type 2': 'Unf',
    'BsmtFin SF 2': 0.0,
    'Bsmt Unf SF': 441.0,
    'Total Bsmt SF': 1080.0,
    'Heating': 'GasA',
    'Heating QC': 'Fa',
    'Central Air': 'Y',
    'Electrical': 'SBrkr',
    '1st Flr SF': 1656,
    '2nd Flr SF': 0,
    'Low Qual Fin SF': 0,
    'Gr Liv Area': 1656,
    'Bsmt Full Bath': 1.0,
    'Bsmt Half Bath': 0.0,
    'Full Bath': 1,
    'Half Bath': 0,
    'Bedroom AbvGr': 3,
    'Kitchen AbvGr': 1,
    'Kitchen Qual': 'TA',
    'TotRms AbvGrd': 7,
    'Functional': 'Typ',
    'Fireplaces': 2,
    'Fireplace Qu': 'Gd',
    'Garage Type': 'Attchd',
    'Garage Yr Blt': 1960.0,
    'Garage Finish': 'Fin',
    'Garage Cars': 2.0,
    'Garage Area': 528.0,
    'Garage Qual': 'TA',
    'Garage Cond': 'TA',
    'Paved Drive': 'P',
    'Wood Deck SF': 210,
    'Open Porch SF': 62,
    'Enclosed Porch': 0,
    '3Ssn Porch': 0,
    'Screen Porch': 0,
    'Pool Area': 0,
    'Pool QC': "",
    'Fence': "",
    'Misc Feature': "",
    'Misc Val': 0,
    'Mo Sold': 5,
    'Yr Sold': 2010,
    'Sale Type': 'WD ',
    'Sale Condition': 'Normal',
    'SalePrice': 0
  });
  const [prediction, setPrediction] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const fetchDataFromBackend = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/data");
  //     return response.data; // Return fetched data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     throw new Error("Failed to fetch data from the backend.");
  //   }
  // };

  const sendDataToBackend = async (data: Record<string, string | number>) => {
    try {
      const response = await axios.post(
        "https://43a8-34-168-2-114.ngrok-free.app/predict",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error sending data:", error);
      throw new Error("Failed to send data to the backend.");
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await fetchDataFromBackend();
  //       console.log("Fetched Data:", data);
  //       if (data?.prediction) {
  //         setPrediction(data.prediction); // Update prediction from response
  //         // setIsModalVisible(true); // Show modal after successful submission
  //       } // Update prediction if available
  //     } catch (error) {
  //       console.error("Error fetching initial data:", error);
  //     }
  //   })();
  // }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Collected Data:", formData);

    try {
      // Send form data to backend and get response
      const response = await sendDataToBackend(formData);
      console.log("Response from server:", response);
      if (response?.predicted_price) {
        setPrediction(response.predicted_price); // Update prediction from response
        setIsModalVisible(true); // Show modal after successful submission
      } // Update prediction from response

      // Fetch updated data from backend
      // const fetchedData = await fetchDataFromBackend();
      // if (fetchedData?.prediction) {
      //   setPrediction(fetchedData.prediction); // Update prediction from response
      //   setIsModalVisible(true); // Show modal after successful submission
      // }; // Update prediction from fetched data
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="container mx-auto space-y-8 rounded-lg bg-gray-50 p-8 shadow-2xl">
      <h1 className="text-center text-3xl font-extrabold text-blue-800 drop-shadow-sm">
        Get Your House Price Estimate
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg bg-gray-100 p-4 shadow-md"
      >
        {/* Numeric Input Section */}
        <div className="rounded-lg bg-white p-4 shadow-lg bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-700
  ">
          <h2 className="mb-4 text-lg font-semibold text-white">
            Enter Property Details (Numerical)
          </h2>
          <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
            {inputFields.map(({ label, inputField }) => (
              <div key={inputField}>
                <Input
                  label={label}
                  defaultValue={formData[inputField] || ""}
                  value={formData[inputField] || ""}
                  onChange={(value) => handleInputChange(inputField, value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Category Input Section */}
        <div className="rounded-lg bg-white p-4 shadow-lg bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-700
  ">
          <h2 className="mb-4 text-lg font-semibold text-white">
            Select Property Characteristics (Categorical)
          </h2>
          <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4 ">
            {Object.entries(categories).map(([key, { label, options }]) => (
              <div key={key}>
                <CategoryInput
                  label={label}
                  options={options}
                  selectedOption={(formData[key] as string) || ""}
                  onSelect={(value) => handleCategoryChange(key, value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit and Prediction Section */}
        <div className="text-center">
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Check The Price
          </button>
        </div>
      </form>
      {isModalVisible && (
        <div className="fixed inset-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-md">
          <div className="relative w-11/12 max-w-lg scale-105 transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-blue-50 p-8 shadow-2xl transition-transform">
            {/* Close Button */}
            <button
              onClick={() => setIsModalVisible(false)}
              className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Modal Content */}
            <h2 className="mb-4 text-center text-4xl font-extrabold text-blue-700">
              The Price Of House Is
            </h2>
            <p className="text-center text-5xl font-black text-green-700 drop-shadow-lg">
              ${prediction}
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsModalVisible(false)}
                className="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 px-8 py-3 text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainForm;
