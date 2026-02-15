let bankTransactions : number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditEntries:number = 0;
let debitEntries:number = 0;
let creditAmount = 0;
let debitAmount = 0;
let suspiciousEntry=0;
// 1. Print total number of credit and debit transactions completed
for(let i:number =0;i<bankTransactions.length;i++){
    if(bankTransactions[i]>0){
        creditAmount = creditAmount + bankTransactions[i];
        creditEntries++;
    }
    else{ 
        debitAmount = debitAmount + bankTransactions[i]
        debitEntries++;   
    }
    
}
//1. Print total number of credit and debit transactions completed
console.log('Total number of credit transactions: ' + creditEntries);
console.log('Total number of debit transactions: ' + debitEntries);

// 2. Print the total amount credited and debited in account
console.log('Total amount credited: ' + creditAmount);
console.log('Total amount debited: ' + (-debitAmount));

// 3. Print total amount remaining at the end in Bank Account
let remainingAmount = debitAmount + creditAmount;
console.log('Remaining amount: '+remainingAmount);

/*4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/

for(let i:number =0;i<bankTransactions.length;i++){
if(bankTransactions[i] > 10000 || bankTransactions[i] < -10000){
        console.log('Suspicious credit/ debit Transaction with Amount: ' + bankTransactions[i]);
        suspiciousEntry++;
    }
}
console.log('Total number of suspicious transactions: ' +suspiciousEntry);


