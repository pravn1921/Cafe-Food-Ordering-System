import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: {type: String, required: true},
  streetAddress: {type: String},
  postalCode: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^\d{6}$/.test(value);
      },
      message: props => `${props.value} is not a valid postal code!`
    }
  },
  city: {type: String},
  country: {type: String},
  phone: {
    type: String,
    validate: {
      validator: function(value) {
        return /^\d{10}$/.test(value);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  admin: {type: Boolean, default: false},
}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);