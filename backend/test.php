<?php 

/* Template Name: Loan calculator Form */ 

?>
<?php
$new_amount=$_GET['a'];
$downpayment=$_GET['dp'];
$new_year=$_GET['y'];
$new_rate=$_GET['r'];
$property_tax=$_GET['pt'];
$home_insurance=$_GET['hi'];
$mortgage_insurance=$_GET['mi'];
$emi=$_GET['emi'];
$monthly_debts=$_GET['mps'];
$monthly_incomes=$_GET['minc'];
$max_amount = $new_amount * 2;
$max_down_payment = $downpayment * 2;
?>
<input type="hidden" value="<?php echo $emi;?>" id="emi" name="emi">
  <!--   Big container   -->
      <div class="container">
          <div class="row loan_calculation">
            <div class="col-md-4 loan_info">
                <h2>Loan Information</h2>
                <div class="loan">                   
                    <div class="row">
                        <div class="col-md-12 loan_field">
                            <label class="control-label">Purchase Price($):</label>
                            <span id="errorMsg" style="display:none;">Please enter 100000-10000000 value only.</span>
                            <div class="dollar-prefix-input">
                                <input type="number" id="amount" value="<?php echo $new_amount;?>">
                                <span class="commaValue" id="amountVal"><?php echo $new_amount;?></span>
                            </div>
                            <!--<input name="amount" type="range" min="100000" max="10000000" step="10000" value="<?php echo $new_amount;?>" id="amount_slide" class="slider"> -->
                            <div class="dollar-prefix-input purchase-price-id">
                                <input name="amount" type="range" min="1" max="<?php echo $max_amount ?>" value="<?php echo $new_amount;?>" id="amount_slide" class="slider">
                            </div>
                            <!-- <div class="row loanamount"><span class="col-md-2 left">$5K</span><span class="col-md-2 right">$9M</span></div> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 loan_field">
                            <label class="control-label">Down Payment($):</label>
                            <!-- <div class="dollar-prefix-input">
                                <input type="number" id="downPayment" value="<?php echo $downpayment;?>">
                                <span class="commaValue" id="downPaymentVal"><?php echo $downpayment;?></span>
                                <div class="dollar-prefix-input">
                                    <input name="downPayment" type="range" min="1" max="<?php echo $max_down_payment ?>" value="<?php echo $downpayment;?>" id="down_payment_slide" class="slider">
                                </div>
                            </div> -->

                            <div class="dollar-prefix-input">
                                <input type="number" id="downPayment" value="<?php echo $downpayment;?>" />
                                <span class="commaValue" id="downPaymentVal"><?php echo $downpayment;?></span>
                            </div>
                            <input type="range" id="downPayment" name="downPayment" min="1" value="<?php echo $downpayment;?>" max="<?php echo $max_down_payment ?>" autocomplete="off" step="500" class="dpt_slides">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="dti">Debt To Income(%):</label>
                            <!-- <input type="number" name="dti" id="dti" autocomplete="off" min="14" max="45" value="45"> -->
                            <div class="dollar-prefix-input debt-income">
                                <input type="number" id="dti" value="45" />
                                <span class="commaValue" id="dtiVal">45</span>
                            </div>
                            <input type="range" id="dti" name="dti" min="14" value="45" max="45" autocomplete="off" step="1" class="dpt_slides">
                            <input type="hidden" id="calMonthlyDebts" value="<?php echo $monthly_debts;?>" name="calMonthlyDebts" />
                            <input type="hidden" id="calMonthlyIncomes" value="<?php echo $monthly_incomes;?>" name="calMonthlyIncomes" />
                        </div>
                        <div class="input-overlay-text_right">%</div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 loan_field">
                            <label class="control-label">Interest Rate(%) :<a href="https://citycreekmortgage.com/todays-rates/" target="_blank">View Current Rates</a></label>
                            <span id="errorMsgc" style="display:none;">Please enter 0-20 value only.</span>
                            <input  type="number" id="interest" value="<?php echo $new_rate;?>">
                            <input name="loan_intst" type="range" min="2.5" max="25" step=".0125" value="<?php echo $new_rate;?>" id="interest_slide" class="slider">
                            <div class="row loanamount"><span class="col-md-2 left">2%</span><span class="col-md-2 right">9%</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 loan_field">
                            <label class="control-label" style="float: none;">Loan Term Years:</label>
                            <!-- <span id="errorMsgb" style="display:none;">Please enter 1-40 value only.</span>
                            <input type="number" id="years" value="<?php echo $new_year;?>">
                            <input name="year" type="range" min="15" max="30" step="15" value="<?php echo $new_year;?>" id="years_slide" class="slider">
                            <div class="row loanamount"><span class="col-md-2 left">15yr</span><span class="col-md-2 right">30yr</span></div> -->
                            <!-- <h5>Loan term:</h5> -->
                            <div class="switch-field">
                                <input type="radio" id="radio-one" name="term" value="15" <?php if($new_year == 15){echo 'checked'; } ?> />
                                <label for="radio-one">15 Years</label>
                                <input type="radio" id="radio-two" name="term" value="30" <?php if($new_year == 30){echo 'checked'; } ?> />
                                <label for="radio-two">30 Years</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row hide-row" style=""> 
                        <div class="col-md-12">
                            <label for="propertyTaxRate">Property Tax(%):</label>
                            <input type="number" id="propertyTaxRate" name="propertyTaxRate" min="0" max="100" step=".01" autocomplete="off" value="<?php echo $property_tax;?>">
                        </div>
                        <div class="input-overlay-text_right">%</div>
                    </div>
                    <div class="row hide-row" style=""> 
                        <div class="col-md-12">
                            <label for="homeInsurance">Home Insurance(%):</label>
                            <input type="number" id="homeInsurance" name="homeInsurance" min="0" max="100" step=".01" autocomplete="off" value="<?php echo $home_insurance;?>">
                        </div>
                        <div class="input-overlay-text_right">%</div>
                    </div>
                    <div class="row hide-row" style=""> 
                        <div class="col-md-12">
                            <label for="mortgageInsurance">Mortgage Insurance(%):</label>
                            <input type="number" id="mortgageInsurance" name="mortgageInsurance" min="0" max="100" step=".01" autocomplete="off" value="<?php echo $mortgage_insurance;?>">
                        </div>
                        <div class="input-overlay-text_right">%</div>
                    </div>
                    <div class="row hide-row"> 
                        <div class="col-md-12">
                            <label for="hoa_dues">HOA Dues($):</label>
                            <div class="dollar-prefix-input">
                                <input type="number" id="hoa_dues" name="hoa_dues" value="0">
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </div> 
            <div class="col-md-1"></div>
            <div class="col-md-7 loan_info mid-sec">
                <h2>Your Monthly Mortgage</h2>
                <div id="loading">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/460875/loading.gif" alt="">
                </div>
                <div id="results" class="loan">
                    <table id="decimal-table">
                        <tr>
                            <th><label class="control-label">Purchase Price</label></th>
                            <th  class="no-decimals">$<span id="purchase_price"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Down Payment</label></th>
                            <th>$<span id="total_dp"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Principal & Interest:</label></th>
                            <th>$<span id="monthly-payment"></span></th>
                        </tr>
                        <!--<tr>
                            <th><label class="control-label">Principal:</label></th>
                            <th>$<span id="mortgage_principal"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Interest:</label></th>
                            <th>$<span id="total-interest"></span></th>
                        </tr>-->
                        <tr>  
                            <th><label class="control-label">Home Insurance:</label></th>
                            <th>$<span id="home-insurance"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Property Tax:</label></th>
                            <th>$<span id="property-tax"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Mortgage Insurance</label></th>
                            <th>$<span id="mortgage-insurance"></span></th>
                        </tr>              
                        <tr>
                            <th><label class="control-label">HOA Dues:</label></th>
                            <th>$<span id="monthly_hoa"></span></th>
                        </tr>
                        <tr>
                            <th><label class="control-label">Total Monthly Payment:</label></th>
                            <th>$<span id="monthly_total_pay"></span></th>
                        </tr>
                        <!-- <tr>
                            <th><label class="control-label">Total Down Payment Paid</label></th>
                            <th>$<span id="total_dp"></span></th>
                        </tr> -->
                        <tr>
                            <th><label class="control-label">Total Interest Paid Over Life Of The Loan</label></th>
                            <th>$<span id="total_interest"></span></th>
                        </tr>    
                        <tr>
                            <th><label class="control-label">Total Principal Paid Over Life Of The Loan</label></th>
                            <th>$<span id="total_principal"></span></th>
                        </tr>
                </table>
                <div class="row">
                  <!-- <div class="col-md-2">
                  </div> -->
                  <div class="col-md-12">
                    <div class="loan">
                      <div id="donut_single" style="width: 100%;"></div>
                    </div>
                  </div>
                  <!-- <div class="col-md-2">
                  </div> -->
                </div>

                <div class="row">
                  <div class="col-md-12 text-center">
                    <button id="btn_calculate" data-backdrop="static" data-toggle="modal" data-target="#exampleModalLong">View Amortization Schedule</button>
                  </div>
                </div>
              </div>
            </div> 
            
            <div class="col-md-4 loan_info">
                
            </div> 
      
        <div class="col-md-12 loan_info hide" id="tbl_result">
           
       <!--h2>Monthly Loan Reports</h2>
          <div class="loan">
                <div class="row">
                  <div class="col-md-12">
          <table>
            <thead>
            <tr>
              <th>Month</th>
              <th>Loan EMI</th>
              <th>Total Interest Payable</th>
              <th>Total Payment</th>
              </tr>
            </thead>
            <tbody id="tbl_body">    
            </tbody>
          </table>
          </div>
          </div>
         </div-->
         </div>
          </div><!-- end row -->      
      </div> <!--  big container -->
  

