import java.util.Scanner;
class Add {
    public static int Add(int n1, int n2){
        int n3 = n1+n2;
        return n3;
    }
    public static void main(String[] args){

        Scanner sc= new Scanner(System.in);
        int n1=sc.nextInt();
        int n2=sc.nextInt();
        System.out.println(Add(n1,n2));
    }
}