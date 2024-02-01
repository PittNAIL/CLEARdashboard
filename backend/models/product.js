import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please enter product name"],
//   },
//   description: {
//     type: String,
//     required: [true, "Please enter product description"],
//   },
//   price: {
//     type: Number,
//     required: [true, "Please enter product price"],
//   },
//   images: [
//     {
//       public_id: {
//         type: String,
//       },
//       url: {
//         type: String,
//       },
//     },
//   ],

//   category: {
//     type: String,
//     required: [true, "Please enter product category"],
//     enum: {
//       values: [
//         "Electronics",
//         "Cameras",
//         "Laptops",
//         "Accessories",
//         "Headphones",
//         "Sports",
//       ],
//       message: "Please select correct category",
//     },
//   },
//   seller: {
//     type: String,
//     required: [true, "Please enter product seller"],
//   },
//   stock: {
//     type: Number,
//     required: [true, "Please enter product stock"],
//   },
//   ratings: {
//     type: Number,
//     default: 0,
//   },
//   reviews: [
//     {
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//       },
//       rating: {
//         type: Number,
//         required: true,
//       },
//       comment: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//   ],
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Product ||
//   mongoose.model("Product", productSchema);
_id:{
  type: mongoose.ObjectId, 
  required: false, 
},


_id:{
  type: Object, 
  required: false, 
},
id: {
    type: Number,
    required: true,
  },
  id_addinf: {
    type: String,
    required: false,
  },
  pic1: {
    type: String,
    required: false,
  },
  pic1_addinf: {
    type: String,
    required: false,
  },
  pic2: {
    type: String,
    required: false,
  },
  pic2_addinf: {
    type: String,
    required: false,
  },
  pic3: {
    type: String,
    required: false,
  },
  pic3_addinf: {
    type: String,
    required: false,
  },
  prodName: {
    type: String,
    required: true,
  },
  prodName_addinf: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: true,
  },
  model_addinf: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: true,
  },
  company_addinf: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  link_addinf: {
    type: String,
    required: false,
  },
  phonenum: {
    type: String,
    required: true,
  },
  phonenum_addinf: {
    type: String,
    required: false,
  },
  style: {
    type: String,
    required: true,
  },
  style_addinf: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  color_addinf: {
    type: String,
    required: false,
  },
  reviews: {
    type: String,
    required: true,
  },
  reviews_addinf: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  price_addinf: {
    type: String,
    required: false,
  },
  power: {
    type: String,
    required: true,
  },
  power_addinf: {
    type: String,
    required: false,
  },
  charger: {
    type: String,
    required: true,
  },
  charger_addinf: {
    type: String,
    required: false,
  },
  volume: {
    type: String,
    required: true,
  },
  volume_addinf: {
    type: String,
    required: false,
  },
  finetune: {
    type: String,
    required: true,
  },
  finetune_addinf: {
    type: String,
    required: false,
  },
  app: {
    type: String,
    required: true,
  },
  app_addinf: {
    type: String,
    required: false,
  },
  stream: {
    type: String,
    required: true,
  },
  stream_addinf: {
    type: String,
    required: false,
  },
  remote_cont: {
    type: String,
    required: true,
  },
  remote_cont_addinf: {
    type: String,
    required: false,
  },
  onoff: {
    type: String,
    required: true,
  },
  onoff_addinf: {
    type: String,
    required: false,
  },
  tcoil: {
    type: String,
    required: true,
  },
  tcoil_addinf: {
    type: String,
    required: false,
  },
  accessories: {
    type: String,
    required: true,
  },
  accessories_addinf: {
    type: String,
    required: false,
  },
  water_resis: {
    type: String,
    required: true,
  },
  water_resis_addinf: {
    type: String,
    required: false,
  },
  warranty: {
    type: String,
    required: true,
  },
  warranty_addinf: {
    type: String,
    required: false,
  },
  return: {
    type: String,
    required: true,
  },
  return_addinf: {
    type: String,
    required: false,
  },
  custsuppPrior: {
    type: String,
    required: true,
  },
  custsuppPrior_addinf: {
    type: String,
    required: false,
  },
  custsuppAfter: {
    type: String,
    required: true,
  },
  custsuppAfter_addinf: {
    type: String,
    required: false,
  },
  setuptime: {
    type: String,
    required: true,
  },
  setuptime_addinf: {
    type: String,
    required: false,
  },
  easeofsetup: {
    type: String,
    required: true,
  },
  easeofsetup_addinf: {
    type: String,
    required: false,
  },
  fit: {
    type: String,
    required: true,
  },
  fit_addinf: {
    type: String,
    required: false,
  },
  comfort: {
    type: String,
    required: true,
  },
  comfort_addinf: {
    type: String,
    required: false,
  },
  appearance: {
    type: String,
    required: true,
  },
  appearance_addinf: {
    type: String,
    required: false,
  },
  soundqualSpeech: {
    type: String,
    required: true,
  },
  soundqualSpeech_addinf: {
    type: String,
    required: false,
  },
  soundqualMusic: {
    type: String,
    required: true,
  },
  soundqualMusic_addinf: {
    type: String,
    required: false,
  },
  ADD: {
    type: String,
    required: true,
  },
  ADD_addinf: {
    type: String,
    required: false,
  },
  clearscore: {
    type: String,
    required: true,
  },
  clearscore_addinf: {
    type: String,
    required: false,
  },


  });
  export default mongoose.models.Product || mongoose.model('Product', productSchema); 