import java.util.Scanner;
class PalindromeString {
    //Palindrome the given String

    /*  static String reverseString(String s) {
        String t="";
        for(int i=s.length()-1; i>=0; i--){
            t=t+s.charAt(i);
        }
        return t;
    }
   static boolean isPalindrome(String s) {
        if(s.equals(reverseString(s))){
            return true;
        }
            return false;

    } */
    static boolean isPalindrome(String s) {

        int i=0;
        int j=s.length()-1;
        while(i<=j){
            if(s.charAt(i) != s.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(isPalindrome(s));

    }
}

