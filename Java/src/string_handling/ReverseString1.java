import java.util.Scanner;
class ReverseString1 {
    //Reverse the given String

    static String reverse(String s) {
        char[] c=s.toCharArray();
        int i=0;
        int j=c.length-1; //length is variable in case of Array but method in case of String

        while(i<=j){
            char temp=c[i];
            c[i] = c[j];
            c[j] = temp;
            i++;
            j--;
        }
        return new String(c);
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(reverse(s));

    }
}

