import java.util.Scanner;
class String11 {
    //Implementation of toCharArray()

    static char[] toCharArray(String s) {
     char[] c=new char[s.length()];
     for(int i=0; i<s.length(); i++){
         c[i] = s.charAt(i);
     }
     return c;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(toCharArray(s));
    }
}

