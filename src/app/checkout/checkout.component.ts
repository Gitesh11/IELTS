import { Component, Input, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() price:number;
  @Input() username:string;
  constructor(private housing:HousingService) { }

  ngOnInit(): void {
    // console.log(this.username);
  }
    options = {
      "key": "rzp_test_iYcvZOtcUfYoX0", // Enter the Key ID generated from the Dashboard
      "amount":6000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      // "prefill": {
      //     "name": "Gaurav Kumar",
      //     "email": ""
      //     //"contact": "7770960820"
      // },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  rzp1;
  pay(){
    this.options.amount=(this.price*100);
    this.options.name=this.username;
    this.rzp1 = new this.housing.nativeWindow.Razorpay(this.options);
   this.rzp1.open();
   
  }
  }

