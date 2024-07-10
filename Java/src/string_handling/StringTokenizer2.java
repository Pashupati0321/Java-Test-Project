class StringTokenizer2 {

    static int spaceCount(String s) {     //static int wordCount(String s)
        int count = 0;
        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) = ' ')
            {
                count++;
            }
        }
            return count; //return count+1;
    }
    public static void main(String[] args) {
        String s = "How are you";

            System.out.println(spaceCount(s)); //System.out.println(wordCount(s));
        }
    }

