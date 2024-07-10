import java.util.Scanner;
class Substring1 {
    //Longest non-repeating Substring the given String

    static void nonRepSubstring(String s) {
        String res="";
        for(int i=0; i<s.length(); i++){
            String temp="";
            for(int j=i; j<s.length(); j++){
                if(temp.indexOf(s.charAt(j)) == -1){
                    temp=temp+s.charAt(j);
                }
                else{
                    break;
                }
            }
            if(temp.length() > res.length()){
                res=temp;
            }
        }
        System.out.println(res);
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        nonRepSubstring(s);

    }
}

