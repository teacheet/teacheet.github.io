package com.iot.account;

/**
 *  계좌 클래스
 * */

public class Account {
    /*
    * 인스턴스 변수를 초기화 하지 않을 시 생성시 기본값으로 초기화 된다
    * */
    private float balance;
    private String accountNumber;
    private String accountOwnerName;

    /*
    * 생성자를 오버로딩시 디폴트 생성자는 컴파일러가 만들지 않는다.
    * 나중에 확장을 위해선 디폴트 생성자는 사용하지 않아도  걍 만들어 놓는 습관을 가지도록 하자
    * */
    public Account(){}

    public Account (float balance, String aNumber, String aName){
        this .balance = balance;
        accountNumber = aNumber;
        accountOwnerName = aName;
    }

    public boolean deposit(float money){
        //메소드 안에서 선언한 변수는 반드시 초기화를 진행한다
        boolean flag = false;
        if(money > 0.0f){
            this.balance += money;
            flag = true;
        }
        return  flag;
    }
    public  boolean withdraw(float money){
        boolean flag = false;

        if(balance > 0 && balance >= money){
            balance -= money;
            flag = true;
        }
        return flag;
    }
    public  float getBalance(){
        return this.balance;
    }
    public void interest() {
//        float tempBalance = balance * 0.1f;
//        balance += tempBalance;
        balance += (balance * 0.1f);
    }

    @Override
    public String toString() {
        return accountOwnerName + " 님의 현재 잔액은 " + balance + " 원 입니다";
    }
}
