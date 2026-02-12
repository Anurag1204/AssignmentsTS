function loanEligibility(customerName: string,creditScore: number,income : number, isEmployed: boolean,debtToIncomeRatio:number): void{
     if(creditScore > 750){
        console.log("Hi!!" + customerName + ", Your loan is automatically approved");
     }
     else if(creditScore > 650 && creditScore <=750){
        if(income >= 50000 && isEmployed == true && debtToIncomeRatio < 0.4){
            console.log("Hi!!" + customerName +", Your Loan is approved with additional checks");
        }
        else{
             console.log("Hi!!" + customerName +", Your Loan is denied");
        }
     }
     else{
        console.log("Hi!!" + customerName +", Your Loan is denied");
     }
}

// Calling the function to verify the outcome
loanEligibility("John Doe",720,55000,true,0.35);

// Additional test cases to verify the sanity of logic
/*1. High credit score (auto-approval):
creditScore: 751, income: any, isEmployed: any, debtToIncomeRatio: any*/
loanEligibility("John Doe",751,0,false,0.35);

/* 2. Boundary credit score (just at auto-approval threshold):
creditScore: 750, income: 60000, isEmployed: true, debtToIncomeRatio: 0.39 */
loanEligibility("John Doe",750,60000,true,0.39);

/*3. Middle credit score, all conditions met:
creditScore: 700, income: 50000, isEmployed: true, debtToIncomeRatio: 0.39*/
loanEligibility("John Doe",700,50000,true,0.39);

/*4. Middle credit score, income just below threshold:
creditScore: 700, income: 49999, isEmployed: true, debtToIncomeRatio: 0.39*/
loanEligibility("John Doe",700,49999,true,0.39);

/*5. Middle credit score, not employed:
creditScore: 700, income: 60000, isEmployed: false, debtToIncomeRatio: 0.39*/
loanEligibility("John Doe",700,60000,false,0.39);

/*6. Middle credit score, debt-to-income ratio just at threshold:
creditScore: 700, income: 60000, isEmployed: true, debtToIncomeRatio: 0.4*/
loanEligibility("John Doe",700,60000,true,0.4);

/*7. Low credit score (denied):
creditScore: 649, income: 100000, isEmployed: true, debtToIncomeRatio: 0.1*/
loanEligibility("John Doe",649,100000,true,0.1);

/*8. Negative or zero values:
creditScore: 0, income: 0, isEmployed: false, debtToIncomeRatio: 0*/
loanEligibility("John Doe",0,0,false,0);

/*9. Edge values for debt-to-income ratio:
creditScore: 700, income: 60000, isEmployed: true, debtToIncomeRatio: 0.3999
creditScore: 700, income: 60000, isEmployed: true, debtToIncomeRatio: 0.4001*/
loanEligibility("John Doe",700,60000,true,0.3999);
loanEligibility("John Doe",700,60000,true,0.4001);
