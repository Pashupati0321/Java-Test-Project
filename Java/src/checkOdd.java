import java.util.Scanner;
class CheckOdd {
    public static int checkOdd(int n1){
            if (n1 % 2 != 0) {
                return n1;
            } else {
                return -1; // Indicating the number is even
            }
        }
    public static void main(String[] args){

        Scanner sc= new Scanner(System.in);
        int n1=sc.nextInt();
        System.out.println(checkOdd(n1));
    }
}