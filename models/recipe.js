var { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    recipeName: { type: String, required: [true, "Please enter Recipe Name"] },
    description: { type: String, required: [true, "Please enter Description"] },
    ingredients: {
      type: [String],
      required: [true, "Please enter ingredient"],
    },
    instructions: {
      type: String,
      required: [true, "Please enter Instructions for the recipe"],
    },
    image: { type: String },
    is_veg: { type: Boolean, default: null },
    userId: { type: String },
    userName: { type: String },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
    comments: [
      {
        userId: { type: String },
        userName: { type: String },
        comment: { type: String },
        likes: { type: [String], default: [] },
        dislikes: { type: [String], default: [] },
        commentedAt: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

const RecipeDetails = model("recipe", recipeSchema);

module.exports = { RecipeDetails };
