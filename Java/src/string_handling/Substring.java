import java.util.Scanner;
class Substring {
    //Substring the given String

    static void printAllSubstring(String st, int k) {

        int n=st.length();
        for(int s=0; s<=n-k; s++)
        {
            for(int e=s; e<=(s+k)-1; e++)
            {
                System.out.print(st.charAt(e));
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String st=sc.nextLine();
        int k=sc.nextInt();

        printAllSubstring(st, k);

    }
}

