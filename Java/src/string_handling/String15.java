import java.util.Scanner;
class String15 {
    //Implementation of contains()

    static boolean contains(String s, String t) {

        int count=0;
        for(int i=0; i<s.length() && count<t.length(); i++){
            if(s.charAt(i) == t.charAt(count)){
                count++;
            }
            else{
                count=0;
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

        System.out.println(contains(s, t));
    }
}

