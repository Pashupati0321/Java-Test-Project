import java.util.Scanner;
class String9 {
    //Implementation of lastIndexOf()

    static int lastIndexOf(String s, String c) {
        char key=c.charAt(0);
        for (int i = s.length()-1; i >=0; i--)
        {
            if (s.charAt(i) == key)
            {
                return i;
            }
        }
        return -1;
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        String c=sc.nextLine();

        System.out.println(lastIndexOf(s, c));
    }
}

