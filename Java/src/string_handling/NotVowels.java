import java.util.Scanner;
class NotVowels {
    //To get string without vowels

    static String removeVowel(String s) {
        String t="";
        for (int i = 0; i < s.length(); i++) {
            char c=s.charAt(i);
            if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){

            }
            else{
                t=t+c;
            }
        }
        return t;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(removeVowel(s));

    }
}

