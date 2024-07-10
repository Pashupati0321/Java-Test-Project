import java.util.*;
class Array3
{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int[][][] a= new int[2][2][4];


        //Initializing values inside 2-D Arrays
        for(int i=0; i<a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                for (int k = 0; k < a[i][j].length; k++) {
                    System.out.println("Enter the " + i + " block " + j + " row " + k + " column value: ");
                    a[i][j][k] = sc.nextInt();
                }
            }
        }
        //Printing the arrays
        System.out.println("The 3-D arrays are: ");
        for(int i=0; i<a.length; i++)
        {
            for(int j=0; j<a[i].length; j++)
            {
                for (int k = 0; k < a[i][j].length; k++)
                {
                    System.out.print(a[i][j][k] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }
        System.out.println();
    }
}