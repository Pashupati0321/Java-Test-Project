import java.util.Scanner;
class String8 {
    //Implementation of indexOf()

    static int indexOf(String s, String c) {
        char key=c.charAt(0);
        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) == key)
            {
                return i;
            }
        }
        return -1;
    }

    static int indexOf(String s, String c, int k) {
        char key=c.charAt(0);
        int count=0;
        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) == key)
            {
                count++;
            }
            if(count==k)
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
        int k=sc.nextInt();

        System.out.println(indexOf(s, c));
        indexOf(s,c,k);
    }
}

