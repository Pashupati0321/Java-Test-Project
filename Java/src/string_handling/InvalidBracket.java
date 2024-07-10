import java.util.Scanner;

class InvalidBracket {
    //to check, invalid brackets

    static int invalidBracket(String s) {

        int bracket=0, count=0;
        for(int i=0; i<s.length(); i++){
            char c=s.charAt(i);
            if(c== '('){
                bracket++;
            }
            else{
                if(bracket<=0){
                    count++;
                }
                else{
                    bracket--;
                }
            }
        }
        return count+bracket;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(invalidBracket(s));

    }
}

