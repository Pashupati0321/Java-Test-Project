import java.util.Scanner;
class ReverseString {
    //Reverse the given String

    static String reverseString(String s) {
    String t="";
    for(int i=s.length()-1; i>=0; i--){
     t=t+s.charAt(i);
    }
    return t;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(reverseString(s));

    }
}

