import java.util.Scanner;
import java.util.Arrays;

class LongestPalindrome {
    //to check, longest palindrome substring in given string

    static boolean isPalindrome(String st) {

        int i=0;
        int j=st.length()-1;
        while(i<=j){
            if(st.charAt(i) != st.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    static String printLongestPalindromicSubstring(String st) {

        int n = st.length();
        String res = "";
        for (int len = 1; len < n; len++)
        {
            for (int s = 0; s <= (n - len); s++)
            {
                String temp = "";
                for (int e = s; e <= (s + len) - 1; e++)
                {
                    temp = temp + st.charAt(e);
                }
                if (isPalindrome(temp))
                {
                    if (temp.length() > res.length())
                    {
                        res = temp;
                    }
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println(printLongestPalindromicSubstring(s));

    }
}

