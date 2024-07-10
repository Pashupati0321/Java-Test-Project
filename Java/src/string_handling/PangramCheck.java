import java.util.Scanner;
import java.util.Arrays;

class PangramCheck {
    //to check string is Pangram or not(Pangram means such string which contains all english alphabets)

    static String isPangram(String s) {
      String temp="abcdefghijklmnopqrstuvwxyz";
      s=s.toLowerCase();
      //System.out.println(s);
      int count=0;
      for(int i=0; i<temp.length(); i++){
          if(s.indexOf(temp.charAt(i)) >= 0)
              count++;
          else
              break;
      }

     // System.out.println(count);
      if(count == 26)
          return "YES";
      else
          return "NO";
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(isPangram(s));

    }
}

