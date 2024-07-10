import java.util.Scanner;
import java.util.Arrays;

class GameOfThrones {
    //hacker rank - palindrome of anagrams(rearrangment of string called as anagram)

    static String gameOfThrones(String s) {
    char[] ar=s.toCharArray();
    Arrays.sort(ar);
    int i=0;
    int errorCount = 0;
    while(i<ar.length){
        if(i<ar.length-1 && ar[i] == ar[i+1]){
            i=i+2;
        }
        else{
            i++;
            errorCount++;
        }
    }
    if(errorCount<=1){
        return "YES";
    }
    else {
        return "NO";
    }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();


        System.out.println(gameOfThrones(s));

    }
}

