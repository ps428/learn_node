/* eslint-disable max-len */
import {check} from 'express-validator';
// const {check} = require('express-validator')

const createUserValidation = [
  check('Name', 'Name is required').not().isEmpty(),
  check('Address.Add1', 'Add1 is required').not().isEmpty(),
  check('Address.Add2', 'Add2 is required').not().isEmpty(),
  check('Address.Add3', 'Add3 is required').not().isEmpty(),
  check('Address.Area', 'Area is required').not().isEmpty(),
  check('Address.City', 'City is required').not().isEmpty(),
  check('Address.State', 'State is required').not().isEmpty(),
  check('Address.Country', 'Country is required').not().isEmpty(),
  check('Address.Pincode', 'A correct numeric Pincode is required').not().isEmpty().isLength({min: 6}).isInt(),
  check('ContactDetails.Mobile', 'Mobile number required of 10 digits').isLength({min: 10, max: 10}).isInt(),
  check('ContactDetails.Email', 'Please enter a valid email id').isEmail().normalizeEmail({gmail_remove_dots: true}),
  check('Picture', 'Please enter a link to your photo').isURL(),
  // no validation needed for user type? not sure...
  check('Username', 'Please enter a unique username').not().isEmpty(),
  check('Password', 'Enter password of atleast 6 characters').isLength({min: 6}),
];

const updateUserValidation = [
//   check('Name', 'Name is required').not().isEmpty(),
//   check('Address.Add1', 'Add1 is required').not().isEmpty(),
//   check('Address.Add2', 'Add2 is required').not().isEmpty(),
//   check('Address.Add3', 'Add3 is required').not().isEmpty(),
//   check('Address.Area', 'Area is required').not().isEmpty(),
//   check('Address.City', 'City is required').not().isEmpty(),
//   check('Address.State', 'State is required').not().isEmpty(),
//   check('Address.Country', 'Country is required').not().isEmpty(),
//   check('Address.Pincode', 'A correct numeric Pincode is required').not().isEmpty().isLength({min: 6}).isInt(),
//   check('ContactDetails.Mobile', 'Mobile number required of 10 digits').isLength({min: 10, max: 10}).isInt(),
//   check('ContactDetails.Email', 'Please enter a valid email id').isEmail().normalizeEmail({gmail_remove_dots: true}),
//   check('Picture', 'Please enter a link to your photo').isURL(),
  // no validation needed for user type? not sure...
];


const logInValidation = [
  check('Username', 'Please enter a unique user id').not().isEmpty(),
  check('Password', 'Enter password of atleast 6 characters').isLength({min: 6}),
];


const changePasswordValidation = [
  check('Username', 'Please enter a unique user id').not().isEmpty(),
  check('OldPassword', 'Enter password of atleast 6 characters').isLength({min: 6}),
  check('NewPassword', 'Enter password of atleast 6 characters').isLength({min: 6}),
];

const deleteValidation = [
  check('Username', 'Please enter a unique user id').not().isEmpty(),
];

export {createUserValidation, updateUserValidation, logInValidation, deleteValidation, changePasswordValidation};