<script>


document.addEventListener("DOMContentLoaded", function() {
    let test = () => {
      let a = document.querySelectorAll("#decimal-table tr th span");
      console.log(a)
      a.forEach((item)=>{
          item.textContent = parseInt(parseFloat(item?.textContent?.split(",").join("")));
          console.log(item.textContent);
      })
    };
    
    
    console.log("function called");
    test();
})


    jQuery(document).ready(function($){
        function numberWithCommas(number) {
            var parts = number.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
        $(".commaValue").each(function() {
            var num = $(this).text();
            var commaNum = numberWithCommas(num);
            $(this).text(commaNum);
        });
        
        jQuery(document).on('input', '#downPayment', function() {
            jQuery('#downPayment').val( jQuery(this).val() );
            var num = jQuery('#downPayment').val();
            var commaNum = numberWithCommas(num);
            jQuery('#downPaymentVal').text(commaNum);
        });

        jQuery(document).on('input', '#amount', function() {
            jQuery('#amount').val( jQuery(this).val() );
            var num = jQuery('#amount').val();
            var commaNum = numberWithCommas(num);
            jQuery('#purchase_price').text(commaNum);
        });
        jQuery(document).on('input', '#dti', function() {
           jQuery('#dti').val( jQuery(this).val() );
            var num = jQuery('#dti').val();
           var commaNum = numberWithCommas(num);
           jQuery('#dtiVal').text(commaNum);
        });
    });  
    
    
</script>

<style>
button#btn_calculate {
    background-color: #1d6d65;
    color: #fff;
    border-color: #1d6d65;
    font-family: 'times_new_roman_cyrregular',sans-serif;
    font-weight: 500;
    font-size: 21px;
    text-shadow: 1px 1px #000;
    padding: 8px 35px;
    position: relative;
}

button#btn_calculate::before {
    border-radius: 2px;
    content: '';
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    box-shadow: inset 0 0 5px 3px rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.5);
}
</style>