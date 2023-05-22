import axios from "axios"
export const API_URL = process.env.VITE_ENV === "prod" ? "https://crypto-72ks.onrender.com/" : "http://localhost:3001";

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})

export const ETH_WALLETS = ["123RESAASDFHEWQYUI"]
export const BTC_WALLETS = ["SDHJBSAHGWEQTYUI8E7Y"]
export const SOL_WALLETS = ["WESDJHXBVSGFAWQTY8"]
export const CONTACT = "+1234567890"
export const EMAIL = "example@gmail.com"
export const ADDRESS = "1234 Example St, Example, EX 12345"
export const TWITTER = "https://twitter.com/example"
export const FACEBOOK = "https://facebook.com/example"
export const TELEGRAM = "https://t.me/example"
export const DISCORD = "https://discord.gg/example"
export const COMPANY_NAME = "Cryptokingfxtm"

export const ALL_COUNTRIES = ["United States","United Kingdom","United States Virgin Islands","United States Minor Outlying Islands", "Kuwait","Austria","Mayotte","Tunisia","Japan","Guyana","Saint Helena, Ascension and Tristan da Cunha","Saint Martin","Guatemala","Venezuela","French Southern and Antarctic Lands","Cape Verde","Azerbaijan","Guernsey","Kenya","South Sudan","Myanmar","Liechtenstein","Martinique","Australia","Costa Rica","Palestine","Spain","Guinea-Bissau","Åland Islands","Sierra Leone","Philippines","Togo","Russia","Haiti","South Korea","Samoa","Aruba","Afghanistan","Bouvet Island","Bahamas","Georgia","Cayman Islands","North Macedonia","Syria","Hong Kong","Chile","Zimbabwe","Caribbean Netherlands","Netherlands","Canada","Equatorial Guinea","Eswatini","Oman","Heard Island and McDonald Islands","Romania","South Africa","Mozambique","Trinidad and Tobago","Bahrain","Republic of the Congo","Lebanon","Réunion","Estonia","Bangladesh","Ethiopia","Peru","South Georgia","Ecuador","Vatican City","Mauritius","American Samoa","Saint Pierre and Miquelon","Cuba","British Indian Ocean Territory","Vietnam","Benin","Greece","Grenada","Belize","China","Montenegro","Thailand","Guam","Comoros","Laos","Mali","Germany","Suriname","Gambia","Maldives","Tonga","Antigua and Barbuda","Guinea","Curaçao","Panama","Papua New Guinea","New Caledonia","Croatia","Palau","Cambodia","Puerto Rico","French Polynesia","Nicaragua","Colombia","Mauritania","Botswana","Fiji","Latvia","Svalbard and Jan Mayen","Bermuda","Uganda","Bosnia and Herzegovina","Gabon","Chad","Cocos (Keeling) Islands","Kazakhstan","Pitcairn Islands","Guadeloupe","Sudan","Dominica","Qatar","Barbados","Turkey","Denmark","Marshall Islands","Yemen","Antarctica","São Tomé and Príncipe","Turkmenistan","North Korea","Portugal","Eritrea","Gibraltar","Mongolia","Kosovo","Anguilla","Malawi","Tuvalu","Moldova","Brunei","Finland","Ghana","Dominican Republic","Northern Mariana Islands","Czechia","Morocco","Honduras","Israel","Madagascar","Luxembourg","Armenia","Turks and Caicos Islands","Falkland Islands","Angola","Cyprus","Indonesia","Uzbekistan","Burundi","Albania","Saint Barthélemy","Bolivia","Kyrgyzstan","United Arab Emirates","Paraguay","Tanzania","Argentina","Pakistan","Nepal","New Zealand","Switzerland","Norfolk Island","Sweden","Saint Lucia","Uruguay","Mexico","Somalia","Montserrat","Norway","Seychelles","Nauru","Bhutan","Rwanda","Hungary","Slovenia","Sint Maarten","India","French Guiana","Italy","Singapore","Ireland","Andorra","Iceland","Micronesia","Faroe Islands","Saint Kitts and Nevis","Niger","France","Djibouti","Liberia","Taiwan","Jordan","Greenland","Libya","Kiribati","Cook Islands","Lesotho","Monaco","Malaysia","Wallis and Futuna","Saudi Arabia","Bulgaria","Burkina Faso","Brazil","Lithuania","Jersey","Algeria","Solomon Islands","Sri Lanka","San Marino","Nigeria","Slovakia","Cameroon","Namibia","Egypt","Saint Vincent and the Grenadines","Belarus","Ukraine","Christmas Island","Niue","Jamaica","Zambia","Senegal","Belgium","Central African Republic","Iran","Iraq","Timor-Leste","Isle of Man","Macau","El Salvador","Malta","Poland","Serbia","Ivory Coast","Western Sahara","DR Congo","Tajikistan","Vanuatu","Tokelau","British Virgin Islands"]