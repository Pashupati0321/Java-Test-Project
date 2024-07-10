import java.util.Scanner;
class String10 {
    //Implementation of trim()

    static String trim(String s) {
        String t="";
        int si=0, ei=0;
        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) != ' ')
            {
                 si=i;
                 break;
            }
        }
        for (int i = s.length()-1 ; i >=0; i--)
        {
            if (s.charAt(i) != ' ')
            {
                ei=i;
                break;
            }
        }
        for(int i=si; i<=ei; i++){
            t=t+s.charAt(i);
        }
        return t;
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(trim(s));
    }
}

