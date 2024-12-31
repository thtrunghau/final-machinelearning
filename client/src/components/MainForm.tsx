import React, { useEffect, useState } from "react";
import Input from "./Input";
import CategoryInput from "./CategoryInput";
import axios from "axios";

const MainForm: React.FC = () => {
  const inputFields = [
    { label: "MS SubClass", inputField: "msSubClass" },
    { label: "Lot Frontage", inputField: "lotFrontage" },
    { label: "Lot Area", inputField: "lotArea" },
    { label: "Overall Quality", inputField: "overallQual" },
    { label: "Overall Condition", inputField: "overallCond" },
    { label: "Year Built", inputField: "yearBuilt" },
    { label: "Year Remodeled/Added", inputField: "yearRemodAdd" },
    { label: "Masonry Veneer Area", inputField: "masVnrArea" },
    { label: "Basement Finished Area 1", inputField: "bsmtFinSF1" },
    { label: "Basement Finished Area 2", inputField: "bsmtFinSF2" },
    { label: "Basement Unfinished Area", inputField: "bsmtUnfSF" },
    { label: "Total Basement Area", inputField: "totalBsmtSF" },
    { label: "1st Floor Area", inputField: "firstFlrSF" },
    { label: "2nd Floor Area", inputField: "secondFlrSF" },
    { label: "Low Quality Finished Area", inputField: "lowQualFinSF" },
    { label: "Above Ground Living Area", inputField: "grLivArea" },
    { label: "Basement Full Baths", inputField: "bsmtFullBath" },
    { label: "Basement Half Baths", inputField: "bsmtHalfBath" },
    { label: "Full Bathrooms", inputField: "fullBath" },
    { label: "Half Bathrooms", inputField: "halfBath" },
    { label: "Bedrooms Above Ground", inputField: "bedroomAbvGr" },
    { label: "Kitchens Above Ground", inputField: "kitchenAbvGr" },
    { label: "Total Rooms Above Ground", inputField: "totRmsAbvGrd" },
    { label: "Fireplaces", inputField: "fireplaces" },
    { label: "Garage Year Built", inputField: "garageYrBlt" },
    { label: "Garage Cars", inputField: "garageCars" },
    { label: "Garage Area", inputField: "garageArea" },
    { label: "Wood Deck Area", inputField: "woodDeckSF" },
    { label: "Open Porch Area", inputField: "openPorchSF" },
    { label: "Enclosed Porch Area", inputField: "enclosedPorch" },
    { label: "3-Season Porch Area", inputField: "threeSsnPorch" },
    { label: "Screen Porch Area", inputField: "screenPorch" },
    { label: "Pool Area", inputField: "poolArea" },
    { label: "Miscellaneous Value", inputField: "miscVal" },
    { label: "Month Sold", inputField: "moSold" },
    { label: "Year Sold", inputField: "yrSold" },
  ];

  const categories = {
    msZoning: {
      label: "Zoning Classification",
      options: ["RL", "RH", "FV", "RM", "C (all)", "I (all)", "A (agr)"],
    },
    street: {
      label: "Type of Street Access",
      options: ["Pave", "Grvl"],
    },
    alley: {
      label: "Type of Alley Access",
      options: ["Pave", "Grvl"],
    },
    lotShape: {
      label: "Shape of the Lot",
      options: ["IR1", "Reg", "IR2", "IR3"],
    },
    landContour: {
      label: "Land Topography",
      options: ["Lvl", "HLS", "Bnk", "Low"],
    },
    utilities: {
      label: "Available Utilities",
      options: ["AllPub", "NoSewr", "NoSeWa"],
    },
    lotConfig: {
      label: "Lot Configuration",
      options: ["Corner", "Inside", "CulDSac", "FR2", "FR3"],
    },
    landSlope: {
      label: "Slope of the Land",
      options: ["Gtl", "Mod", "Sev"],
    },
    neighborhood: {
      label: "Neighborhood",
      options: [
        "NAmes",
        "Gilbert",
        "StoneBr",
        "NWAmes",
        "Somerst",
        "BrDale",
        "NPkVill",
        "NridgHt",
        "Blmngtn",
        "NoRidge",
        "SawyerW",
        "Sawyer",
        "Greens",
        "BrkSide",
        "OldTown",
        "IDOTRR",
        "ClearCr",
        "SWISU",
        "Edwards",
        "CollgCr",
        "Crawfor",
        "Blueste",
        "Mitchel",
        "Timber",
        "MeadowV",
        "Veenker",
        "GrnHill",
        "Landmrk",
      ],
    },
    condition1: {
      label: "Primary Condition",
      options: [
        "Norm",
        "Feedr",
        "PosN",
        "RRNe",
        "RRAe",
        "Artery",
        "PosA",
        "RRAn",
        "RRNn",
      ],
    },
    condition2: {
      label: "Secondary Condition",
      options: [
        "Norm",
        "Feedr",
        "PosA",
        "PosN",
        "Artery",
        "RRNn",
        "RRAe",
        "RRAn",
      ],
    },
    bldgType: {
      label: "Building Type",
      options: ["1Fam", "TwnhsE", "Twnhs", "Duplex", "2fmCon"],
    },
    houseStyle: {
      label: "House Style",
      options: [
        "1Story",
        "2Story",
        "1.5Fin",
        "SFoyer",
        "SLvl",
        "2.5Unf",
        "1.5Unf",
        "2.5Fin",
      ],
    },
    roofStyle: {
      label: "Roof Type",
      options: ["Hip", "Gable", "Mansard", "Gambrel", "Shed", "Flat"],
    },
    roofMatl: {
      label: "Roof Material",
      options: [
        "CompShg",
        "WdShake",
        "Tar&Grv",
        "WdShngl",
        "Membran",
        "ClyTile",
        "Roll",
        "Metal",
      ],
    },
    exterior1st: {
      label: "Primary Exterior Material",
      options: [
        "BrkFace",
        "VinylSd",
        "Wd Sdng",
        "CemntBd",
        "HdBoard",
        "Plywood",
        "MetalSd",
        "AsbShng",
        "WdShing",
        "Stucco",
        "AsphShn",
        "BrkComm",
        "CBlock",
        "PreCast",
        "Stone",
        "ImStucc",
      ],
    },
    exterior2nd: {
      label: "Secondary Exterior Material",
      options: [
        "Plywood",
        "VinylSd",
        "Wd Sdng",
        "BrkFace",
        "CmentBd",
        "HdBoard",
        "Wd Shng",
        "MetalSd",
        "ImStucc",
        "Brk Cmn",
        "AsbShng",
        "Stucco",
        "AsphShn",
        "CBlock",
        "Stone",
        "PreCast",
        "Other",
      ],
    },
    masVnrType: {
      label: "Masonry Veneer Type",
      options: ["Stone", "BrkFace", "BrkCmn", "CBlock"],
    },
    exterQual: {
      label: "Exterior Quality",
      options: ["TA", "Gd", "Ex", "Fa"],
    },
    exterCond: {
      label: "Exterior Condition",
      options: ["TA", "Gd", "Fa", "Po", "Ex"],
    },
    foundation: {
      label: "Type of Foundation",
      options: ["CBlock", "PConc", "Wood", "BrkTil", "Slab", "Stone"],
    },
    bsmtQual: {
      label: "Basement Quality",
      options: ["TA", "Gd", "Ex", "Fa", "Po"],
    },
    bsmtCond: {
      label: "Basement Condition",
      options: ["Gd", "TA", "Po", "Fa", "Ex"],
    },
    bsmtExposure: {
      label: "Basement Exposure",
      options: ["Gd", "No", "Mn", "Av"],
    },
    bsmtFinType1: {
      label: "Finished Basement Type 1",
      options: ["BLQ", "Rec", "ALQ", "GLQ", "Unf", "LwQ"],
    },
    bsmtFinType2: {
      label: "Finished Basement Type 2",
      options: ["Unf", "LwQ", "BLQ", "Rec", "GLQ", "ALQ"],
    },
    heating: {
      label: "Heating System Type",
      options: ["GasA", "GasW", "Grav", "Wall", "Floor", "OthW"],
    },
    heatingQC: {
      label: "Heating System Quality",
      options: ["Fa", "TA", "Ex", "Gd", "Po"],
    },
    centralAir: {
      label: "Central Air Conditioning",
      options: ["Y", "N"],
    },
    electrical: {
      label: "Electrical System Type",
      options: ["SBrkr", "FuseA", "FuseF", "FuseP", "Mix"],
    },
    kitchenQual: {
      label: "Kitchen Quality",
      options: ["TA", "Gd", "Ex", "Fa", "Po"],
    },
    functional: {
      label: "Overall Functionality",
      options: ["Typ", "Mod", "Min1", "Min2", "Maj1", "Maj2", "Sev", "Sal"],
    },
    fireplaceQu: {
      label: "Fireplace Quality",
      options: ["Gd", "TA", "Po", "Ex", "Fa"],
    },
    garageType: {
      label: "Garage Type",
      options: ["Attchd", "BuiltIn", "Basment", "Detchd", "CarPort", "2Types"],
    },
    garageFinish: {
      label: "Garage Finish",
      options: ["Fin", "Unf", "RFn"],
    },
    garageQual: {
      label: "Garage Quality",
      options: ["TA", "Fa", "Gd", "Ex", "Po"],
    },
    garageCond: {
      label: "Garage Condition",
      options: ["TA", "Fa", "Gd", "Ex", "Po"],
    },
    pavedDrive: {
      label: "Paved Driveway",
      options: ["P", "Y", "N"],
    },
    poolQC: {
      label: "Pool Quality",
      options: ["Ex", "Gd", "TA", "Fa"],
    },
    fence: {
      label: "Fence Type",
      options: ["MnPrv", "GdPrv", "GdWo", "MnWw"],
    },
    miscFeature: {
      label: "Miscellaneous Features",
      options: ["Gar2", "Shed", "Othr", "Elev", "TenC"],
    },
    saleType: {
      label: "Sale Type",
      options: [
        "WD ",
        "New",
        "COD",
        "ConLI",
        "Con",
        "ConLD",
        "Oth",
        "ConLw",
        "CWD",
        "VWD",
      ],
    },
    saleCondition: {
      label: "Sale Condition",
      options: ["Normal", "Partial", "Family", "Abnorml", "Alloca", "AdjLand"],
    },
  };

  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [prediction, setPrediction] = useState("");

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const sendDataToBackend = async (data: Record<string, number>) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/data",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data; // Return the response for further use
    } catch (error) {
      console.error("Error sending data:", error);
      throw new Error("Failed to send data to the backend.");
    }
  };

  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      return response.data; // Return fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data from the backend.");
    }
  };

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const data = await fetchDataFromBackend();
        console.log("Fetched Data:", data);

        // Optionally set some state with the fetched data
        setPrediction(data.prediction); // Assuming the response has a 'prediction' field
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    getInitialData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Collected Data:", formData);

    try {
      const response = await sendDataToBackend(formData);
      console.log("Response from server:", response);

      // Assume the response contains the prediction
      setPrediction(response.prediction);

      alert(
        "Data sent successfully! Check the console for the server response.",
      );
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending data.");
    }

    try {
      await sendDataToBackend(formData); // Send form data first
      const fetchedData = await fetchDataFromBackend(); // Fetch updated data
      setPrediction(fetchedData.prediction); // Update prediction from fetched data
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    // <div className="mx-7 mb-10 mt-10 w-full space-y-4 rounded-lg border p-4 shadow-lg">
    //   <h1 className="mb-6 justify-self-center text-xl font-bold">
    //     House Information
    //   </h1>
    //   <div className="mx-auto flex items-center justify-center">
    //     <form
    //       onSubmit={handleSubmit}
    //       className="flex w-full flex-col space-y-2"
    //     >
    //       {/* Input fields */}
    //       <div>
    //         <div className="grid grid-cols-5 place-items-center gap-2">
    //           {inputFields.map(({ label, inputField }) => (
    //             <div key={inputField}>
    //               <Input
    //                 label={label}
    //                 value={formData[inputField] || ""}
    //                 onChange={(value) => handleInputChange(inputField, value)}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       {/* Category inputs */}
    //       <div>
    //         <div className="mt-6 grid grid-cols-5 place-items-center gap-2">
    //           {Object.entries(categories).map(([key, { label, options }]) => (
    //             <div key={key}>
    //               <CategoryInput
    //                 label={label}
    //                 options={options}
    //                 selectedOption={(formData[key] as string) || ""}
    //                 onSelect={(value) => handleCategoryChange(key, value)}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-center">
    //         <button
    //           type="submit"
    //           className="mt-6 justify-self-center rounded-md bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         >
    //           Predict
    //         </button>
    //       </div>
    //       <p>
    //         Predicted House's Price:{" "}
    //         {prediction !== null ? `$${prediction}` : "N/A"}
    //       </p>
    //     </form>
    //   </div>
    // </div>
    // <div className="container mx-auto space-y-8 rounded-lg bg-gray-100 p-6 shadow-lg">
    //   <h1 className="text-center text-2xl font-bold text-blue-700">
    //     House Information
    //   </h1>
    //   <form onSubmit={handleSubmit} className="space-y-8">
    //     {/* Numeric Input Section */}
    //     <div className="rounded-lg bg-white p-6 shadow-md">
    //       <h2 className="mb-4 text-lg font-semibold text-blue-600">
    //         Property Details
    //       </h2>
    //       <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
    //         {inputFields.map(({ label, inputField }) => (
    //           <div key={inputField}>
    //             <Input
    //               label={label}
    //               value={formData[inputField] || ""}
    //               onChange={(value) => handleInputChange(inputField, value)}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Category Input Section */}
    //     <div className="rounded-lg bg-white p-6 shadow-md">
    //       <h2 className="mb-4 text-lg font-semibold text-blue-600">
    //         Category Selection
    //       </h2>
    //       <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
    //         {Object.entries(categories).map(([key, { label, options }]) => (
    //           <div key={key}>
    //             <CategoryInput
    //               label={label}
    //               options={options}
    //               selectedOption={(formData[key] as string) || ""}
    //               onSelect={(value) => handleCategoryChange(key, value)}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Submit and Prediction Section */}
    //     <div className="text-center">
    //       <button
    //         type="submit"
    //         className="rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 font-medium text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       >
    //         Predict
    //       </button>
    //     </div>
    //   </form>
    //   {prediction !== null && (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50 backdrop-blur-sm">
    //       <div className="relative w-11/12 max-w-md scale-105 transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-blue-50 p-8 shadow-2xl transition-transform">
    //         <button
    //           onClick={() => setPrediction(null)}
    //           className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none"
    //         >
    //           <span className="sr-only">Close</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 text-gray-600"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //         <h2 className="mb-4 text-center text-3xl font-bold text-blue-600">
    //           Predicted Price
    //         </h2>
    //         <p className="text-center text-4xl font-extrabold text-green-700 drop-shadow-lg">
    //           ${prediction}
    //         </p>
    //         <div className="mt-6 flex justify-center">
    //           <button
    //             onClick={() => setPrediction(null)}
    //             className="rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
    //           >
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    // <div className="container mx-auto space-y-8 rounded-lg bg-gray-50 p-8 shadow-2xl">
    //   <h1 className="text-center text-3xl font-extrabold text-blue-800 drop-shadow-sm">
    //     House Information
    //   </h1>
    //   <form onSubmit={handleSubmit} className="space-y-8">
    //     {/* Numeric Input Section */}
    //     <div className="rounded-lg bg-white p-6 shadow-lg">
    //       <h2 className="mb-4 text-lg font-semibold text-blue-600">
    //         Property Details
    //       </h2>
    //       <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
    //         {inputFields.map(({ label, inputField }) => (
    //           <div key={inputField}>
    //             <Input
    //               label={label}
    //               value={formData[inputField] || ""}
    //               onChange={(value) => handleInputChange(inputField, value)}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Category Input Section */}
    //     <div className="rounded-lg bg-white p-6 shadow-lg">
    //       <h2 className="mb-4 text-lg font-semibold text-blue-600">
    //         Category Selection
    //       </h2>
    //       <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
    //         {Object.entries(categories).map(([key, { label, options }]) => (
    //           <div key={key}>
    //             <CategoryInput
    //               label={label}
    //               options={options}
    //               selectedOption={(formData[key] as string) || ""}
    //               onSelect={(value) => handleCategoryChange(key, value)}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Submit and Prediction Section */}
    //     <div className="text-center">
    //       <button
    //         type="submit"
    //         className="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
    //       >
    //         Predict
    //       </button>
    //     </div>
    //   </form>
    //   {prediction !== null && (
    //     <div className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-md">
    //       <div className="relative w-11/12 max-w-lg scale-105 transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-blue-50 p-8 shadow-2xl transition-transform">
    //         {/* Close Button */}
    //         <button
    //           onClick={() => setPrediction(null)}
    //           className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none"
    //         >
    //           <span className="sr-only">Close</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 text-gray-600"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //         {/* Modal Content */}
    //         <h2 className="mb-4 text-center text-4xl font-extrabold text-blue-700">
    //           Predicted Price
    //         </h2>
    //         <p className="text-center text-5xl font-black text-green-700 drop-shadow-lg">
    //           ${prediction}
    //         </p>
    //         <div className="mt-8 flex justify-center">
    //           <button
    //             onClick={() => setPrediction(null)}
    //             className="rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-8 py-3 text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
    //           >
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="bg-gradient-to-br from-blue-100 via-white to-green-100 py-12">
      <div className="container mx-auto space-y-8 rounded-lg bg-white/90 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="text-center text-4xl font-extrabold text-blue-800 drop-shadow-sm">
          Predict Your House Price
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Numeric Input Section */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-blue-600">
              Property Details
            </h2>
            <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
              {inputFields.map(({ label, inputField }) => (
                <div key={inputField}>
                  <Input
                    label={label}
                    value={formData[inputField] || ""}
                    onChange={(value) => handleInputChange(inputField, value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Category Input Section */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-blue-600">
              Category Selection
            </h2>
            <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
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
              className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              Predict
            </button>
          </div>
        </form>
        {/* {prediction !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-md">
            <div className="relative w-11/12 max-w-lg scale-105 transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-blue-50 p-8 shadow-2xl transition-transform">
              <button
                onClick={() => setPrediction(null)}
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
              <h2 className="mb-4 text-center text-3xl font-bold text-blue-600">
                Predicted Price
              </h2>
              <p className="text-center text-4xl font-extrabold text-green-700 drop-shadow-lg">
                ${prediction}
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setPrediction(null)}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )} */}
        {prediction !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-md">
            <div className="relative w-full max-w-4xl scale-110 transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-blue-50 p-12 shadow-2xl transition-transform">
              <button
                onClick={() => setPrediction(null)}
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
              <h2 className="mb-6 text-center text-4xl font-bold text-blue-600">
                Predicted Price
              </h2>
              <p className="text-center text-5xl font-extrabold text-green-700 drop-shadow-lg">
                ${prediction}
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setPrediction(null)}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-10 py-5 text-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}  
      </div>
    </div>
  );
};

export default MainForm;