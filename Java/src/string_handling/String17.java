import java.util.Scanner;
class String17 {
    //Implementation of substring(), substring(startIndex, endIndex)

    static String substring(String s, int startIndex) {
        String t="";
        for (int i = startIndex; i < s.length(); i++) {
            t=t+s.charAt(i);
        }
        return t;
    }
    static String substring(String s, int startIndex, int endIndex) {
        String t="";
        for (int i = startIndex; i < endIndex; i++) {
            t=t+s.charAt(i);
        }
        return t;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        int startIndex=sc.nextInt();
        int endIndex=sc.nextInt();

        System.out.println(substring(s, startIndex));
        System.out.println(substring(s, startIndex, endIndex));
    }
}

