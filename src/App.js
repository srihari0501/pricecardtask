import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const Data = {free:[
    { value: true, text: "Single User" },
    { value: true, text: "50 GB Storage" },
    { value: true, text: "Unlimited Public Projects" },
    { value: true, text: "Community Access" },
    { value: false, text: "Unlimited Private Projects" },
    { value: false, text: "Dedicated Phone Support" },
    { value: false, text: "Free Subdomain" },
    { value: false, text: "Monthly Status Reports" }
  ],
  plus:[
    { value: true, text: "5 Users" },
    { value: true, text: "50 GB Storage" },
    { value: true, text: "Unlimited Public Projects" },
    { value: true, text: "Community Access" },
    { value: true, text: "Unlimited Private Projects" },
    { value: true, text: "Dedicated Phone Support" },
    { value: true, text: "Free Subdomain" },
    { value: false, text: "Monthly Status Reports" }
  ],
  pro:[
    { value: true, text: "Unlimited Users" },
    { value: true, text: "50 GB Storage" },
    { value: true, text: "Unlimited Public Projects" },
    { value: true, text: "Community Access" },
    { value: true, text: "Unlimited Private Projects" },
    { value: true, text: "Dedicated Phone Support" },
    { value: true, text: "Free Subdomain" },
    { value: true, text: "Monthly Status Reports" }
  ]}

  return (
    <div className='container px-5 m-5' style={{ background:'linear-gradient(to right,royalBlue, dodgerBlue, deepSkyBlue)', padding: '25px'}}>
      <div className="row row-cols-lg-3 d-flex justify-content-center flex-wrap ">
        <Card name="FREE" pack="$0/month" Data={Data.free} ></Card>

        <Card name="PLUS" pack="$9/month" Data={Data.plus}></Card>

        <Card name="PRO" pack="$49/month" Data={Data.pro}></Card>
      </div>
    </div>
  );
}

export default App;
