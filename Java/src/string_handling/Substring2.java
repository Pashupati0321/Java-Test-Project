import java.util.Scanner;
class Substring2 {
    //hacker rank

    static long repeatedString(String s, long n) {
    int countA=0;
    for(int i=0; i<s.length(); i++){
        if(s.charAt(i) == 'a'){
            countA++;
        }
    }
    long count1=n/s.length() * countA;
    long count2=0;
    for(int i=0; i<n%s.length(); i++){
        if(s.charAt(i) == 'a'){
            count2++;
        }
    }
    return count1+count2;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        long n=10;

        System.out.println(repeatedString(s, n));

    }
}

