// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Home, DollarSign, ArrowRight } from "lucide-react";

// const MainForm = () => {
//   const inputFields = [
//     { label: "MS SubClass", inputField: "msSubClass" },
//     { label: "Lot Frontage", inputField: "lotFrontage" },
//     { label: "Lot Area", inputField: "lotArea" },
//     { label: "Overall Quality", inputField: "overallQual" },
//     { label: "Overall Condition", inputField: "overallCond" },
//     { label: "Year Built", inputField: "yearBuilt" },
//     { label: "Year Remodeled/Added", inputField: "yearRemodAdd" },
//     { label: "Masonry Veneer Area", inputField: "masVnrArea" },
//     { label: "Basement Finished Area 1", inputField: "bsmtFinSF1" },
//     { label: "Basement Finished Area 2", inputField: "bsmtFinSF2" },
//     { label: "Basement Unfinished Area", inputField: "bsmtUnfSF" },
//     { label: "Total Basement Area", inputField: "totalBsmtSF" },
//     { label: "1st Floor Area", inputField: "firstFlrSF" },
//     { label: "2nd Floor Area", inputField: "secondFlrSF" },
//     { label: "Low Quality Finished Area", inputField: "lowQualFinSF" },
//     { label: "Above Ground Living Area", inputField: "grLivArea" },
//     { label: "Basement Full Baths", inputField: "bsmtFullBath" },
//     { label: "Basement Half Baths", inputField: "bsmtHalfBath" },
//     { label: "Full Bathrooms", inputField: "fullBath" },
//     { label: "Half Bathrooms", inputField: "halfBath" },
//     { label: "Bedrooms Above Ground", inputField: "bedroomAbvGr" },
//     { label: "Kitchens Above Ground", inputField: "kitchenAbvGr" },
//     { label: "Total Rooms Above Ground", inputField: "totRmsAbvGrd" },
//     { label: "Fireplaces", inputField: "fireplaces" },
//     { label: "Garage Year Built", inputField: "garageYrBlt" },
//     { label: "Garage Cars", inputField: "garageCars" },
//     { label: "Garage Area", inputField: "garageArea" },
//     { label: "Wood Deck Area", inputField: "woodDeckSF" },
//     { label: "Open Porch Area", inputField: "openPorchSF" },
//     { label: "Enclosed Porch Area", inputField: "enclosedPorch" },
//     { label: "3-Season Porch Area", inputField: "threeSsnPorch" },
//     { label: "Screen Porch Area", inputField: "screenPorch" },
//     { label: "Pool Area", inputField: "poolArea" },
//     { label: "Miscellaneous Value", inputField: "miscVal" },
//     { label: "Month Sold", inputField: "moSold" },
//     { label: "Year Sold", inputField: "yrSold" },
//   ];

//   const categories = {
//     msZoning: {
//       label: "Zoning Classification",
//       options: ["RL", "RH", "FV", "RM", "C (all)", "I (all)", "A (agr)"],
//     },
//     street: {
//       label: "Type of Street Access",
//       options: ["Pave", "Grvl"],
//     },
//     alley: {
//       label: "Type of Alley Access",
//       options: ["Pave", "Grvl"],
//     },
//     lotShape: {
//       label: "Shape of the Lot",
//       options: ["IR1", "Reg", "IR2", "IR3"],
//     },
//     landContour: {
//       label: "Land Topography",
//       options: ["Lvl", "HLS", "Bnk", "Low"],
//     },
//     utilities: {
//       label: "Available Utilities",
//       options: ["AllPub", "NoSewr", "NoSeWa"],
//     },
//     lotConfig: {
//       label: "Lot Configuration",
//       options: ["Corner", "Inside", "CulDSac", "FR2", "FR3"],
//     },
//     landSlope: {
//       label: "Slope of the Land",
//       options: ["Gtl", "Mod", "Sev"],
//     },
//     neighborhood: {
//       label: "Neighborhood",
//       options: [
//         "NAmes", "Gilbert", "StoneBr", "NWAmes", "Somerst", "BrDale",
//         "NPkVill", "NridgHt", "Blmngtn", "NoRidge", "SawyerW",
//         "Sawyer", "Greens", "BrkSide", "OldTown", "IDOTRR",
//         "ClearCr", "SWISU", "Edwards", "CollgCr", "Crawfor",
//         "Blueste", "Mitchel", "Timber", "MeadowV", "Veenker",
//         "GrnHill", "Landmrk"
//       ],
//     },
//     condition1: {
//       label: "Primary Condition",
//       options: ["Norm", "Feedr", "PosN", "RRNe", "RRAe", "Artery", "PosA", "RRAn", "RRNn"],
//     },
//     condition2: {
//       label: "Secondary Condition",
//       options: ["Norm", "Feedr", "PosA", "PosN", "Artery", "RRNn", "RRAe", "RRAn"],
//     },
//     bldgType: {
//       label: "Building Type",
//       options: ["1Fam", "TwnhsE", "Twnhs", "Duplex", "2fmCon"],
//     },
//     houseStyle: {
//       label: "House Style",
//       options: ["1Story", "2Story", "1.5Fin", "SFoyer", "SLvl", "2.5Unf", "1.5Unf", "2.5Fin"],
//     },
//     exterQual: {
//       label: "Exterior Quality",
//       options: ["TA", "Gd", "Ex", "Fa"],
//     },
//     exterCond: {
//       label: "Exterior Condition",
//       options: ["TA", "Gd", "Fa", "Po", "Ex"],
//     },
//     foundation: {
//       label: "Type of Foundation",
//       options: ["CBlock", "PConc", "Wood", "BrkTil", "Slab", "Stone"],
//     },
//     heating: {
//       label: "Heating System Type",
//       options: ["GasA", "GasW", "Grav", "Wall", "Floor", "OthW"],
//     },
//     centralAir: {
//       label: "Central Air Conditioning",
//       options: ["Y", "N"],
//     },
//     electrical: {
//       label: "Electrical System Type",
//       options: ["SBrkr", "FuseA", "FuseF", "FuseP", "Mix"],
//     },
//     functional: {
//       label: "Overall Functionality",
//       options: ["Typ", "Mod", "Min1", "Min2", "Maj1", "Maj2", "Sev", "Sal"],
//     },
//     garageType: {
//       label: "Garage Type",
//       options: ["Attchd", "BuiltIn", "Basment", "Detchd", "CarPort", "2Types"],
//     },
//     garageFinish: {
//       label: "Garage Finish",
//       options: ["Fin", "Unf", "RFn"],
//     },
//     poolQC: {
//       label: "Pool Quality",
//       options: ["Ex", "Gd", "TA", "Fa"],
//     },
//     fence: {
//       label: "Fence Type",
//       options: ["MnPrv", "GdPrv", "GdWo", "MnWw"],
//     },
//     saleType: {
//       label: "Sale Type",
//       options: ["WD", "New", "COD", "ConLI", "Con", "ConLD", "Oth", "ConLw", "CWD", "VWD"],
//     },
//     saleCondition: {
//       label: "Sale Condition",
//       options: ["Normal", "Partial", "Family", "Abnorml", "Alloca", "AdjLand"],
//     },
//   };

