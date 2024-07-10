import java.util.*;
class Array2
{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int[][] a= new int[2][5];


        //Initializing values inside 2-D Arrays
        for(int i=0; i<a.length; i++)
        {
            for(int j=0; j<a[i].length; j++)
            {
                System.out.println("Enter the " + i + " row " + j + " column value: ");
                a[i][j] = sc.nextInt();
            }
        }

        //Printing the arrays
        System.out.println("The 2-D arrays are: ");
        for(int i=0; i<a.length; i++)
        {
            for(int j=0; j<a[i].length; j++)
            {
                System.out.println(a[i][j]);
            }
        }

    }
}