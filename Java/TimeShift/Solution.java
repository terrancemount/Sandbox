import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the timeConversion function below.
     */
    static String timeConversion(String s) {
       //split into hours minutes and seconds/am/pm
        String[] time = s.split(":");

		//&& time[2].charAt(2) == 'A'

        if(time[0].equals("12")){
            if(time[2].charAt(2) == 'A'){
            	time[0] = "00";
			}
        }else{
			if(time[2].charAt(2) == 'P') {
			   time[0] = Integer.toString(Integer.parseInt(time[0]) + 12);
			}
		}
        return String.format("%s:%s:%s", time[0], time[1], time[2].substring(0, 2));

    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws IOException {

        //String s = scan.nextLine();

		String[] test = {"12:00:00PM", "12:00:00AM", "03:00:00AM", "04:00:34PM"};


        //String result = timeConversion(s);


		for(int i = 0; i <  test.length; i++)
			System.out.println(test[i] + " = " + timeConversion(test[i]));
    }
}
