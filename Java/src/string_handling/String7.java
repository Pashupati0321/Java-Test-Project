import java.util.Scanner;
class String7 {
//Implementation of toUpperCase()

    static String toUpperCase(String s) {
        String t="";
        for (int i = 0; i < s.length(); i++){
            char c=s.charAt(i);

            if (c>= 'a' && c<='z')
            {
               t=t+(char)(c-32);
            }
            else{
                t=t+c;
            }
        }
        return t;
    }

    //Implementation of toLowerCase()
    static String toLowerCase(String s) {
        String t="";
        for (int i = 0; i < s.length(); i++){
            char c=s.charAt(i);

            if (c>= 'A' && c<='Z')
            {
                t=t+(char)(c+32);
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
        System.out.println("Convert into Upper case: "+ toUpperCase(s));
        System.out.println("Convert into Lower case: "+ toLowerCase(s));
    }
}