//   const [formData, setFormData] = useState({});
//   const [prediction, setPrediction] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/data", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
      
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       setPrediction(data.prediction);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
//       <Card className="mx-auto max-w-7xl shadow-xl">
//         <CardHeader className="space-y-1 border-b bg-gray-50/80 px-6 py-8">
//           <div className="flex items-center justify-center space-x-2">
//             <Home className="h-8 w-8 text-blue-500" />
//             <CardTitle className="text-3xl font-bold text-gray-900">
//               House Price Prediction
//             </CardTitle>
//           </div>
//           <p className="text-center text-gray-500">
//             Enter your house details below to get an estimated price
//           </p>
//         </CardHeader>
        
//         <CardContent className="p-6">
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Numeric Inputs Section */}
//             <div className="rounded-lg border bg-white p-6 shadow-sm">
//               <div className="mb-6 flex items-center space-x-2">
//                 <DollarSign className="h-5 w-5 text-blue-500" />
//                 <h2 className="text-xl font-semibold text-gray-900">Numeric Features</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 {inputFields.map(({ label, inputField }) => (
//                   <div key={inputField} className="space-y-2">
//                     <Label htmlFor={inputField} className="text-sm font-medium text-gray-700">
//                       {label}
//                     </Label>
//                     <Input
//                       id={inputField}
//                       type="number"
//                       placeholder="Enter value"
//                       onChange={(e) => handleInputChange(inputField, e.target.value)}
//                       className="w-full transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Categorical Inputs Section */}
//             <div className="rounded-lg border bg-white p-6 shadow-sm">
//               <h2 className="mb-6 text-xl font-semibold text-gray-900">Categorical Features</h2>
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 {Object.entries(categories).map(([key, { label, options }]) => (
//                   <div key={key} className="space-y-2">
//                     <Label htmlFor={key} className="text-sm font-medium text-gray-700">
//                       {label}
//                     </Label>
//                     <Select onValueChange={(value) => handleInputChange(key, value)}>
//                       <SelectTrigger id={key} className="w-full bg-white">
//                         <SelectValue placeholder="Select..." />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {options.map((option) => (
//                           <SelectItem key={option} value={option}>
//                             {option}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Section */}
//             <div className="space-y-6">
//               <div className="flex justify-center">
//                 <Button
//                   type="submit"
//                   size="lg"
//                   disabled={isLoading}
//                   className="group relative h-12 min-w-[200px] bg-blue-500 text-lg font-semibold hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
//                 >
//                   {isLoading ? (
//                     "Calculating..."
//                   ) : (
//                     <>
//                       Predict Price
//                       <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                     </>
//                   )}
//                 </Button>
//               </div>
              
//               {prediction && (
//                 <div className="mx-auto max-w-md rounded-lg border bg-green-50 p-6 text-center shadow-sm">
//                   <h3 className="text-lg font-medium text-gray-900">Predicted House Price</h3>
//                   <p className="mt-2 text-3xl font-bold text-green-600">
//                     ${Number(prediction).toLocaleString()}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default MainForm;