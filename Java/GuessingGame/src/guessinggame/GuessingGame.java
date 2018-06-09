/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package guessinggame;

import java.util.Random;
import java.util.Scanner;

/**
 *
 * @author Terrance Mount
 */
public class GuessingGame {

    /**
     * Main program for the guessing game.  Guess a number in range from 1 to 10 (inclusive).  
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String userInput;
        int correct = 0;
        int attempts = 0;
        
        System.out.println("Welcome to a guessing game.");
        
          do{
            attempts++;
            if(playGuessingGame(scan))
                correct++;
                
            System.out.format("You have guessed %d out of %d correctly.\n", correct, attempts);
            
            
            System.out.print("Do you want to continue (y/n)? => ");
            userInput = scan.nextLine();
        
        }while (userInput.length() > 0 && userInput.toUpperCase().charAt(0) == 'Y');
        
        scan.close();
    }
    
    public static boolean playGuessingGame(Scanner scan)
    {
        String guessStr;
        int guessInt;
        Random rand = new Random();
        int answer = rand.nextInt(10) + 1; //convert to a 1 to 10 number
        
            
        System.out.print(answer + "Please enter an integer in the range(1 to 10) => ");
        guessStr = scan.nextLine();
        
        try{
            guessInt = Integer.parseInt(guessStr);
        }catch(NumberFormatException e){
            System.out.println("You didn't enter a integer.");
            return false;
        }
        
        return guessInt == answer;
    }
    
}
