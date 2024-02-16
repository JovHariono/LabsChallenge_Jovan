
/**
 * These naming rules follow the following pattern:
 * 
 *  BarangValidator<YourValidationPurpose>
 * 
 * For example:
 *  const BarangValidationEmailExist = (value, { req }) => {}
 **/

const BarangValidator = (value, { req }) => {
  // Your validation here
  return value;
};

const hargaJualValidator = (value, { req }) => {
  if(value < req.body.hargaBeli){
    throw new Error("Harga jual harus lebih besar dari harga beli")
  }
  return value;
}

module.exports = {
  BarangValidator,
  hargaJualValidator
};
