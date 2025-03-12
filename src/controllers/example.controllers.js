import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const exampleControllerLogic = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "Ok", "Example for how to use it."));
});

export { exampleControllerLogic };
