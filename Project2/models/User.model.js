const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String, 
      required: true
    },

    myEvents: [],
    // avatar: {
    //   type: String,
    //   enum: ['https://preview.redd.it/ht9l2pelsjr51.png?width=552&format=png&auto=webp&s=aeb235be548b69e3476172b087dd39d619789980', 'https://www.dreamstime.com/cute-anime-girl-pixel-image-vector-illustration-image221609492'],
    //   default: "https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
    // },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
    type: String,
    required: true,
    },

    favoritePlace: [],
    gastoIndividual: Number
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("usuarios", userSchema);

module.exports = User;
