import java.util.*;
class Array1
{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        System.out.println("Array length is: "+n);
        int[] a= new int[n];

        //System.out.println("Array length is: "+a.length);

        for(int i=0; i<a.length; i++)
        {
            System.out.println("Enter the age: ");
            a[i] = sc.nextInt();
        }
        System.out.println("The ages are: ");
        for(int i=0; i<a.length; i++)
        {
            System.out.println(a[i]);
        }

    }
}