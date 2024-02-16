
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Pemasok } = require("./models");

const PemasokControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    const results = Pemasok.find();
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerCreate = async (req, res) => {
  try {
    // Your code here
    const results = await Pemasok.create(req.cleanedData)
    res.status(201).json(results)
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PemasokControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let pemasok = await Pemasok.findOne({ _id: req.params.id })
    if(!pemasok) throw { status: 404, message: "Not Found" }

    await Pemasok.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData)
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "PemasokControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PemasokControllerList,
  PemasokControllerCreate,
  PemasokControllerDetail,
  PemasokControllerUpdate,
  PemasokControllerDelete,
};
