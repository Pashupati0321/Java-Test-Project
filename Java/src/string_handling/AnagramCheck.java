import java.util.Scanner;
import java.util.Arrays;

class AnagramCheck {
    //to check string is anagrams or not(rearrangment of string called as anagram)

    static boolean isAnagram(String s1, String s2) {
        String temp="";
        //remove space(special charatcter) from strings
        for(int i=0; i<s1.length(); i++){
            if(s1.charAt(i) != ' '){
                temp = temp + s1.charAt(i);
            }
        }
        s1=temp;
        temp="";
        for(int i=0; i<s2.length(); i++){
            if(s2.charAt(i) != ' '){
                temp = temp + s2.charAt(i);
            }
        }
        s2=temp;

        //Converting to lowercase to get same ASCII
        s1=s1.toLowerCase();
        s2=s2.toLowerCase();

        //convert into char arrays
        char[] arr1=s1.toCharArray();
        char[] arr2=s2.toCharArray();

        //sort the arrays
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        //convert back to String from char array
        s1=new String(arr1);
        s2=new String(arr2);

        return s1.equals(s2);

    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s1=sc.nextLine();
        String s2=sc.nextLine();

        System.out.println(isAnagram(s1, s2));

    }
}

