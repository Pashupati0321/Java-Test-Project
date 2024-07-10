import java.util.Scanner;
class String18 {
    //To check how many vowels in given String

    static int isVowel(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
          char c=s.charAt(i);
          if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
              count++;
          }
        }
        return count;
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(isVowel(s));

    }
}

