import java.util.Scanner;

class MarsExploration {
    //hacker-rank, Mars Exploration

    static int marsExploration(String s) {
        int count=0;
            for(int i=0; i<s.length(); i=i+3) {

                // if(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {

                if (s.charAt(i) != 'S') {
                    count++;
                }
                if (s.charAt(i + 1) != 'O') {
                    count++;
                }
                if (s.charAt(i + 2) != 'S') {
                    count++;
                }
            }
                /* else{
                    System.out.println("Please enter the string in UPPER case");
                } */
            return count;
        }

    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(marsExploration(s));

    }
}

