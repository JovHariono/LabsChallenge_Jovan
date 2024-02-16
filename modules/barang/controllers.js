
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Barang } = require("./models");

const BarangControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);

    const results = Barang.find();
    return LibPaginationResponse(req, res, results)
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerCreate = async (req, res) => {
  try {
    // Your code here

    const results = await Barang.create(req.cleanedData);
    res.status(201).json(results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "BarangControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerUpdate = async (req, res) => {
  try {
    // Your code here]

    let barang = await Barang.findOne({ _id: req.params.id });
    if(!barang) throw { status: 404, message: "Not Found" }

    await Barang.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData)
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "BarangControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  BarangControllerList,
  BarangControllerCreate,
  BarangControllerDetail,
  BarangControllerUpdate,
  BarangControllerDelete,
};
