import java.util.Scanner;
class String13 {
    //Implementation of startsWith()

    static boolean startsWith(String s, String t) {

        int count=0;
        for(int i=0; i<t.length(); i++){
            if(s.charAt(i) == t.charAt(count)){
                count++;
            }
        }
        if(t.length() == count){
            return true;
        }
        else{
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        String t=sc.nextLine();

        System.out.println(startsWith(s, t));
    }
}

