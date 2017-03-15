var express = require('express')
var app = express()
var fallback = require('express-history-api-fallback');
var root = __dirname ;
var mysql = require('mysql2');
var fedexAPI = require('shipping-fedex');
var fedex = new fedexAPI({
     environment: 'sandbox', // or live 
     debug: true,
     key: 'H9QJK2uGyKBt2vYH',
     password: 'pcPEGzycQjj3ImOnY5ZXH4pU1',
     account_number: '510087860',
     meter_number: '118778649',
     imperial: true // set to false for metric 
    });



  app.get('/t',function(req,res){
	  
	  var connection = mysql.createConnection({host:'130.18.123.74', user: 'web_user', password: '123456', database: 'loanshark'});
	  connection.query(" SELECT * FROM  images ", function (err, results, fields) {
      res.json(results); // results contains rows returned by server
	  res.end();
	  connection.end();

});
	  
  });
  
  app.get('/ship', function(req,res){
    
    /*Start Shipping Rates 	
   fedex.rates({
    ReturnTransitAndCommit: true,
    CarrierCodes: ['FDXE','FDXG'],
	RequestedShipment: {
      DropoffType: 'REGULAR_PICKUP',
	  //ServiceType: 'FEDEX_GROUND',
	  PackagingType: 'YOUR_PACKAGING',
	  Shipper: {
	    Contact: {
		  PersonName: 'Sender Name',
		  CompanyName: 'Company Name',
		  PhoneNumber: '5555555555'
		},
		Address: {
		  StreetLines: ['Address Line 1'],
		  City: 'Collierville',
		  StateOrProvinceCode: 'TN',
		  PostalCode: '38017',
		  CountryCode: 'US'
		}
	  }, //End Shipper information
	  Recipient: {
	    Contact: {
		  PersonName: 'Recipient Name',
		  CompanyName: 'Company Receipt Name',
		  PhoneNumber: '5555555555'
		},
		Address: {
		  StreetLines: ['Address Line 1'],
		  City: 'Charlotte',
		  StateOrProvinceCode: 'NC',
		  PostalCode: '28202',
		  CountryCode: 'US',
		  Residential: false
		}
	  }, //End Recipient information
	  ShippingChargesPayment: {
	    PaymentType: 'SENDER',
		Payor: {
		  ResponsibleParty: {
		    AccountNumber: fedex.options.account_number
		  }
		}
	  }, //End Payment information
		
	  //Package details and description 
	  PackageCount: '1',
	  RequestedPackageLineItems: {
	    SequenceNumber: 1,
		GroupPackageCount: 1,
		Weight: {
	      Units: 'LB',
		  Value: '50.0'
		},
		Dimensions: {
		  Length: 108,
		  Width: 5,
		  Height: 5,
		  Units: 'IN'
		}
	  }
	}
   }, 
    function(err, value) {
     if(err) {
	   return res.json(err);
	 }
	 res.json(value);
    }
   );End Shipping Rates*/
   
   
 var date = new Date();
fedex.ship({
  RequestedShipment: {
    ShipTimestamp: new Date(date.getTime() + (24*60*60*1000)).toISOString(),
    DropoffType: 'REGULAR_PICKUP',
    ServiceType: 'FEDEX_GROUND',
    PackagingType: 'YOUR_PACKAGING',
    Shipper: {
      Contact: {
        PersonName: 'Sender Name',
        CompanyName: 'Company Name',
        PhoneNumber: '5555555555'
      },
      Address: {
        StreetLines: [
          'Address Line 1'
        ],
        City: 'Collierville',
        StateOrProvinceCode: 'TN',
        PostalCode: '38017',
        CountryCode: 'US'
      }
    },
    Recipient: {
      Contact: {
        PersonName: 'Recipient Name',
        CompanyName: 'Company Receipt Name',
        PhoneNumber: '5555555555'
      },
      Address: {
        StreetLines: [
          'Address Line 1'
        ],
        City: 'Charlotte',
        StateOrProvinceCode: 'NC',
        PostalCode: '28202',
        CountryCode: 'US',
        Residential: false
      }
    },
    ShippingChargesPayment: {
      PaymentType: 'SENDER',
      Payor: {
        ResponsibleParty: {
          AccountNumber: fedex.options.account_number
        }
      }
    },
    LabelSpecification: {
      LabelFormatType: 'COMMON2D',
      ImageType: 'PDF',
      LabelStockType: 'PAPER_4X6'
    },
    PackageCount: '1',
    RequestedPackageLineItems: [{
      SequenceNumber: 1,
      GroupPackageCount: 1,
      Weight: {
        Units: 'LB',
        Value: '50.0'
      },
      Dimensions: {
        Length: 108,
        Width: 5,
        Height: 5,
        Units: 'IN'
      }
    }]
  }
}, function(err, value) {
  if(err) {
    return res.json(err);
  }

  res.json(value);
});
   
   
   
   
   
  });//End get method
  
  app.use("/", express.static(root));
  
  app.use("/", fallback('index.html', { root: root }));
  
  app.listen(process.env.PORT, function (err, result) {
    if (err) {
      console.log(err);
    }
     
    console.log('Running at:',process.env.PORT);
  });
