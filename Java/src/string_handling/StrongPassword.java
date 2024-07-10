import java.util.Scanner;
class StrongPassword {
    //To get string strong password

    static int isStrongPassword(String s) {
        int digit=1, lc=1, uc=1, sc=1;
        for (int i = 0; i < s.length(); i++) {
            char c=s.charAt(i);
            if(c >= '0' && c <= '9'){
              digit=0;
            }
            else if(c >= 'a' && c <= 'z'){
                lc=0;
            }
            else if(c >= 'A' && c <= 'Z'){
                uc=0;
            }
            else {
                sc=0;
            }
        }
        if((digit+lc+uc+sc) > 6-s.length()){
            return (digit+lc+uc+sc);
        }
        else{
            return 6-s.length();
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(isStrongPassword(s));

    }
}

