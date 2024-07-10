import java.util.Scanner;
class String14 {
    //Implementation of endsWith()

    static boolean endsWith(String s, String t) {

        int count=0;
        for(int i=s.length()-t.length(); i<s.length(); i++){
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

        System.out.println(endsWith(s, t));
    }
}

