package com.iot.account;

public class AccountMain {
    public static void main(String args[]){

        Account account1 = new Account(50000,"12345","표인수");
        Account account2 = new Account(60000,"45567","문재인");


        displayWithdraw(account1);
        displayWithdraw(account2);

        displayDeposit(account1);
        displayDeposit(account2);

        displayInterest(account1);
        displayInterest(account2);

    }
    public static void displayWithdraw(Account account){
        account.withdraw(10000);
        System.out.println(account.toString());
    }
    public static void displayDeposit(Account account){
        account.deposit(10000);
        System.out.println(account.toString());

    }
    public static void displayInterest(Account account){
        account.interest();
        System.out.println(account.toString());
    }
}
