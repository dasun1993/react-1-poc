import axios from "axios";

const api = axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/current.json?key=c9aa0ef75625429abb410031200711&q=",
});

class dataService {
  constructor() {}

  getdata(city:string) {

    return api.get(city+ "/");
  }
}
const Dataservice = new dataService();
export default Dataservice;
