package com.iot.account;

public class Player {
    private int playerHp;
    private int playerDamage;
    private String playerName;

    public Player(){}

    public Player(int playerHp,int pDamage,String pName){
        this.playerHp = playerHp;
        playerDamage = pDamage;
        playerName = pName;
    }

    public int attack( int otherHp, int pDamage ){
        otherHp -= pDamage;
        return otherHp;
    }


    @Override
    public String toString() {
        return playerName + "의 체력은" + playerHp + " 원 입니다";
    }
}
