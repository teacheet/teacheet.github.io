package kr.co.iot;

import java.io.PrintStream;

public class FirstClass {
    private String name;

    public FirstClass(String name){
            this.name = name;
    }

    public String getName(){
            return  name;
    }


    public static void main(String args[]){
        PrintStream toConsole = System.out;

        FirstClass first = new FirstClass("곰돌이");

        toConsole.format("나이는 %d 이고, 이름은 %s 입니다", 35, first.getName());
    }
}
