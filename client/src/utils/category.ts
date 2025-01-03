
export const  categories = {
    msZoning: {
        label: "Phân loại khu vực",
        options: [
            { value: "RL", label: "Nhà ở thấp tầng" },
            { value: "RH", label: "Nhà ở cao tầng" },
            { value: "FV", label: "Làng nổi" },
            { value: "RM", label: "Nhà ở trung tầng" },
            { value: "C (all)", label: "Thương mại" },
        ],
    },
    street: {
        label: "Loại đường",
        options: [
            { label: "Đường nhựa", value: "Pave" },
            { label: "Đường sỏi", value: "Grvl" }
        ]
    },
    alley: {
        label: "Loại đường hẻm",
        options: [
            { value: "Pave", label: "Đường nhựa" },
            { value: "Grvl", label: "Đường sỏi" }
        ]
    },
    lotShape: {
        label: "Hình dạng mảnh đất",
        options: [
            { value: "IR1", label: "Hình dạng IR1" },
            { value: "Reg", label: "Hình dạng Reg" },
            { value: "IR2", label: "Hình dạng IR2" },
            { value: "IR3", label: "Hình dạng IR3" }
        ]
    },
    landContour: {
        label: "Địa hình mảnh đất",
        options: [
            { value: "Lvl", label: "Bằng phẳng" },
            { value: "HLS", label: "Dốc nhẹ" },
            { value: "Bnk", label: "Bờ vực" },
            { value: "Low", label: "Thấp" }
        ]
    },
    utilities: {
        label: "Tiện ích có sẵn",
        options: [
            { value: "AllPub", label: "Tất cả các tiện ích" },
            { value: "NoSewr", label: "Không có cống" },
            { value: "NoSeWa", label: "Không có nước sạch" }
        ]
    },
    lotConfig: {
        label: "Cấu hình mảnh đất",
        options: [
            { value: "Corner", label: "Góc" },
            { value: "Inside", label: "Bên trong" },
            { value: "CulDSac", label: "Cuối hẻm" },
            { value: "FR2", label: "FR2" },
            { value: "FR3", label: "FR3" }
        ]
    },
    landSlope: {
        label: "Dốc của mảnh đất",
        options: [
            { value: "Gtl", label: "Dốc nhẹ" },
            { value: "Mod", label: "Dốc vừa" },
            { value: "Sev", label: "Dốc cao" }
        ]
    },
    neighborhood: {
        label: "Khu vực lân cận",
        options: [
            { value: "NAmes", label: "NAmes" },
            { value: "Gilbert", label: "Gilbert" },
            { value: "StoneBr", label: "StoneBr" },
            { value: "NWAmes", label: "NWAmes" },
            { value: "Somerst", label: "Somerst" },
            { value: "BrDale", label: "BrDale" },
            { value: "NPkVill", label: "NPkVill" },
            { value: "NridgHt", label: "NridgHt" },
            { value: "Blmngtn", label: "Blmngtn" },
            { value: "NoRidge", label: "NoRidge" },
            { value: "SawyerW", label: "SawyerW" },
            { value: "Sawyer", label: "Sawyer" },
            { value: "Greens", label: "Greens" },
            { value: "BrkSide", label: "BrkSide" },
            { value: "OldTown", label: "OldTown" },
            { value: "IDOTRR", label: "IDOTRR" },
            { value: "ClearCr", label: "ClearCr" },
            { value: "SWISU", label: "SWISU" },
            { value: "Edwards", label: "Edwards" },
            { value: "CollgCr", label: "CollgCr" },
            { value: "Crawfor", label: "Crawfor" },
            { value: "Blueste", label: "Blueste" },
            { value: "Mitchel", label: "Mitchel" },
            { value: "Timber", label: "Timber" },
            { value: "MeadowV", label: "MeadowV" },
            { value: "Veenker", label: "Veenker" },
            { value: "GrnHill", label: "GrnHill" },
            { value: "Landmrk", label: "Landmrk" }
        ]
    },
    condition1: {
        label: "Điều kiện chính",
        options: [
            { value: "Norm", label: "Bình thường" },
            { value: "Feedr", label: "Đường dẫn" },
            { value: "PosN", label: "Vị trí N" },
            { value: "RRNe", label: "RRNe" },
            { value: "RRAe", label: "RRAe" },
            { value: "Artery", label: "Đại lộ" },
            { value: "PosA", label: "Vị trí A" },
            { value: "RRAn", label: "RRAn" },
            { value: "RRNn", label: "RRNn" }
        ]
    },
    condition2: {
        label: "Điều kiện phụ",
        options: [
            { value: "Norm", label: "Bình thường" },
            { value: "Feedr", label: "Đường dẫn" },
            { value: "PosA", label: "Vị trí A" },
            { value: "PosN", label: "Vị trí N" },
            { value: "Artery", label: "Đại lộ" },
            { value: "RRNn", label: "RRNn" },
            { value: "RRAe", label: "RRAe" },
            { value: "RRAn", label: "RRAn" }
        ]
    },
    bldgType: {
        label: "Loại công trình",
        options: [
            { value: "1Fam", label: "Nhà đơn lập" },
            { value: "TwnhsE", label: "Nhà liên kế (Mặt tiền)" },
            { value: "Twnhs", label: "Nhà liên kế" },
            { value: "Duplex", label: "Nhà đôi" },
            { value: "2fmCon", label: "Nhà 2 gia đình" }
        ]
    },
    houseStyle: {
        label: "Phong cách nhà",
        options: [
            { value: "1Story", label: "Nhà 1 tầng" },
            { value: "2Story", label: "Nhà 2 tầng" },
            { value: "1.5Fin", label: "Nhà 1,5 tầng hoàn thiện" },
            { value: "SFoyer", label: "Nhà có sảnh" },
            { value: "SLvl", label: "Nhà cấp thấp" },
            { value: "2.5Unf", label: "Nhà 2.5 tầng chưa hoàn thiện" },
            { value: "1.5Unf", label: "Nhà 1.5 tầng chưa hoàn thiện" },
            { value: "2.5Fin", label: "Nhà 2.5 tầng hoàn thiện" }
        ]
    }, roofStyle: {
        label: "Loại mái",
        options: [
            { value: "Hip", label: "Mái vòm" },
            { value: "Gable", label: "Mái nhà hình chóp" },
            { value: "Mansard", label: "Mái Mansard" },
            { value: "Gambrel", label: "Mái Gambrel" },
            { value: "Shed", label: "Mái trần" },
            { value: "Flat", label: "Mái phẳng" }
        ]
    },
    roofMatl: {
        label: "Vật liệu mái",
        options: [
            { value: "CompShg", label: "Lợp mái tôn hợp kim" },
            { value: "WdShake", label: "Gỗ vỡ" },
            { value: "Tar&Grv", label: "Mái nhựa đường và sỏi" },
            { value: "WdShngl", label: "Gỗ lát mái" },
            { value: "Membran", label: "Mái màng" },
            { value: "ClyTile", label: "Ngói đất sét" },
            { value: "Roll", label: "Lợp mái cuộn" },
            { value: "Metal", label: "Mái kim loại" }
        ]
    },
    exterior1st: {
        label: "Vật liệu ngoại thất chính",
        options: [
            { value: "BrkFace", label: "Gạch mặt tiền" },
            { value: "VinylSd", label: "Mặt ngoài nhựa Vinyl" },
            { value: "Wd Sdng", label: "Mặt ngoài gỗ" },
            { value: "CemntBd", label: "Mặt ngoài xi măng" },
            { value: "HdBoard", label: "Mặt ngoài bảng ván" },
            { value: "Plywood", label: "Ván ép" },
            { value: "MetalSd", label: "Mặt ngoài kim loại" },
            { value: "AsbShng", label: "Mặt ngoài amiăng" },
            { value: "WdShing", label: "Mặt ngoài gỗ lợp" },
            { value: "Stucco", label: "Mặt ngoài thạch cao" },
            { value: "AsphShn", label: "Mặt ngoài nhựa đường" },
            { value: "BrkComm", label: "Gạch công nghiệp" },
            { value: "CBlock", label: "Bê tông cốt liệu" },
            { value: "PreCast", label: "Vật liệu đúc sẵn" },
            { value: "Stone", label: "Đá" },
            { value: "ImStucc", label: "Thạch cao cải tiến" }
        ]
    },
    exterior2nd: {
        label: "Vật liệu ngoại thất phụ",
        options: [
            { value: "Plywood", label: "Ván ép" },
            { value: "VinylSd", label: "Mặt ngoài nhựa Vinyl" },
            { value: "Wd Sdng", label: "Mặt ngoài gỗ" },
            { value: "BrkFace", label: "Gạch mặt tiền" },
            { value: "CmentBd", label: "Mặt ngoài xi măng" },
            { value: "HdBoard", label: "Mặt ngoài bảng ván" },
            { value: "Wd Shng", label: "Mặt ngoài gỗ lợp" },
            { value: "MetalSd", label: "Mặt ngoài kim loại" },
            { value: "ImStucc", label: "Thạch cao cải tiến" },
            { value: "Brk Cmn", label: "Gạch công nghiệp" },
            { value: "AsbShng", label: "Mặt ngoài amiăng" },
            { value: "Stucco", label: "Mặt ngoài thạch cao" },
            { value: "AsphShn", label: "Mặt ngoài nhựa đường" },
            { value: "CBlock", label: "Bê tông cốt liệu" },
            { value: "Stone", label: "Đá" },
            { value: "PreCast", label: "Vật liệu đúc sẵn" },
            { value: "Other", label: "Khác" }
        ]
    },
    masVnrType: {
        label: "Loại vật liệu gạch ốp",
        options: [
            { value: "Stone", label: "Đá" },
            { value: "BrkFace", label: "Gạch mặt tiền" },
            { value: "BrkCmn", label: "Gạch công nghiệp" },
            { value: "CBlock", label: "Bê tông cốt liệu" }
        ]
    },
    exterQual: {
        label: "Chất lượng ngoại thất",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Gd", label: "Tốt" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Fa", label: "Kém" }
        ]
    },
    exterCond: {
        label: "Tình trạng ngoại thất",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Gd", label: "Tốt" },
            { value: "Fa", label: "Kém" },
            { value: "Po", label: "Kém tệ" },
            { value: "Ex", label: "Xuất sắc" }
        ]
    },
    foundation: {
        label: "Loại nền móng",
        options: [
            { value: "CBlock", label: "Bê tông cốt liệu" },
            { value: "PConc", label: "Bê tông đúc sẵn" },
            { value: "Wood", label: "Gỗ" },
            { value: "BrkTil", label: "Gạch đá" },
            { value: "Slab", label: "Móng bệ" },
            { value: "Stone", label: "Đá" }
        ]
    },
    bsmtQual: {
        label: "Chất lượng tầng hầm",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Gd", label: "Tốt" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Fa", label: "Kém" },
            { value: "Po", label: "Rất kém" }
        ]
    },
    bsmtCond: {
        label: "Tình trạng tầng hầm",
        options: [
            { value: "Gd", label: "Tốt" },
            { value: "TA", label: "Thông thường" },
            { value: "Po", label: "Rất kém" },
            { value: "Fa", label: "Kém" },
            { value: "Ex", label: "Xuất sắc" }
        ]
    },
    bsmtExposure: {
        label: "Mức độ tiếp xúc của tầng hầm",
        options: [
            { value: "Gd", label: "Tốt" },
            { value: "No", label: "Không có" },
            { value: "Mn", label: "Một phần" },
            { value: "Av", label: "Đầy đủ" }
        ]
    },
    bsmtFinType1: {
        label: "Loại hoàn thiện tầng hầm 1",
        options: [
            { value: "BLQ", label: "Phòng tắm" },
            { value: "Rec", label: "Phòng giải trí" },
            { value: "ALQ", label: "Phòng làm việc" },
            { value: "GLQ", label: "Phòng khách" },
            { value: "Unf", label: "Chưa hoàn thiện" },
            { value: "LwQ", label: "Phòng ngủ thấp" }
        ]
    },
    bsmtFinType2: {
        label: "Loại hoàn thiện tầng hầm 2",
        options: [
            { value: "Unf", label: "Chưa hoàn thiện" },
            { value: "LwQ", label: "Phòng ngủ thấp" },
            { value: "BLQ", label: "Phòng tắm" },
            { value: "Rec", label: "Phòng giải trí" },
            { value: "GLQ", label: "Phòng khách" },
            { value: "ALQ", label: "Phòng làm việc" }
        ]
    },
    heating: {
        label: "Loại hệ thống sưởi",
        options: [
            { value: "GasA", label: "Sưởi gas" },
            { value: "GasW", label: "Sưởi gas với nước" },
            { value: "Grav", label: "Sưởi bằng trọng lực" },
            { value: "Wall", label: "Sưởi bằng tường" },
            { value: "Floor", label: "Sưởi bằng sàn" },
            { value: "OthW", label: "Hệ thống khác" }
        ]
    },
    heatingQC: {
        label: "Chất lượng hệ thống sưởi",
        options: [
            { value: "Fa", label: "Kém" },
            { value: "TA", label: "Thông thường" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Gd", label: "Tốt" },
            { value: "Po", label: "Rất kém" }
        ]
    },
    centralAir: {
        label: "Điều hòa không khí trung tâm",
        options: [
            { value: "Y", label: "Có" },
            { value: "N", label: "Không" }
        ]
    },
    electrical: {
        label: "Loại hệ thống điện",
        options: [
            { value: "SBrkr", label: "Bảng điện" },
            { value: "FuseA", label: "Cầu dao" },
            { value: "FuseF", label: "Cầu dao pha" },
            { value: "FuseP", label: "Cầu dao pha chính" },
            { value: "Mix", label: "Hỗn hợp" }
        ]
    },
    kitchenQual: {
        label: "Chất lượng nhà bếp",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Gd", label: "Tốt" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Fa", label: "Kém" },
            { value: "Po", label: "Rất kém" }
        ]
    },
    functional: {
        label: "Chức năng tổng thể",
        options: [
            { value: "Typ", label: "Thông thường" },
            { value: "Mod", label: "Hiện đại" },
            { value: "Min1", label: "Tối thiểu 1" },
            { value: "Min2", label: "Tối thiểu 2" },
            { value: "Maj1", label: "Quan trọng 1" },
            { value: "Maj2", label: "Quan trọng 2" },
            { value: "Sev", label: "Nghiêm trọng" },
            { value: "Sal", label: "Để bán" }
        ]
    },
    fireplaceQu: {
        label: "Chất lượng lò sưởi",
        options: [
            { value: "Gd", label: "Tốt" },
            { value: "TA", label: "Thông thường" },
            { value: "Po", label: "Rất kém" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Fa", label: "Kém" }
        ]
    },
    garageType: {
        label: "Loại gara",
        options: [
            { value: "Attchd", label: "Gara gắn liền" },
            { value: "BuiltIn", label: "Gara tích hợp" },
            { value: "Basment", label: "Gara tầng hầm" },
            { value: "Detchd", label: "Gara riêng biệt" },
            { value: "CarPort", label: "Cổng xe" },
            { value: "2Types", label: "Hai loại" }
        ]
    },
    garageFinish: {
        label: "Hoàn thiện gara",
        options: [
            { value: "Fin", label: "Hoàn thiện" },
            { value: "Unf", label: "Chưa hoàn thiện" },
            { value: "RFn", label: "Hoàn thiện một phần" }
        ]
    },
    garageQual: {
        label: "Chất lượng gara",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Fa", label: "Kém" },
            { value: "Gd", label: "Tốt" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Po", label: "Rất kém" }
        ]
    },
    garageCond: {
        label: "Tình trạng gara",
        options: [
            { value: "TA", label: "Thông thường" },
            { value: "Fa", label: "Kém" },
            { value: "Gd", label: "Tốt" },
            { value: "Ex", label: "Xuất sắc" },
            { value: "Po", label: "Rất kém" }
        ]
    },
    pavedDrive: {
        label: "Đường lái xe lát gạch",
        options: [
            { value: "P", label: "Có" },
            { value: "Y", label: "Có" },
            { value: "N", label: "Không" }
        ]
    },
    poolQC: {
        label: "Chất lượng hồ bơi",
        options: [
            { value: "Ex", label: "Xuất sắc" },
            { value: "Gd", label: "Tốt" },
            { value: "TA", label: "Thông thường" },
            { value: "Fa", label: "Kém" }
        ]
    },
    fence: {
        label: "Loại hàng rào",
        options: [
            { value: "MnPrv", label: "Hàng rào riêng" },
            { value: "GdPrv", label: "Hàng rào tốt" },
            { value: "GdWo", label: "Hàng rào không tốt" },
            { value: "MnWw", label: "Hàng rào tồi" }
        ]
    },
    miscFeature: {
        label: "Các tính năng khác",
        options: [
            { value: "Gar2", label: "Gara 2" },
            { value: "Shed", label: "Nhà kho" },
            { value: "Othr", label: "Khác" },
            { value: "Elev", label: "Thang máy" },
            { value: "TenC", label: "Cho thuê" }
        ]
    },
    saleType: {
        label: "Loại giao dịch",
        options: [
            { value: "WD", label: "Bán thông thường" },
            { value: "New", label: "Mới" },
            { value: "COD", label: "Tiền mặt khi giao hàng" },
            { value: "ConLI", label: "Công trình cải tạo" },
            { value: "Con", label: "Xây dựng" },
            { value: "ConLD", label: "Công trình cải tạo lâu dài" },
            { value: "Oth", label: "Khác" },
            { value: "ConLw", label: "Cải tạo nhẹ" },
            { value: "CWD", label: "Bán đất chưa phát triển" },
            { value: "VWD", label: "Bán đất phát triển" }
        ]
    },
    saleCondition: {
        label: "Điều kiện giao dịch",
        options: [
            { value: "Normal", label: "Thông thường" },
            { value: "Partial", label: "Một phần" },
            { value: "Family", label: "Gia đình" },
            { value: "Abnorml", label: "Bất thường" },
            { value: "Alloca", label: "Phân bổ" },
            { value: "AdjLand", label: "Đất liền kề" }
        ]
    }
}

  // const categories = {
  //   msZoning: {
  //     label: "Zoning Classification",
  //     options: ["RL", "RH", "FV", "RM", "C (all)", "I (all)", "A (agr)"],
  //   },
  //   street: {
  //     label: "Type of Street Access",
  //     options: ["Pave", "Grvl"],
  //   },
  //   alley: {
  //     label: "Type of Alley Access",
  //     options: ["Pave", "Grvl"],
  //   },
  //   lotShape: {
  //     label: "Shape of the Lot",
  //     options: ["IR1", "Reg", "IR2", "IR3"],
  //   },
  //   landContour: {
  //     label: "Land Topography",
  //     options: ["Lvl", "HLS", "Bnk", "Low"],
  //   },
  //   utilities: {
  //     label: "Available Utilities",
  //     options: ["AllPub", "NoSewr", "NoSeWa"],
  //   },
  //   lotConfig: {
  //     label: "Lot Configuration",
  //     options: ["Corner", "Inside", "CulDSac", "FR2", "FR3"],
  //   },
  //   landSlope: {
  //     label: "Slope of the Land",
  //     options: ["Gtl", "Mod", "Sev"],
  //   },
  //   neighborhood: {
  //     label: "Neighborhood",
  //     options: [
  //       "NAmes",
  //       "Gilbert",
  //       "StoneBr",
  //       "NWAmes",
  //       "Somerst",
  //       "BrDale",
  //       "NPkVill",
  //       "NridgHt",
  //       "Blmngtn",
  //       "NoRidge",
  //       "SawyerW",
  //       "Sawyer",
  //       "Greens",
  //       "BrkSide",
  //       "OldTown",
  //       "IDOTRR",
  //       "ClearCr",
  //       "SWISU",
  //       "Edwards",
  //       "CollgCr",
  //       "Crawfor",
  //       "Blueste",
  //       "Mitchel",
  //       "Timber",
  //       "MeadowV",
  //       "Veenker",
  //       "GrnHill",
  //       "Landmrk",
  //     ],
  //   },
  //   condition1: {
  //     label: "Primary Condition",
  //     options: [
  //       "Norm",
  //       "Feedr",
  //       "PosN",
  //       "RRNe",
  //       "RRAe",
  //       "Artery",
  //       "PosA",
  //       "RRAn",
  //       "RRNn",
  //     ],
  //   },
  //   condition2: {
  //     label: "Secondary Condition",
  //     options: [
  //       "Norm",
  //       "Feedr",
  //       "PosA",
  //       "PosN",
  //       "Artery",
  //       "RRNn",
  //       "RRAe",
  //       "RRAn",
  //     ],
  //   },
  //   bldgType: {
  //     label: "Building Type",
  //     options: ["1Fam", "TwnhsE", "Twnhs", "Duplex", "2fmCon"],
  //   },
  //   houseStyle: {
  //     label: "House Style",
  //     options: [
  //       "1Story",
  //       "2Story",
  //       "1.5Fin",
  //       "SFoyer",
  //       "SLvl",
  //       "2.5Unf",
  //       "1.5Unf",
  //       "2.5Fin",
  //     ],
  //   },
  //   roofStyle: {
  //     label: "Roof Type",
  //     options: ["Hip", "Gable", "Mansard", "Gambrel", "Shed", "Flat"],
  //   },
  //   roofMatl: {
  //     label: "Roof Material",
  //     options: [
  //       "CompShg",
  //       "WdShake",
  //       "Tar&Grv",
  //       "WdShngl",
  //       "Membran",
  //       "ClyTile",
  //       "Roll",
  //       "Metal",
  //     ],
  //   },
  //   exterior1st: {
  //     label: "Primary Exterior Material",
  //     options: [
  //       "BrkFace",
  //       "VinylSd",
  //       "Wd Sdng",
  //       "CemntBd",
  //       "HdBoard",
  //       "Plywood",
  //       "MetalSd",
  //       "AsbShng",
  //       "WdShing",
  //       "Stucco",
  //       "AsphShn",
  //       "BrkComm",
  //       "CBlock",
  //       "PreCast",
  //       "Stone",
  //       "ImStucc",
  //     ],
  //   },
  //   exterior2nd: {
  //     label: "Secondary Exterior Material",
  //     options: [
  //       "Plywood",
  //       "VinylSd",
  //       "Wd Sdng",
  //       "BrkFace",
  //       "CmentBd",
  //       "HdBoard",
  //       "Wd Shng",
  //       "MetalSd",
  //       "ImStucc",
  //       "Brk Cmn",
  //       "AsbShng",
  //       "Stucco",
  //       "AsphShn",
  //       "CBlock",
  //       "Stone",
  //       "PreCast",
  //       "Other",
  //     ],
  //   },
  //   masVnrType: {
  //     label: "Masonry Veneer Type",
  //     options: ["Stone", "BrkFace", "BrkCmn", "CBlock"],
  //   },
  //   exterQual: {
  //     label: "Exterior Quality",
  //     options: ["TA", "Gd", "Ex", "Fa"],
  //   },
  //   exterCond: {
  //     label: "Exterior Condition",
  //     options: ["TA", "Gd", "Fa", "Po", "Ex"],
  //   },
  //   foundation: {
  //     label: "Type of Foundation",
  //     options: ["CBlock", "PConc", "Wood", "BrkTil", "Slab", "Stone"],
  //   },
  //   bsmtQual: {
  //     label: "Basement Quality",
  //     options: ["TA", "Gd", "Ex", "Fa", "Po"],
  //   },
  //   bsmtCond: {
  //     label: "Basement Condition",
  //     options: ["Gd", "TA", "Po", "Fa", "Ex"],
  //   },
  //   bsmtExposure: {
  //     label: "Basement Exposure",
  //     options: ["Gd", "No", "Mn", "Av"],
  //   },
  //   bsmtFinType1: {
  //     label: "Finished Basement Type 1",
  //     options: ["BLQ", "Rec", "ALQ", "GLQ", "Unf", "LwQ"],
  //   },
  //   bsmtFinType2: {
  //     label: "Finished Basement Type 2",
  //     options: ["Unf", "LwQ", "BLQ", "Rec", "GLQ", "ALQ"],
  //   },
  //   heating: {
  //     label: "Heating System Type",
  //     options: ["GasA", "GasW", "Grav", "Wall", "Floor", "OthW"],
  //   },
  //   heatingQC: {
  //     label: "Heating System Quality",
  //     options: ["Fa", "TA", "Ex", "Gd", "Po"],
  //   },
  //   centralAir: {
  //     label: "Central Air Conditioning",
  //     options: ["Y", "N"],
  //   },
  //   electrical: {
  //     label: "Electrical System Type",
  //     options: ["SBrkr", "FuseA", "FuseF", "FuseP", "Mix"],
  //   },
  //   kitchenQual: {
  //     label: "Kitchen Quality",
  //     options: ["TA", "Gd", "Ex", "Fa", "Po"],
  //   },
  //   functional: {
  //     label: "Overall Functionality",
  //     options: ["Typ", "Mod", "Min1", "Min2", "Maj1", "Maj2", "Sev", "Sal"],
  //   },
  //   fireplaceQu: {
  //     label: "Fireplace Quality",
  //     options: ["Gd", "TA", "Po", "Ex", "Fa"],
  //   },
  //   garageType: {
  //     label: "Garage Type",
  //     options: ["Attchd", "BuiltIn", "Basment", "Detchd", "CarPort", "2Types"],
  //   },
  //   garageFinish: {
  //     label: "Garage Finish",
  //     options: ["Fin", "Unf", "RFn"],
  //   },
  //   garageQual: {
  //     label: "Garage Quality",
  //     options: ["TA", "Fa", "Gd", "Ex", "Po"],
  //   },
  //   garageCond: {
  //     label: "Garage Condition",
  //     options: ["TA", "Fa", "Gd", "Ex", "Po"],
  //   },
  //   pavedDrive: {
  //     label: "Paved Driveway",
  //     options: ["P", "Y", "N"],
  //   },
  //   poolQC: {
  //     label: "Pool Quality",
  //     options: ["Ex", "Gd", "TA", "Fa"],
  //   },
  //   fence: {
  //     label: "Fence Type",
  //     options: ["MnPrv", "GdPrv", "GdWo", "MnWw"],
  //   },
  //   miscFeature: {
  //     label: "Miscellaneous Features",
  //     options: ["Gar2", "Shed", "Othr", "Elev", "TenC"],
  //   },
  //   saleType: {
  //     label: "Sale Type",
  //     options: [
  //       "WD ",
  //       "New",
  //       "COD",
  //       "ConLI",
  //       "Con",
  //       "ConLD",
  //       "Oth",
  //       "ConLw",
  //       "CWD",
  //       "VWD",
  //     ],
  //   },
  //   saleCondition: {
  //     label: "Sale Condition",
  //     options: ["Normal", "Partial", "Family", "Abnorml", "Alloca", "AdjLand"],
  //   },
  // };
